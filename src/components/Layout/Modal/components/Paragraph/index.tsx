import type { ParagraphProps } from "./interface";

export default function Paragraph({ headline, data, inRow }: ParagraphProps) {
  return (
    <div className={inRow}>
      <div className="font-headline text-lg">{headline}</div>
      <div>{data}</div>
    </div>
  );
}
