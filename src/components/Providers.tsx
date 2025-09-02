import { I18nProvider } from "@lingui/react";

import LanguageProvider from "@/contexts/LanguageContext";
import { ScrollContextProvider } from "@/contexts/ScrollContext";
import { SettingsContextProvider } from "@/contexts/SettingsContext";
import { i18n } from "@/lib/languages";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <I18nProvider i18n={i18n}>
        <SettingsContextProvider>
          <ScrollContextProvider>{children}</ScrollContextProvider>
        </SettingsContextProvider>
      </I18nProvider>
    </LanguageProvider>
  );
}

export default Providers;
