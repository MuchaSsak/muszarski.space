import React, { createContext, useContext, useEffect, useState } from "react";

import { AVAILABLE_LANGUAGES, i18n, type LanguageValue } from "@/lib/languages";

/**
 * Types
 */
type LanguageContext = {
  language: LanguageValue;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageValue>>;
};

// Detect the user's browser language and check if it's supported in the list. If not, pick English
const userBrowserDetectedLanguageValue =
  window.navigator.language.split("-")[0];

const defaultLanguage: LanguageValue =
  AVAILABLE_LANGUAGES.find(
    (availableLanguage) =>
      availableLanguage.value === userBrowserDetectedLanguageValue
  )?.value ?? "en";

const LanguageContext = createContext<LanguageContext>({
  language: defaultLanguage,
  setLanguage: () => {},
});

/**
 * Provider
 */
export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<LanguageValue>(() => {
    // Load from localStorage
    if (!localStorage.getItem("language")) return defaultLanguage;
    else return JSON.parse(localStorage.getItem("language")!);
  });

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem("language", JSON.stringify(language));

    // Update language for i18n client
    i18n.activate(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Hook
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined)
    throw new Error("useLanguage was used outside of LanguageContextProvider!");
  return context;
}
