const WORDS_PER_MINUTE = 250;

/** Formats a millisecond Unix timestamp as a short, readable date. */
export function formatDate(timestampMs: number): string {
  return new Date(timestampMs).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/** Estimated reading time in minutes at 250 words per minute, rounded up to at least 1. */
export function readingTimeMinutes(wordCount: number): number {
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}
