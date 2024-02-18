import { useState, type FormEvent, type ChangeEvent } from "react";
import { Layout, Results } from "./components";
import type { ResultArray } from "./interfaces";
import { findData } from "./helpers";

export default function App() {
  const [ingridients, setIngridients] = useState<string>("");
  const [result, setResult] = useState<ResultArray>([]);
  const [height, setHeight] = useState("auto");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = findData(ingridients);
    setResult(result);
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
        />
        <button type="submit">Check</button>
      </form>
      {result.length > 0 && <Results result={result} />}
    </Layout>
  );
}
