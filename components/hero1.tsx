import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[#458076] text-white py-10 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 xl:px-32 flex flex-col md:flex-row items-center gap-10">
        {/* Left - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#bd3b42] mb-3">
            OUT NOW —
          </h2>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#1a1a1a] mb-4">
            THE ABANDONMENT: <br className="hidden sm:block" />A Hollywood Bombshell
          </h1>

          <p className="text-sm sm:text-base lg:text-lg mb-6 text-[#050505] leading-relaxed max-w-xl mx-auto md:mx-0">
            In this book, James Larry offers a bold, deeply personal, and unapologetically honest reflection on resilience, growth, and self-belief. This isn’t a sugar-coated self-help guide. It’s a journey through the mess, the mistakes, and the miracles of a life still unfolding.
          </p>

          <Link href="https://a.co/d/9tIeO8g" target="_blank">
            <button
              aria-label="Get the book from Amazon"
              className="bg-[#bd3b42] text-white uppercase text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/50 shadow-2xl hover:bg-opacity-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              Get the Book
            </button>
          </Link>
        </div>

        {/* Right - Book Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/images/photo-8.JPG"
            alt="Book Cover"
            width={400}
            height={560}
            className="w-full max-w-[300px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px] object-cover rounded-lg"
            priority
          />
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
//     <section className="bg-[#458076] text-white py-10 md:py-16 lg:py-20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-20 xl:px-32 flex flex-col md:flex-row items-center gap-10">
//         {/* Left - Text Content */}
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-myred mb-3">
//             OUT NOW —
//           </h2>

//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#1a1a1a] mb-4">
//             THE ABONDONMENT: <br className="hidden sm:block" />A Hollywood
//             BombShell
//           </h1>

//           <p className="text-sm sm:text-base lg:text-lg mb-6 text-[#050505] leading-relaxed max-w-xl mx-auto md:mx-0">
//             In this book, James Larry offers a bold, deeply personal, and
//             unapologetically honest reflection on resilience, growth, and
//             self-belief. This isn’t a sugar-coated self-help guide. It’s a
//             journey through the mess, the mistakes, and the miracles of a life
//             still unfolding.
//           </p>

//           <Link href={"https://a.co/d/9tIeO8g"} target="_blank">
//             <button className="bg-myred text-white uppercase text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/50 shadow-2xl hover:bg-opacity-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] hover:scale-105 transition-transform duration-300 ease-in-out">
//               Get the Book
//             </button>
//           </Link>
//         </div>

//         {/* Right - Book Image */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           {/* <Image
//             src="/assets/images/photo-7.png"
//             alt="Book Cover"
//             width={500}
//             height={700}
//             className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-lg"
//             priority
//           /> */}
//           <Image
//             src="/assets/images/photo-8.JPG"
//             alt="Book Cover"
//             width={400}
//             height={560}
//             className="w-full max-w-[300px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px] object-cover rounded-lg"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
