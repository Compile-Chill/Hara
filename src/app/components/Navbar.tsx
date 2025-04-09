"use client";

import Link from "next/link";
import { Search, User } from "lucide-react";
import { useEffect, useState } from "react";
import { defaultLocale, locales } from "@/i18n/config";

export default function Navbar() {
  const [messages, setMessages] = useState<any>(null);
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    const lang = locales.includes(browserLang as any) ? browserLang : defaultLocale;
    setLocale(lang);

    import(`@/i18n/messages/${lang}.json`)
      .then((module) => setMessages(module.default))
      .catch(() => import(`@/i18n/messages/${defaultLocale}.json`).then((module) => setMessages(module.default)));
  }, []);

  if (!messages) return null; 

  return (
    <nav className="w-full bg-[#F8F1E7] py-4 px-6 flex justify-between items-center shadow-md">

      {/* Navigation menu */}
      <div className="flex gap-25 text-lg font-medium text-gray-700 ml-14">
        <Link href="/store" className="hover:text-gray-900 text-[16px]">
          {messages.navbar.store}
        </Link>
        <Link href="/about" className="hover:text-gray-900 text-[16px]">
          {messages.navbar.about}
        </Link>
        <Link href="/community" className="hover:text-gray-900 text-[16px]">
          {messages.navbar.community}
        </Link>
      </div>

      {/* Hara logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <img src="/logo-hara.png" alt="Hara Logo" className="w-20 h-16" />
        </Link>
      </div>

      {/* Search and login icons */}
      <div className="flex gap-10 text-gray-600 mr-14">
        <button className="p-2 hover:text-gray-900">
          <Search size={24} className="text-inherit" />
        </button>
        <button className="p-2 hover:text-gray-900">
          <User size={24} className="text-inherit" />
        </button>
      </div>

    </nav>
  );
}