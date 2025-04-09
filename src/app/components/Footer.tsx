"use client";

import { useEffect, useState } from "react";
import { FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";
import { defaultLocale, locales } from "@/i18n/config";

export default function Footer() {
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
    <footer className="bg-[#fef6ef] py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-800">
        {/* Contact Info */}
        <div className="text-left">
          <p className="font-semibold">{messages?.footer?.contact}</p>
          <p>{messages?.footer?.whatsapp}</p>
          <p>{messages?.footer?.email}</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="#" aria-label="TikTok" className="hover:text-gray-600">
            <FaTiktok />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-gray-600">
            <FaYoutube />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-600">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}