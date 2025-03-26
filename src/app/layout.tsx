"use client";

import { useEffect, useState } from "react";
import { defaultLocale, locales } from "@/i18n/config";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<string>(defaultLocale);

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    console.log("Detected language:", browserLang);

    if (locales.includes(browserLang as any)) {
      setLocale(browserLang);
    } else {
      setLocale(defaultLocale);
    }
  }, []);

  console.log("Selected language:", locale);

  let messages;
  try {
    messages = require(`@/i18n/messages/${locale}.json`);
  } catch (error) {
    console.error("Error loading translations:", error);
    messages = require(`@/i18n/messages/${defaultLocale}.json`);
  }

  return (
    <html lang={locale}>
      <body>
        <h2>{messages.greeting}</h2>
        {children}
      </body>
    </html>
  );
}