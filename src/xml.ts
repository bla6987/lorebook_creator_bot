import { XMLParser } from 'fast-xml-parser';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';

const parser = new XMLParser();

function createRandomNumber(length: number): number {
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface XmlParseOptions {
  previousContent?: string;
}

export function parseXMLOwn(xml: string, options: XmlParseOptions = {}): Record<string, WIEntry[]> {
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

  const entriesByWorldName: Record<string, WIEntry[]> = {};
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
      entriesByWorldName[worldName].push({
        uid: entry.id ?? createRandomNumber(6),
        key: entry.triggers?.split(',').map((t: string) => t.trim()) ?? [],
        content: entry.content ?? '',
        comment: entry.name ?? '',
        disable: false,
        keysecondary: [],
      });
    }

    return entriesByWorldName;
  } catch (error: any) {
    console.error(error);
    throw new Error('Model response is not valid XML');
  }
}

export function getPrefilledXML(worldName: string, entry: WIEntry): string {
  return `
<lorebooks>
  <entry>
    <worldName>${worldName}</worldName>
    <id>${entry.uid}</id>
    <name>${entry.comment}</name>
    <triggers>${entry.key.join(',')}</triggers>
    <content>${entry.content}`;
}

export function getFullXML(worldName: string, entry: WIEntry): string {
  return `
<lorebooks>
  <entry>
    <worldName>${worldName}</worldName>
    <id>${entry.uid}</id>
    <name>${entry.comment}</name>
    <triggers>${entry.key.join(',')}</triggers>
    <content>${entry.content}</content>
  </entry>
</lorebooks>`;
}
