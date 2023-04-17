import Image from "next/image";
import React, { useState } from "react";

function LightDarkMode({ handleThemeSwitch, theme }) {
  return (
    <div className="grid grid-flow-col items-center gap-2">
      <div
        onClick={() => handleThemeSwitch()}
        className={`flex h-5 w-10 cursor-pointer items-center rounded-full bg-customGray-800 dark:bg-customPink-600 `}
      >
        <span
          className={`mx-1 h-[14px] w-[14px] rounded-full bg-white transition-all duration-500 ${
            theme === "dark" && "ml-[22px]"
          } `}
        ></span>
      </div>
      <svg className="h-6 w-6 fill-transparent stroke-customGray-800 stroke-1 dark:stroke-customPink-600">
        <path d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z" />
      </svg>
    </div>
  );
}

export default LightDarkMode;
