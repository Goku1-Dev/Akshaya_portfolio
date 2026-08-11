import type { TextPart } from '../types';

interface AccentTextProps {
  parts: TextPart[];
}

/** Renders an array of { text, accent } fragments, wrapping accented ones in <span class="accent">. */
export default function AccentText({ parts }: AccentTextProps) {
  return (
    <>
      {parts.map((part, i) => (
        <span key={i} className={part.accent ? 'accent' : undefined}>
          {part.text}
          {i < parts.length - 1 ? ' ' : ''}
        </span>
      ))}
    </>
  );
}
