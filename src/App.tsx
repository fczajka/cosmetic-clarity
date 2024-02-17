import { type FormEvent, useState } from "react";
import { Layout } from "./components";
import Data from "./public/data.json";

export default function App() {
  const [ingridients, setIngridients] = useState<string>("");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const ingridientsArr = ingridients.split(",");
    const trimmedIngridients = ingridientsArr.map((ingridient) =>
      ingridient.trim().toLowerCase(),
    );

    const result = Data.filter((item) => {
      return trimmedIngridients.includes(item.title.toLowerCase());
    });

    // CODE FOR NOT USING EXACT MATCH
    // const result = trimmedIngridients.map((ingridient) => {
    //   const matchingIngridients = Data.filter((item) => {
    //     return item.title.toLowerCase().includes(ingridient);
    //   });
    //   return matchingIngridients;
    // });
  }
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={(e) => setIngridients(e.target.value)}
          value={ingridients}
        />
        <button type="submit">Check</button>
      </form>
    </Layout>
  );
}
