import List from "../components/List";
import Paragraph from "../components/Paragraph";
import type { IngredientsDetailsProps } from "./interface";

export default function IngredientDetails({
  functionalGroups,
  allergens,
  environmentImpact,
  origin,
}: IngredientsDetailsProps) {
  return (
    <div un-flex="~ col center" className="fixed w-full h-full bg-dark/45 z-10">
      <div className="p-4 rounded-3xl bg-slate-50">
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
