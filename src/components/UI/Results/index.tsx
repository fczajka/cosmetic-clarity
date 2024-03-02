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
      <ul className="w-full">
        {props.results.map((ingredient) => (
          <>
            {typeof ingredient === "string" ? (
              <li
                className="text-center my-1 px-4 py-2 rounded-xl bg-slate-200 opacity-50"
                key={ingredient}
              >
                {ingredient}
              </li>
            ) : (
              <li className="my-1" key={ingredient.title}>
                <button
                  className="block w-full h-full px-4 py-2 rounded-xl bg-slate-200"
                  onClick={() => handleClick(ingredient)}
                >
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
