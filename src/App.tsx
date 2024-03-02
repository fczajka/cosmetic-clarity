import { useState, type FormEvent, type ChangeEvent } from "react";
import { Layout, Results } from "./components";
import type { ResultsArray } from "./interfaces";
import { findData } from "./helpers";

export default function App() {
  const [ingridients, setIngridients] = useState<string>("");
  const [results, setResults] = useState<ResultsArray>([]);
  const [height, setHeight] = useState("auto");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = findData(ingridients);
    setResults(result);
  }

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { scrollHeight, clientHeight } = event.target;

    setIngridients(event.target.value);
    setHeight(scrollHeight >= clientHeight ? `${scrollHeight}px` : "auto");
  };
  return (
    <Layout>
      <div className="font-headline text-xl lg:text-2xl">
        Enter the ingredient list here:
      </div>
      <form onSubmit={handleSubmit} un-flex="~ col">
        <textarea
          onChange={handleChange}
          value={ingridients}
          style={{ height }}
          className="resize-none px-4 py-2 my-2 bg-slate-200 rounded-xl"
        />
        <button className="p-2 my-2 bg-slate-200 rounded-xl" type="submit">
          Check
        </button>
      </form>
      {results.length > 0 && <Results results={results} />}
    </Layout>
  );
}
