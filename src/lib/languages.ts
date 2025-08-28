import { i18n } from "@lingui/core";

import { messages as enMessages } from "@/locales/en/messages";
import { messages as plMessages } from "@/locales/pl/messages";

/**
 * Types
 */
export type LanguageValue = "en" | "pl";
type AvailableLanguage = {
  value: LanguageValue;
  label: string;
  Icon?: React.ReactNode;
};

// Available languages list
export const AVAILABLE_LANGUAGES: AvailableLanguage[] = [
  {
    value: "en",
    label: "English",
    Icon: "🇬🇧",
  },
  {
    value: "pl",
    label: "Polish (Polski)",
    Icon: "🇵🇱",
  },
];

// i18n lingui initialization
i18n.load({
  en: enMessages,
  pl: plMessages,
});

export { i18n };
