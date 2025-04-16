import { useEffect, useState } from "react";
import { defaultLocale, locales, Locale } from "@/i18n/config";


import en from "@/i18n/messages/en.json";
import es from "@/i18n/messages/es.json";
import fr from "@/i18n/messages/fr.json";

const messagesMap: Record<Locale, any> = {
  en,
  es,
  fr,
};

const useLanguage = () => {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [messages, setMessages] = useState<any>(messagesMap[defaultLocale]);

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0] as Locale;
    const selectedLang = locales.includes(browserLang) ? browserLang : defaultLocale;

    setLocale(selectedLang);
    setMessages(messagesMap[selectedLang]);
  }, []);

  return { locale, messages };
};

export default useLanguage;