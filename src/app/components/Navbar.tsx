"use client";

import Link from "next/link";
import { Search, User } from "lucide-react";
import useLanguage from "@/hooks/useLanguage"; 
import { useState } from "react";

export default function Navbar() {
  const { locale, messages } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  if (!messages) return null;

  return (
    <nav className="w-full bg-[#F8F1E7] py-4 px-6 flex justify-between items-center shadow-md relative">
      {/* Hamburger Menu (visible only on small screens) */}
      <div className="flex items-center gap-6 md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600">
          {/* Menu icon */}
          {menuOpen ? (
            <span className="text-2xl">✖</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Navigation menu (visible on large screens) */}
      <div className="hidden md:flex gap-6 text-lg font-medium text-gray-700 ml-14">
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

      {/* Centered logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <img src="/logo-hara.png" alt="Hara Logo" className="w-20 h-16" />
        </Link>
      </div>

      {/* Search and login icons (visible on all screen sizes) */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex gap-4 md:gap-6 text-gray-600">
        <button className="p-2 hover:text-gray-900">
          <Search size={24} className="text-inherit" />
        </button>
        <button className="p-2 hover:text-gray-900">
          <User size={24} className="text-inherit" />
        </button>
      </div>

      {/* Drop-down menu on small screens */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-16 left-0 bg-[#F8F1E7] py-4 px-6 rounded-lg w-full md:hidden z-50`}
      >
        <div className="flex flex-col gap-4 text-lg font-medium text-gray-700">
          <Link href="/store" className="hover:text-gray-900">
            {messages.navbar.store}
          </Link>
          <Link href="/about" className="hover:text-gray-900">
            {messages.navbar.about}
          </Link>
          <Link href="/community" className="hover:text-gray-900">
            {messages.navbar.community}
          </Link>
        </div>
      </div>
    </nav>
  );
}