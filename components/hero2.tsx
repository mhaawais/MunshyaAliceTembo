import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero2 = () => {
  return (
    <section
      id="book-2"
      aria-labelledby="hero2-heading"
      className="relative w-full overflow-hidden bg-[#0f2f2b]"
    >
      {/* subtle gradient accents */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(50%_50%_at_20%_0%,#1e5a50_0%,transparent_60%),radial-gradient(40%_40%_at_100%_60%,#0b4640_0%,transparent_55%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* IMAGE CARD */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="bg-[#bce1dc] p-6 rounded-md w-full max-w-[350px] shadow-2xl">
            <Image
              src="/assets/images/m4.JPG"
              alt="Book Image"
              width={300}
              height={400}
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm ring-1 ring-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Just Released —
          </span>

          <h1
            id="hero2-heading"
            className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl font-serif"
          >
            La Lucha Por Mi Almas
            <span className="block text-lg font-semibold text-emerald-300/90 sm:text-xl md:text-2xl">
              (Spanish Edition)
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            La Lucha Por Mi Alma, is about a true Testimony about the authors
            Life. His spiritual bond that he shared with his mother and his
            rough upbringing in the streets of New York..
          </p>

          <p className="mt-4 text-sm font-medium text-white/80 sm:text-base">
            By:
            <br />
            <span className="text-white">James Larry Holmes&nbsp;JR.</span>
          </p>

          <div className="mt-7">
            <Link href={"https://a.co/d/0Kge1Ax"} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-7 py-3.5 text-sm font-semibold tracking-wide text-[#06221d] shadow-[0_10px_30px_rgba(16,185,129,0.25)] transition-all duration-300 hover:translate-y-[-1px] hover:bg-emerald-300 active:translate-y-0">
                Get The BooK!
              </button>
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/70">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
              True Testimony
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
              Spanish Edition
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
              New Release
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
