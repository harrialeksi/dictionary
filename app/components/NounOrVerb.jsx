import React from "react";

function NounOrVerb({ word }) {
  const id = React.useId();
  return (
    <article className="dark:text-white">
      {word.meanings.map((item, index) => (
        <div key={item.partOfSpeech + id + index}>
          <div className="grid grid-flow-col grid-cols-[min-content_1fr] items-center gap-2">
            <h4 className="mr-6 text-lg font-bold lowercase leading-[19px]">
              {item.partOfSpeech}
            </h4>
            <div className="h-[1px] w-full bg-customGray-600"></div>
          </div>

          <div className="mt-[35px] mb-4 leading-4 text-customGray-800">
            Meaning
          </div>

          <ul className="list-inside list-disc marker:text-customPink-600 ">
            {item.definitions.map((item, index) => (
              <li
                key={item.definition + id + index}
                className="mb-4 text-[15px] leading-6 text-customBlack-400 dark:text-white"
              >
                {item.definition}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </article>
  );
}

export default NounOrVerb;
