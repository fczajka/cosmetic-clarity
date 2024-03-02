import type { ListProps } from "./interface";

export default function List({ headline, data, inRow }: ListProps) {
  return (
    <div className={inRow}>
      <div className="font-headline text-lg">{headline}</div>
      <ul>{data?.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}
