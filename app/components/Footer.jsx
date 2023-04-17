import React from "react";

function Footer({ word }) {
  return (
    <footer className="mb-6 w-full">
      <a
        href={word.sourceUrls[0]}
        target="_blank"
        className="text-customGray-800 underline"
      >
        Source
      </a>
      <div className="grid grid-flow-col grid-cols-[min-content_1fr] place-items-center">
        <p className="text-customBlack-400 dark:text-white">
          {word.sourceUrls[0]}
        </p>
        <a
          href={word.sourceUrls[0]}
          target="_blank"
          className="ml-1 h-4 w-4 justify-self-start  stroke-customGray-800 "
        >
          <svg width="14" height="14" className="">
            <path
              fill="none"
              d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
