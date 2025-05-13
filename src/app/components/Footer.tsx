"use client";

import { FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";
import useLanguage from "@/hooks/useLanguage";

export default function Footer() {
  const { locale, messages } = useLanguage();

  return (
    <footer className="bg-[#F8F1E7] py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-800">
        {/* Contact Info */}
        <div className="self-start md:self-center text-left">
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


