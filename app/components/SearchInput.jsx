"use client";
import React, { useState } from "react";
import Search from "./Search";

function SearchInput({ handleWordDefinition }) {
  const [keyword, setKeyword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const res = await Search({ keyword });

    handleWordDefinition(res);
    setKeyword("");
  }

  return (
    <div className="mx-auto max-w-3xl">
      <form onSubmit={handleSubmit} className="relative">
        <input
          className="h-12 w-full appearance-none rounded-xl border py-2 px-3 font-bold leading-tight text-gray-700  shadow focus:outline-customPink-600 dark:bg-customBlack-600 dark:text-white sm:h-16"
          id="word"
          type="text"
          placeholder="Search for any word"
          required={true}
          value={keyword}
          onChange={(event) => {
            setKeyword(event.target.value);
          }}
        />

        <button className="absolute top-1/2 right-4 h-4 w-4 -translate-x-1/2 -translate-y-1/2">
          <svg width="18" height="18" className="hover:cursor-pointer ">
            <path
              fill="none"
              stroke="#A445ED"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
