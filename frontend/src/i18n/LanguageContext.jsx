import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { en } from "./en";
import { es } from "./es";

const LangCtx = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => localStorage.getItem("flight-lang") || "en");

  const setLang = (l) => {
    setLangState(l);
    localStorage.setItem("flight-lang", l);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: lang === "en" ? en : es }), [lang]);
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);
