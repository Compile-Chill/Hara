"use client";

import useLanguage from "@/hooks/useLanguage"; 
import Link from "next/link";

export default function HeroSection() {
  const { locale, messages } = useLanguage();

  return (
    <section className="relative bg-blue-200 px-6 md:px-12 lg:pl-12 lg:pr-0 lg:flex lg:items-stretch lg:justify-between min-h-[400px]">
      <div className="max-w-2xl text-center lg:text-center lg:flex lg:flex-col lg:items-center lg:justify-center lg:ml-40 flex flex-col justify-center min-h-[400px]">
        <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
          {messages?.hero?.title || "Default title"}
        </h1>
        <p className="mt-4 text-base text-gray-700">
          {messages?.hero?.description || "Default description"}
        </p>
        <Link href="/signup">
          <button className="mt-6 rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-md hover:bg-gray-100 w-[auto] max-w-[300px] mx-auto">
            {messages?.hero?.cta || "Default CTA"}
          </button>
        </Link>
      </div>

      {/* Image only visible on large screens */}
      <div className="absolute right-0 top-0 h-full hidden lg:block">
        <img
          src="/hero-image.png"
          alt="Happy woman skincare"
          className="h-full object-cover"
        />
      </div>
    </section>
  );
}
