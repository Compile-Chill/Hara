"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { defaultLocale, locales } from "@/i18n/config";

const products = [
  { id: 1, image: "/products/product1.jpg", alt: "Product 1" },
  { id: 2, image: "/products/product2.jpg", alt: "Product 2" },
  { id: 3, image: "/products/product3.jpg", alt: "Product 3" },
  { id: 4, image: "/products/product4.jpg", alt: "Product 4" },
  { id: 5, image: "/products/product5.jpg", alt: "Product 5" },
  { id: 6, image: "/products/product6.jpg", alt: "Product 6" },
  { id: 7, image: "/products/product7.jpg", alt: "Product 7" },
];

export default function BestsellersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardWidth = 240;

  const [locale, setLocale] = useState(defaultLocale);
  const [messages, setMessages] = useState<any>({});

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    const selectedLang = locales.includes(browserLang) ? browserLang : defaultLocale;
    setLocale(selectedLang);

    import(`@/i18n/messages/${selectedLang}.json`)
      .then((mod) => setMessages(mod.default))
      .catch(() =>
        import(`@/i18n/messages/${defaultLocale}.json`).then((mod) => setMessages(mod.default))
      );
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount =
        direction === "left"
          ? scrollRef.current.scrollLeft - cardWidth
          : scrollRef.current.scrollLeft + cardWidth;

      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">
          {messages?.bestsellers?.title || "Our Bestsellers"}
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          {messages?.bestsellers?.description ||
            "Discover each product with key ingredients, benefits, skin compatibility and user reviews"}
        </p>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
            aria-label="Scroll left"
          >
            &#8249;
          </button>

          {/* Carousel */}
          <div ref={scrollRef} className="mx-10 overflow-x-auto scroll-smooth scrollbar-hide">
            <div className="flex gap-4 w-max">
              {products.map((product) => (
                <div key={product.id} className="w-[220px] flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width={220}
                    height={220}
                    className="rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
            aria-label="Scroll right"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}