import { useState } from "react";
import type { Result, ResultsArray } from "../../../interfaces";
import Modal from "../Modal";

export default function Results(props: { results: ResultsArray }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Result>();

  const handleClick = (result: Result) => {
    setModalData(result);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ul className="w-full h-screen">
        {props.results.map((ingredient) => (
          <>
            {typeof ingredient === "string" ? (
              <li key={ingredient}>{ingredient}</li>
            ) : (
              <li key={ingredient.title}>
                <button onClick={() => handleClick(ingredient)}>
                  {ingredient.title}
                </button>
              </li>
            )}
          </>
        ))}
      </ul>
      {isOpen && modalData && <Modal setIsOpen={setIsOpen} data={modalData} />}
    </>
  );
}
