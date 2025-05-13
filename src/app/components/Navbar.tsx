"use client";

import Link from "next/link";
import { Search, User } from "lucide-react";
import { useState } from "react";
import useLanguage from "@/hooks/useLanguage";

export default function Navbar() {
  const { locale, messages } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  if (!messages) return null;

  return (
    <nav className="w-full bg-[#F8F1E7] py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-1 grid grid-cols-3 items-center">
        {/* Hamburger button on the left (mobile only) */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-600 hover:text-gray-900"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 text-[16px] font-medium text-gray-700">
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

        {/* Centered logo */}
        <div className="flex justify-center">
          <Link href="/">
            <img
              src="/logo-hara.png"
              alt="Hara Logo"
              className="w-20 h-16 object-contain"
            />
          </Link>
        </div>

        {/* Search and User icons on the right */}
        <div className="flex justify-end items-center gap-4 text-gray-600">
          <button className="hover:text-gray-900">
            <Search size={24} />
          </button>
          <button className="hover:text-gray-900">
            <User size={24} />
          </button>
        </div>
      </div>

      {/* Mobile drop-down menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6">
          <div className="flex flex-col items-start gap-4 text-lg font-medium text-gray-700">
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
      )}
    </nav>
  );
}
