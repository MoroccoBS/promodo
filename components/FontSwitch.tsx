"use client";
import { Abel, Inter, Gabriela } from "next/font/google";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });
const gabriela = Gabriela({ subsets: ["latin"], weight: "400" });
const abel = Abel({ subsets: ["latin"], weight: "400" });

export default function FontSwitch() {
  const [font, setFont] = useState(inter.className);
  const handleFontChange = (replacedFont: string) => {
    console.log(document.body.classList);
    document.body.classList.replace(font, replacedFont);
    setFont(replacedFont);
  };
  return (
    <div className="flex gap-3">
      <button
        onClick={() => handleFontChange(abel.className)}
        className="font-bold text-5xl"
      >
        abel
      </button>
      <button
        onClick={() => handleFontChange(inter.className)}
        className="font-bold text-5xl"
      >
        inter
      </button>
      <button
        onClick={() => handleFontChange(gabriela.className)}
        className="font-bold text-5xl"
      >
        gabriela
      </button>
    </div>
  );
}
