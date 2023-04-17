import React from "react";
import { BiSad } from "react-icons/bi";

function NothingFound({ wordMeaning }) {
  return (
    <section className="mt-32 grid place-items-center">
      <BiSad size={64} />

      <div className="mt-11 max-w-prose text-center">
        <h4 className="text-xl font-bold">{wordMeaning.title}</h4>
        <p className="mt-6 max-w-prose">
          {wordMeaning.message} {wordMeaning.resolution}
        </p>
      </div>
    </section>
  );
}

export default NothingFound;
