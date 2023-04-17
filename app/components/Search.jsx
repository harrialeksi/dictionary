async function getWord({ keyword }) {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
  );

  return res.json();
}

async function Search({ keyword }) {
  let wordDefinition = await getWord({ keyword });

  return wordDefinition;
}

export default Search;
