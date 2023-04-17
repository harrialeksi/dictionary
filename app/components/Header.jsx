import Image from "next/image";
import React from "react";
import FontType from "./FontType";
import LightDarkMode from "./LightDarkMode";

function Header({ fontType, setFontType, fonts, handleThemeSwitch, theme }) {
  return (
    <header className="  dark:bg-black">
      <div className="mx-auto grid  h-20 max-w-3xl grid-flow-col grid-cols-[1fr_100px_min-content_80px] p-6">
        <div className="mr-auto w-full">
          <Image
            src="/book-icon.svg"
            height={0}
            width={0}
            alt="book icon"
            className="h-7 w-7"
          />
        </div>
        {/* Font selection */}

        <FontType fontType={fontType} setFontType={setFontType} fonts={fonts} />
        <div className="mx-4 h-full w-[1px] bg-customGray-600"></div>
        <LightDarkMode handleThemeSwitch={handleThemeSwitch} theme={theme} />
      </div>
    </header>
  );
}

export default Header;
