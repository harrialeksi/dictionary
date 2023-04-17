"use client";
import { Listbox } from "@headlessui/react";
import Image from "next/image";

function FontType({ fontType, setFontType, fonts }) {
  return (
    <div className="z-40 grid h-full w-full grid-flow-col place-items-center dark:bg-black">
      <Listbox value={fontType} onChange={setFontType}>
        <div className="relative mt-1">
          <Listbox.Button className="grid grid-flow-col place-items-center gap-2">
            <span className="text-sm font-semibold dark:text-white">
              {fontType.type}
            </span>
            <Image
              src="/icon-arrow-down.svg"
              alt="arrow-down"
              width={0}
              height={0}
              className="h-[6px] w-3"
            />
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 max-h-40 w-[150px] -translate-x-1/2 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-black dark:shadow-customPink-600 sm:text-sm">
            {fonts.map((item) => (
              <Listbox.Option
                key={item.id}
                value={item}
                className={({ active }) =>
                  `relative select-none py-2 pl-10 pr-4 hover:cursor-pointer ${
                    active
                      ? "bg-customPink-200 text-customPink-600 dark:bg-black"
                      : "text-gray-900 dark:text-white"
                  }`
                }
              >
                {item.type}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}

export default FontType;
