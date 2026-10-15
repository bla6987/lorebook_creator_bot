import type { ContextToSend } from './settings.js';

type MessageSelection = ContextToSend['messages'];

const nonnegativeInteger = (value: number, label: string): number => {
  if (!Number.isSafeInteger(value) || value < 0) {
    throw new Error(`${label} must be a nonnegative integer.`);
  }
  return value;
};

export function parseMessageRangeArgument(argument: string): MessageSelection {
  const value = argument.trim().toLowerCase();
  if (value === 'all' || value === 'none') return { type: value };
  const count = /^(first|last):(\d+)$/.exec(value);
  if (count) {
    const amount = nonnegativeInteger(Number(count[2]), 'Message count');
    return count[1] === 'first' ? { type: 'first', first: amount } : { type: 'last', last: amount };
  }
  const range = /^range:(\d+)-(\d+)$/.exec(value);
  if (range) {
    const start = nonnegativeInteger(Number(range[1]), 'Message range start');
    const end = nonnegativeInteger(Number(range[2]), 'Message range end');
    if (start > end) throw new Error('Message range start must not exceed its end.');
    return { type: 'range', range: { start, end } };
  }
  throw new Error(`Invalid messages argument: "${argument}". Use all, none, first:N, last:N, or range:S-E.`);
}

/** Convert a selection to the inclusive indexes expected by the installed prompt builder. */
export function getMessageIndexes(
  messages: MessageSelection,
  chatLength: number,
): { start: number; end: number } | undefined {
  nonnegativeInteger(chatLength, 'Chat length');
  let start = 0;
  let end = chatLength - 1;
  switch (messages.type) {
    case 'all':
      return undefined;
    case 'none':
      return { start: -1, end: -1 };
    case 'first': {
      const count = nonnegativeInteger(messages.first ?? 10, 'First message count');
      end = Math.min(count, chatLength) - 1;
      break;
    }
    case 'last': {
      const count = nonnegativeInteger(messages.last ?? 10, 'Last message count');
      start = Math.max(0, chatLength - count);
      break;
    }
    case 'range':
      if (!messages.range) throw new Error('Message range requires a start and end.');
      start = nonnegativeInteger(messages.range.start, 'Message range start');
      end = nonnegativeInteger(messages.range.end, 'Message range end');
      if (start > end) throw new Error('Message range start must not exceed its end.');
      end = Math.min(end, chatLength - 1);
      break;
  }
  if (start > end) return { start: -1, end: -1 };
  // The installed builder treats end=0 as unbounded. A fractional positive
  // index survives that check; slice truncates end+1 to 1, selecting only index 0.
  return { start, end: end === 0 ? 0.5 : end };
}
