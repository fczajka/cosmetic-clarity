import type { ResultsArray } from "./interfaces";
import Data from "./public/data.json";

export function findData(ingridients: string): ResultsArray | [] {
  const ingridientsArr = ingridients.split(",");
  const trimmedIngridients = ingridientsArr.map((ingridient) =>
    ingridient.trim().replace(".", ""),
  );

  const matchingIngridients = Data.filter((item) => {
    return trimmedIngridients.includes(item.title);
  });

  const result = trimmedIngridients.map((ingridient) => {
    const foundItem = matchingIngridients.find(
      (item) => item.title.toLowerCase() === ingridient.toLowerCase(),
    );

    if (!foundItem) return ingridient;

    return foundItem;
  });

  // CODE FOR NOT USING EXACT MATCH
  // const result = trimmedIngridients.map((ingridient) => {
  //   const matchingIngridients = Data.filter((item) => {
  //     return item.title.toLowerCase().includes(ingridient);
  //   });
  //   return matchingIngridients;
  // });

  if (!result.length || result[0] == "") return [];

  return result;
}
