"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="book-1"
      className="relative overflow-hidden bg-[#458076] text-white"
    >
      {/* decorative softly blurred blobs */}
      <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

      {/* NOTE: vertical padding shrinks as screen gets larger */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-16 py-16 sm:py-14 md:py-12 lg:py-10 xl:py-8 2xl:py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {/* LEFT: text */}
          <div className="order-2 md:order-1 w-full text-center md:text-left animate-slideIn">
            <span className="inline-block rounded-full border border-white/30 bg-red-800 px-3 py-1 text-xs sm:text-sm font-semibold tracking-wide text-white/90">
              OUT NOW —
            </span>

            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.12]">
              <span className="bg-gradient-to-r from-white via-emerald-50 to-white bg-clip-text text-transparent">
                Healing Begins
              </span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-amber-200 via-white to-emerald-100 bg-clip-text text-transparent font-serif">
                with YOU
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-xl mx-auto md:mx-0">
              In What If Your Child's Healing Begins with Yours?, Munshya Alice Tembo shares a powerful, 
              personal journey of healing. This heartfelt book reveals how God can heal a mother’s heart first, 
              paving the way for her child's restoration. Through biblical truths and real-life stories, 
              it offers hope, peace, and the strength to rebuild connections with your child. When God heals 
              a mother, entire generations are restored.
            </p>

            <div className="mt-7">
              <Link
                href="https://www.amazon.com/s?k=Alice+tembo&i=digital-text&crid=8VK7O35ETKRC&sprefix=alice+temb%2Cdigital-text%2C372&ref=nb_sb_noss_2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get the book from Amazon"
                className="group inline-flex items-center gap-2 rounded-full bg-[#09332c] px-7 sm:px-8 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-wide text-white
                           ring-1 ring-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.2)]
                           transition will-change-transform hover:-translate-y-0.5 hover:brightness-150 hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:translate-y-0"
              >
                Get the Book
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT: image */}
          <div className="order-1 md:order-2 w-full flex justify-center animate-slideInRight">
            <div className="relative w-full max-w-[300px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[460px] xl:max-w-[500px]">
              {/* Aspect wrapper prevents shift and overlap; padding & bg keep it premium even with object-contain */}
              <div className="relative aspect-[3/4] rounded-2xl bg-white/10 ring-1 ring-white/20 shadow-2xl p-2">
                <Image
                  src="/assets/images/book-cover.png"
                  alt="Book cover"
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 36vw"
                  className="rounded-xl object-contain"
                  priority
                />
              </div>

              {/* subtle glow behind the card */}
              <div aria-hidden className="absolute -inset-2 -z-10 rounded-3xl bg-white/10 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;











// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Hero = () => {
//   return (
//     <section
//       id="book-1"
//       className="bg-[#458076] text-white py-12 md:py-16 lg:py-20"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-20 xl:px-32 flex flex-col md:flex-row items-center gap-12">
//         {/* LEFT CONTENT     [#f8f8f8]*/}
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-white tracking-wide mb-3">
//             OUT NOW —
//           </h2>

//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1a1a1a] mb-5">
//             THE ABANDONMENT:
//             <br className="hidden sm:block" />
//             <span className="text-white">A Hollywood Bombshell</span>
//           </h1>

//           <p className="text-sm sm:text-base lg:text-lg mb-8 text-[#f8f8f8] leading-relaxed max-w-xl mx-auto md:mx-0">
//             In this book, James Larry offers a bold, deeply personal, and
//             unapologetically honest reflection on resilience, growth, and
//             self-belief. This isn’t a sugar-coated self-help guide. It’s a
//             journey through the mess, the mistakes, and the miracles of a life
//             still unfolding.
//           </p>

//           <Link href="https://a.co/d/9tIeO8g" target="_blank" rel="noopener noreferrer">
//             <button
//               aria-label="Get the book from Amazon"
//               className="rounded-full bg-[#09332c] border-2 border-white px-8 py-3 text-base sm:text-lg font-semibold uppercase tracking-wide text-white shadow-[0_4px_20px_rgba(255,255,255,0.4)] transition-transform duration-300 hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white"
//             >
//               Get the Book
//             </button>
//           </Link>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <div className="relative">
//             <Image
//               src="/assets/images/photo-8.JPG"
//               alt="Book Cover"
//               width={420}
//               height={560}
//               className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[480px] rounded-lg shadow-2xl ring-2 ring-white/20"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;