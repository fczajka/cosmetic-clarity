import type { Dispatch, MutableRefObject } from "react";

export interface ResultProps {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  data: {
    title: string;
    functional_groups: string[];
    function_in_product: string | null;
    action: string | null;
    safety_info: string[] | null;
    allergens: string | null;
    environment_impact: string | null;
    origin: string | null;
  };
}

export type MutableRef = MutableRefObject<HTMLDivElement | null>;
