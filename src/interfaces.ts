export interface Result {
  title: string;
  functional_groups: string[];
  function_in_product: string | null;
  action: string | null;
  safety_info: string[] | null;
  allergens: string[] | null;
  environment_impact: string | null;
  origin: string | null;
}

export type ResultsArray = (Result | string)[];
