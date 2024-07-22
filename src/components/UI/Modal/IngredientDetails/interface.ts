import type { Dispatch } from "react";

export interface IngredientsDetailsProps {
  setIsDetailOpen: Dispatch<React.SetStateAction<boolean>>;
  functionalGroups: string[];
  allergens: string | null;
  environmentImpact: string | null;
  origin: string | null;
}
