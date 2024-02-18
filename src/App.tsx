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
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={handleChange}
          value={ingridients}
          style={{ height }}
          className="resize-none"
        />
        <button type="submit">Check</button>
      </form>
      {results.length > 0 && <Results results={results} />}
    </Layout>
  );
}
