import { useRef, type MouseEvent, useState } from "react";
import type { MutableRef, ResultProps } from "./interface";
import Paragraph from "./components/Paragraph";
import List from "./components/List";
import IngredientDetails from "./IngredientDetails";

export default function Modal({ data, setIsOpen }: ResultProps) {
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);
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
    if (!elRef.current) return;
    if (elRef.current.contains(event.target as Node)) return;
    if (isDetailOpen) return;
    setIsOpen(false);
  };

  return (
    <div
      un-flex="~ center"
      className="fixed top-0 left-0 w-full h-full bg-dark/45 z-0"
      onClick={handleClose}
    >
      <div
        id="details"
        ref={elRef}
        className="relative w-3xl p-6 bg-slate-50 rounded-3xl z-10"
      >
        <div className="w-full">
          <div className="w-full font-headline text-2xl tracking-wide">
            {title}
          </div>
        </div>
        <Paragraph headline="Działanie kosmetyczne:" data={action} />
        <List headline="Bezpieczeństwo:" data={safety_info} />
        <Paragraph headline="Funkcja w produkcie:" data={function_in_product} />
        <div className="w-full flex justify-end">
          <button
            onClick={() => setIsDetailOpen(!isDetailOpen)}
            className="px-4 py-2 rounded-full bg-slate-200"
          >
            Dodatkowe informacje
          </button>
        </div>
      </div>
      {isDetailOpen && (
        <IngredientDetails
          setIsDetailOpen={setIsDetailOpen}
          functionalGroups={functional_groups}
          allergens={allergens}
          environmentImpact={environment_impact}
          origin={origin}
        />
      )}
    </div>
  );
}
