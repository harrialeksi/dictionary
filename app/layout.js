"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import Header from "./components/Header";
import { Inter, Lora, Inconsolata } from "next/font/google";

// uh. Exporting metadata doesn't work with "use client".
// export const metadata = {
//   title: "Dictionary - FrontEnd Mentor ",
//   description: "Created using React + Tailwind + NextJS 13",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };
// Will keep it here for future reference.

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });

const fonts = [
  { id: 1, type: "Sans-Serif", font: inter.className },
  { id: 2, type: "Serif", font: lora.className },
  { id: 3, type: "Mono", font: inconsolata.className },
];

export default function RootLayout({ children }) {
  const [fontType, setFontType] = useState(fonts[0]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme == "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <html lang="en">
      <body
        className={` mx-auto h-screen bg-white dark:bg-black 
      
        ${fontType.font}
      
      `}
      >
        <Header
          fontType={fontType}
          setFontType={setFontType}
          fonts={fonts}
          handleThemeSwitch={handleThemeSwitch}
          theme={theme}
        />
        {children}
      </body>
    </html>
  );
}
