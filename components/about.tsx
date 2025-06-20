'use client';

import Image from 'next/image';
import Link from 'next/link';

const AuthorIntro = () => {
  return (
    <section className="flex flex-col lg:flex-row overflow-hidden bg-[#f0f3e7]">
      {/* Left Side - Image with Animation */}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center h-[50vh] lg:h-screen">
        <div
          className="relative w-56 h-72 sm:w-72 sm:h-88 lg:w-[22rem] lg:h-[30rem] transition-all duration-700"
        >
          <Image 
            src="/assets/images/photo-6.png" 
            alt="Author portrait" 
            width={448}
            height={576}
            className="w-full h-full object-cover rounded-xl shadow-2xl"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
        </div>
      </div>

      {/* Right Side - Content with Animation */}
      <div className="w-full lg:w-1/2 bg-[#f0f3e7] flex flex-col justify-center p-6 sm:p-10 lg:p-14">
        <h3 className="bg-[#09332c] text-white text-lg sm:text-xl font-semibold uppercase tracking-wider transition-all duration-700">
          MEET JAMES LARRY —— 
        </h3>

        <h2 className="text-review text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mt-2 transition-all duration-700">
          JAMES LARRY HOLMES JR. <br />
          <span className="text-xl sm:text-2xl lg:text-3xl">Author, Writer, Innovater, Thinker</span>
        </h2>

        <p className="text-black text-base sm:text-lg mt-6 leading-relaxed max-w-prose transition-all duration-700">
          <b>James Larry</b> is a rising voice in the world of mystery and thriller fiction. Born in Somalia and raised in the quiet village of Qoryooley, Sameer now lives in Seattle, Washington, where he continues to write stories that explore the hidden depths of human nature and the unexpected turns life can take. At just 20 years old, and entering his senior year of high school this fall, James is already carving a place for himself in the literary world with his debut novel, <strong>THE ABANDONMENT</strong> and <strong>La Lucha Por Mi Almas</strong>.
        </p>

        <Link
          href="/about"
          className="mt-8 px-6 py-3 bg-[#09332c] hover:brightness-90 text-white font-semibold rounded-full border-2 border-green-950 shadow-lg transition-all duration-300 w-fit"
        >
          Explore More
        </Link>
      </div>
    </section>
  );
};

export default AuthorIntro;

