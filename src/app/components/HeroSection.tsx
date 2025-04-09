"use client";

import { useEffect, useState } from "react";
import { defaultLocale, locales } from "@/i18n/config";

export default function HeroSection() {
  const [locale, setLocale] = useState(defaultLocale);
  const [messages, setMessages] = useState<any>({});

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    const selectedLocale = locales.includes(browserLang as any)
      ? browserLang
      : defaultLocale;

    setLocale(selectedLocale);

    import(`@/i18n/messages/${selectedLocale}.json`)
      .then((mod) => setMessages(mod))
      .catch(() => {
        import(`@/i18n/messages/${defaultLocale}.json`).then((mod) =>
          setMessages(mod)
        );
      });
  }, []);

  return (
    <section className="relative bg-blue-200 px-6 md:px-12 lg:pl-12 lg:pr-0 lg:flex lg:items-stretch lg:justify-between min-h-[400px]">
      <div className="max-w-2xl text-center lg:text-center lg:flex lg:flex-col lg:items-center lg:justify-center lg:ml-40">
        <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
          {messages?.hero?.title}
        </h1>
        <p className="mt-4 text-base text-gray-700">
          {messages?.hero?.description}
        </p>
        <button className="mt-6 rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-md hover:bg-gray-100">
          {messages?.hero?.cta}
        </button>
      </div>

      <div className="absolute right-0 top-0 h-full">
        <img
          src="/hero-image.png"
          alt="Happy woman skincare"
          className="h-full object-cover"
        />
      </div>
    </section>
  );
}