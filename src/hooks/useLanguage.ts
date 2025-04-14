import { useEffect, useState } from "react";
import { defaultLocale, locales } from "@/i18n/config";

const useLanguage = () => {
  const [locale, setLocale] = useState<string>(defaultLocale);
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    const selectedLang = locales.includes(browserLang) ? browserLang : defaultLocale;
    setLocale(selectedLang);

    // Cargar las traducciones
    try {
      import(`@/i18n/messages/${selectedLang}.json`)
        .then((module) => setMessages(module.default))
        .catch(() => {
          console.error("Error loading translations for", selectedLang);
          import(`@/i18n/messages/${defaultLocale}.json`).then((module) => setMessages(module.default));
        });
    } catch (error) {
      console.error("Error loading translations:", error);
      import(`@/i18n/messages/${defaultLocale}.json`).then((module) => setMessages(module.default));
    }
  }, []);

  return { locale, messages };
};

export default useLanguage;