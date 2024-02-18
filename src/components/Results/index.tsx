import type { ResultArray } from "../../interfaces";

export default function Results(props: { result: ResultArray }) {
  return (
    <ul className="w-full h-screen">
      {props.result.map((ingredient) => (
        <>
          {typeof ingredient === "string" ? (
            <li>{ingredient}</li>
          ) : (
            <li>{ingredient.title}</li>
          )}
        </>
      ))}
    </ul>
  );
}
