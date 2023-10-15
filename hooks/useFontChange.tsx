"use client";
import { useState } from "react";

export const useFontChange = (replacedFont: string) => {
  const [font, setFont] = useState(replacedFont);

  const handleFontChange = (replacedFont: string) => {
    console.log(document.body.classList);
    document.body.classList.replace(font, replacedFont);
    setFont(replacedFont);
  };

  return {
    font,
    handleFontChange,
  };
};
