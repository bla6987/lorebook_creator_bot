import { XMLParser } from 'fast-xml-parser';
import { ExtendedWIEntry } from './types.js';

const parser = new XMLParser();

function createRandomNumber(length: number): number {
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface XmlParseOptions {
  previousContent?: string;
}

const parseBooleanField = (value: unknown): boolean | undefined => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'number') return value !== 0;
  if (typeof value !== 'string') return undefined;
  const normalized = value.trim().toLocaleLowerCase();
  if (['true', '1', 'yes', 'y'].includes(normalized)) return true;
  if (['false', '0', 'no', 'n'].includes(normalized)) return false;
  return undefined;
};

const parseNumberField = (value: unknown): number | undefined => {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  const parsed = Number(trimmed);
  return Number.isFinite(parsed) ? parsed : undefined;
};

const parseStringField = (value: unknown): string => {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  return '';
};

const buildOptionalXmlFields = (entry: ExtendedWIEntry) => {
  const fields: string[] = [];
  if (entry.constant !== undefined) fields.push(`    <constant>${entry.constant}</constant>`);
  if (entry.vectorized !== undefined) fields.push(`    <vectorized>${entry.vectorized}</vectorized>`);
  if (entry.order !== undefined) fields.push(`    <order>${entry.order}</order>`);
  if (entry.position !== undefined) fields.push(`    <position>${entry.position}</position>`);
  if (entry.depth !== undefined && entry.depth !== null) fields.push(`    <depth>${entry.depth}</depth>`);
  if (entry.role !== undefined && entry.role !== null) fields.push(`    <role>${entry.role}</role>`);
  return fields.length > 0 ? `${fields.join('\n')}\n` : '';
};

export function parseXMLOwn(xml: string, options: XmlParseOptions = {}): Record<string, ExtendedWIEntry[]> {
  let processedXml = xml;
  const { previousContent } = options;

  // Remove code blocks
  processedXml = processedXml.replace(/```xml/g, '').replace(/```/g, '');

  // Strip reasoning/thinking blocks emitted by some models (e.g. DeepSeek R1, QwQ)
  // before they produce the actual XML answer.
  processedXml = processedXml.replace(/<think(?:ing)?[^>]*>[\s\S]*?<\/think(?:ing)?>/gi, '');
  processedXml = processedXml.replace(/<reasoning[^>]*>[\s\S]*?<\/reasoning>/gi, '');

  // Merge with previous content if exists
  if (previousContent) {
    processedXml = previousContent + processedXml.trimEnd();
  }

  // Extract just the <lorebooks> region, ignoring any surrounding prose.
  // Fall back to a singular <lorebook> root that some models emit.
  const lorebooksRegion =
    processedXml.match(/<lorebooks>[\s\S]*<\/lorebooks>/i) ?? processedXml.match(/<lorebook>[\s\S]*<\/lorebook>/i);
  if (lorebooksRegion) {
    processedXml = lorebooksRegion[0];
  }

  // Ensure XML is complete by checking for imbalanced tags
  if (processedXml.includes('<entry>') && !processedXml.includes('</entry>')) {
    throw new Error('Incomplete XML: Missing </entry> tag');
  }
  if (processedXml.includes('<content>') && !processedXml.includes('</content>')) {
    throw new Error('Incomplete XML: Missing </content> tag');
  }

  const entriesByWorldName: Record<string, ExtendedWIEntry[]> = {};
  try {
    const rawResponse = parser.parse(processedXml);
    // console.log('Raw response', rawResponse);
    const root = rawResponse.lorebooks ?? rawResponse.lorebook;
    if (!root || !root.entry) {
      return entriesByWorldName;
    }

    const entries: any[] = Array.isArray(root.entry) ? root.entry : [root.entry];
    for (const entry of entries) {
      const worldName = entry.worldName;
      if (!worldName) {
        continue;
      }
      if (!entriesByWorldName[worldName]) {
        entriesByWorldName[worldName] = [];
      }
      const parsedEntry: ExtendedWIEntry = {
        uid: parseNumberField(entry.id) ?? createRandomNumber(6),
        key: parseStringField(entry.triggers)
          .split(',')
          .map((t: string) => t.trim())
          .filter(Boolean),
        content: parseStringField(entry.content),
        comment: parseStringField(entry.name),
        disable: false,
        keysecondary: [],
      };

      const constant = parseBooleanField(entry.constant);
      if (constant !== undefined) parsedEntry.constant = constant;

      const vectorized = parseBooleanField(entry.vectorized);
      if (vectorized !== undefined) parsedEntry.vectorized = vectorized;

      const order = parseNumberField(entry.order);
      if (order !== undefined) parsedEntry.order = order;

      const position = parseNumberField(entry.position);
      if (position !== undefined) parsedEntry.position = position;

      const depth = parseNumberField(entry.depth);
      if (depth !== undefined) parsedEntry.depth = depth;

      const role = parseNumberField(entry.role ?? entry.roleAtDepth ?? entry.depth_role);
      if (role !== undefined) parsedEntry.role = role;

      entriesByWorldName[worldName].push(parsedEntry);
    }

    return entriesByWorldName;
  } catch (error: any) {
    console.error(error);
    throw new Error('Model response is not valid XML');
  }
}

export function getPrefilledXML(worldName: string, entry: ExtendedWIEntry): string {
  return `
<lorebooks>
  <entry>
    <worldName>${worldName}</worldName>
    <id>${entry.uid}</id>
    <name>${entry.comment}</name>
    <triggers>${entry.key.join(',')}</triggers>
${buildOptionalXmlFields(entry)}    <content>${entry.content}`;
}

export function getFullXML(worldName: string, entry: ExtendedWIEntry): string {
  return `
<lorebooks>
  <entry>
    <worldName>${worldName}</worldName>
    <id>${entry.uid}</id>
    <name>${entry.comment}</name>
    <triggers>${entry.key.join(',')}</triggers>
${buildOptionalXmlFields(entry)}    <content>${entry.content}</content>
  </entry>
</lorebooks>`;
}
