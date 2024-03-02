import { useRef, type MouseEvent } from "react";
import type { MutableRef, ResultProps } from "./interface";
import Paragraph from "./components/Paragraph";
import List from "./components/List";

export default function Modal({ data, setIsOpen }: ResultProps) {
  const elRef: MutableRef = useRef<HTMLDivElement>(null);
  const {
    title,
    functional_groups,
    function_in_product,
    action,
    safety_info,
    allergens,
    environment_impact,
    origin,
  } = data;

  const handleClose = (event: MouseEvent<HTMLDivElement>) => {
    if (elRef.current && elRef.current.contains(event.target as Node)) return;
    setIsOpen(false);
  };

  return (
    <div
      un-flex="~ center"
      className="fixed top-0 left-0 w-full h-full bg-dark/45 z-0"
      onClick={handleClose}
    >
      <div
        ref={elRef}
        className="relative w-3xl p-6 bg-slate-50 rounded-3xl z-10"
      >
        <div className="w-full">
          <div className="w-full font-headline text-2xl tracking-wide">
            {title}
          </div>
        </div>
        <Paragraph headline="Działanie kosmetyczne:" data={action} />
        <div className="flex">
          <List
            inRow="basis-1/2"
            headline="Grupy funkcyjne:"
            data={functional_groups}
          />
          <Paragraph
            inRow="basis-1/2"
            headline="Alergiczność:"
            data={allergens}
          />
        </div>
        <Paragraph headline="Funkcja w produkcie:" data={function_in_product} />
        <List headline="Bezpieczeństwo:" data={safety_info} />
        <div className="flex">
          <Paragraph
            inRow="basis-1/2"
            headline="Wpływ na środowisko:"
            data={environment_impact}
          />
          <Paragraph inRow="basis-1/2" headline="Pochodzenie:" data={origin} />
        </div>
        <div className="w-full flex justify-end"></div>
      </div>
    </div>
  );
}
