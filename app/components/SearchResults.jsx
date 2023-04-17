import React from "react";
import useSound from "use-sound";
import Footer from "./Footer";
import NounOrVerb from "./NounOrVerb";

function SearchResults({ wordMeaning }) {
  const word = wordMeaning[0];

  let audio;

  word.phonetics.map((item) => {
    if (item.audio != "") {
      audio = item.audio;
    }
  });

  const [playActive] = useSound(`${audio}`, { volume: 0.45 });

  return (
    <section className=" dark:bg-black dark:text-white">
      <div className="mx-auto max-w-3xl">
        <article className="mt-7 mb-[34px] grid grid-flow-col place-items-center justify-between">
          <div>
            <h1 className="text-[32px] font-bold dark:text-white">
              {word.word}
            </h1>
            <p className=" text-lg text-customPink-600">{word.phonetic}</p>
          </div>
          <button
            onMouseDown={audio ? playActive : undefined}
            className={`grid h-12 w-12 place-items-center rounded-full  ${
              audio
                ? "bg-customPink-600/25 hover:cursor-pointer"
                : "cursor-default bg-customGray-800/25"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`ml-1 h-6 w-6 ${
                audio ? "stroke-customPink-600" : "stroke-customGray-800"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>
          </button>
        </article>

        <NounOrVerb word={word} />

        <div className="mt-8 mb-[26px] h-[1px] w-full bg-customGray-600"></div>

        <Footer word={word} />
      </div>
    </section>
  );
}

export default SearchResults;
