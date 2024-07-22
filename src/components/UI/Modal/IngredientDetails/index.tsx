import { useRef, type MouseEvent } from "react";
import List from "../components/List";
import Paragraph from "../components/Paragraph";
import type { IngredientsDetailsProps } from "./interface";
import type { MutableRef } from "../interface";

export default function IngredientDetails({
  setIsDetailOpen,
  functionalGroups,
  allergens,
  environmentImpact,
  origin,
}: IngredientsDetailsProps) {
  const elRef: MutableRef = useRef<HTMLDivElement>(null);

  const handleClose = (event: MouseEvent<HTMLDivElement>) => {
    if (!elRef.current) return;
    if (elRef.current.contains(event.target as Node)) return;
    setIsDetailOpen(false);
  };

  return (
    <div
      un-flex="~ col center"
      className="fixed w-full h-full bg-dark/45 z-10"
      onClick={handleClose}
    >
      <div
        id="deep-details"
        className="p-4 rounded-3xl bg-slate-50"
        ref={elRef}
      >
        <List
          inRow="basis-1/2"
          headline="Grupy funkcyjne:"
          data={functionalGroups}
        />
        <Paragraph
          inRow="basis-1/2"
          headline="Alergiczność:"
          data={allergens}
        />
        <Paragraph
          inRow="basis-1/2"
          headline="Wpływ na środowisko:"
          data={environmentImpact}
        />
        <Paragraph inRow="basis-1/2" headline="Pochodzenie:" data={origin} />
      </div>
    </div>
  );
}
