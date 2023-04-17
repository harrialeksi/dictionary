"use client";

import { useState } from "react";
import NothingFound from "./components/NothingFound";
import SearchInput from "./components/SearchInput";
import SearchResults from "./components/SearchResults";

export default function Home() {
  const [wordMeaning, setwordMeaning] = useState("");
  function handleWordDefinition(result) {
    setwordMeaning(result);
  }

  return (
    <main
      className="   min-h-[calc(100vh-80px)] bg-white p-6 dark:bg-black
   "
    >
      <SearchInput handleWordDefinition={handleWordDefinition} />

      {/* if there's a title, it means our query could not find anything  */}
      {wordMeaning.title && wordMeaning != "" ? (
        <NothingFound wordMeaning={wordMeaning} />
      ) : (
        ""
      )}

      {wordMeaning.title == undefined && wordMeaning != "" ? (
        <SearchResults wordMeaning={wordMeaning} />
      ) : (
        ""
      )}
    </main>
  );
}
