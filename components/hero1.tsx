import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="book-1"
      className="bg-[#458076] text-white py-12 md:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 xl:px-32 flex flex-col md:flex-row items-center gap-12">
        {/* LEFT CONTENT     [#f8f8f8]*/}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-white tracking-wide mb-3">
            OUT NOW —
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1a1a1a] mb-5">
            THE ABANDONMENT:
            <br className="hidden sm:block" />
            <span className="text-white">A Hollywood Bombshell</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg mb-8 text-[#f8f8f8] leading-relaxed max-w-xl mx-auto md:mx-0">
            In this book, James Larry offers a bold, deeply personal, and
            unapologetically honest reflection on resilience, growth, and
            self-belief. This isn’t a sugar-coated self-help guide. It’s a
            journey through the mess, the mistakes, and the miracles of a life
            still unfolding.
          </p>

          <Link href="https://a.co/d/9tIeO8g" target="_blank" rel="noopener noreferrer">
            <button
              aria-label="Get the book from Amazon"
              className="rounded-full bg-[#09332c] border-2 border-white px-8 py-3 text-base sm:text-lg font-semibold uppercase tracking-wide text-white shadow-[0_4px_20px_rgba(255,255,255,0.4)] transition-transform duration-300 hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Get the Book
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <Image
              src="/assets/images/photo-8.JPG"
              alt="Book Cover"
              width={420}
              height={560}
              className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[480px] rounded-lg shadow-2xl ring-2 ring-white/20"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



