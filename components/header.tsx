"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-[#bce1dc] w-full border-b sticky top-0 z-50 transition-shadow duration-300 md:static ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {/* Desktop Header */}
      <div className="hidden lg:flex items-center justify-between px-10 py-6 h-[250px]">
        <div>
          {/* Left - Navigation */}
          <nav className="flex gap-10 text-xl font-semibold tracking-wide">
            <a
              href="/"
              className="relative group text-[#154941] hover:text-myblack transition-colors"
            >
              HOME
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#154941] transition-all duration-500 group-hover:w-full"></span>
            </a>

            <a
              href="/about"
              className="relative group text-[#154941] hover:text-myblack transition-colors"
            >
              ABOUT
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#154941] transition-all duration-500 group-hover:w-full"></span>
            </a>

            <a
              href="/blog"
              className="relative group text-[#154941] hover:text-myblack transition-colors"
            >
              BLOG
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#154941] transition-all duration-500 group-hover:w-full"></span>
            </a>
          </nav>
        </div>

        <div className="h-[200px]">
          {/* Center - Logo */}
          <a href="/" className="relative w-[180px] h-[70px]">
            <Image
              src="/assets/logo/Author-Logo1.png"
              alt="Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </a>
        </div>

        <div>
          {/* Right - Large Styled Button */}
          <Link href={"https://a.co/d/9tIeO8g"} target="_blank">
            <button className="bg-[#3d756c] text-white px-16 py-6 rounded-full text-xl font-bold hover:brightness-90 transition-all">
              GET THE BOOK
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex lg:hidden items-center justify-between px-4 py-2 h-[200px]">
        {/* Left Logo */}
        <a href="/" className="relative w-[120px] h-[100px]">
          <Image
            src="/assets/logo/Author-Logo1.png"
            alt="Logo"
            width={220}
            height={220}
            className="object-contain"
          />
        </a>

        {/* Hamburger / Cross */}
        <button onClick={toggleMenu} className="text-4xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-[#bce1dc] z-50 flex flex-col">
          {/* Top - Logo and Cross */}
          <div className="flex items-center justify-between px-4 py-2 h-[200px]">
            <a href="/" className="relative w-[120px] h-[100px]">
              <Image
                src="/assets/logo/Author-Logo1.png"
                alt="Logo"
                width={220}
                height={220}
                className="object-contain"
              />
            </a>

            <button onClick={toggleMenu} className="text-4xl">
              <FiX />
            </button>
          </div>

          {/* Center - Navigation Links */}
          <div className="flex flex-col items-center justify-center flex-grow space-y-10 text-3xl font-semibold tracking-wide">
            <a
              href="/"
              onClick={toggleMenu}
              className="relative group text-[#154941] hover:text-myblack transition-colors"
            >
              HOME
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#154941] transition-all duration-500 group-hover:w-full"></span>
            </a>

            <a
              href="/about"
              onClick={toggleMenu}
              className="relative group text-[#154941] hover:text-myblack transition-colors"
            >
              ABOUT
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#154941] transition-all duration-500 group-hover:w-full"></span>
            </a>

            <a
              href="/blog"
              onClick={toggleMenu}
              className="relative group text-[#154941] hover:text-myblack transition-colors"
            >
              BLOG
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#154941] transition-all duration-500 group-hover:w-full"></span>
            </a>

            <Link href={"https://a.co/d/9tIeO8g"} target="_blank">
              <button
                onClick={toggleMenu}
                className="mt-10 bg-[#3d756c] text-white px-12 py-7 rounded-full text-2xl font-bold hover:brightness-90 transition-all"
              >
                GET THE BOOK
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;






// "use client";

// import React, { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import Image from "next/image";
// import Link from "next/link";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     // <header className={`bg-white w-full border-b md:sticky md:top-0 md:z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>

//     <header
//       className={`bg-[#bce1dc] w-full border-b sticky top-0 z-50 transition-shadow duration-300 md:static ${
//         scrolled ? "shadow-md" : ""
//       }`}
//     >
//       {/* Desktop Header */}
//       <div className="hidden lg:flex items-center justify-between px-10 py-6 h-[250px]">
//         <div>
//           {/* Left - Navigation */}
//           <nav className="flex gap-10 text-xl font-semibold tracking-wide">
//             <a
//               href="/"
//               className="text-[#154941] hover:text-myblack transition-colors"
//             >
//               HOME
//             </a>
//             {/* <a href="/blog" className="text-gray-700  hover:text-myblack transition-colors">
//               BLOG
//             </a> */}
//             <a
//               href="/about"
//               className="text-[#154941] hover:text-myblack transition-colors"
//             >
//               ABOUT
//             </a>
//             <a
//               href="/blog"
//               className="text-[#154941]  hover:text-myblack transition-colors"
//             >
//               BLOG
//             </a>
//           </nav>
//         </div>

//         <div className="h-[200px]">
//           {/* Center - Logo */}
//           <a href="/" className="relative w-[180px] h-[70px]">
//             <Image
//               src="/assets/logo/Author-Logo1.png"
//               alt="Logo"
//               width={200}
//               height={200}
//               className="object-contain"
//             />
//           </a>
//         </div>

//         <div>
//           {/* Right - Large Styled Button */}
//           <Link href={"https://a.co/d/9tIeO8g"} target="_blank">
//             <button className="bg-[#3d756c] text-white px-16 py-6 rounded-full text-xl font-bold hover:brightness-90 transition-all">
//               GET THE BOOK
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Header */}
//       <div className="flex lg:hidden items-center justify-between px-4 py-2 h-[200px] ">
//         {/* Left Logo */}
//         <a href="/" className="relative w-[120px] h-[100px]">
//           <Image
//             src="/assets/logo/Author-Logo1.png"
//             alt="Logo"
//             width={220}
//             height={220}
//             className="object-contain"
//           />
//         </a>

//         {/* Hamburger / Cross */}
//         <button onClick={toggleMenu} className="text-4xl">
//           {isOpen ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {isOpen && (
//         <div className="fixed inset-0 bg-[#bce1dc] z-50 flex flex-col">
//           {/* Top - Logo and Cross */}
//           <div className="flex items-center justify-between px-4 py-2 h-[200px]">
//             {/* Left Logo */}
//             <a href="/" className="relative w-[120px] h-[100px]">
//               <Image
//                 src="/assets/logo/Author-Logo1.png"
//                 alt="Logo"
//                 width={220}
//                 height={220}
//                 className="object-contain"
//               />
//             </a>

//             {/* Hamburger / Cross */}
//             <button onClick={toggleMenu} className="text-4xl">
//               <FiX />
//             </button>
//           </div>

//           {/* Center - Navigation Links */}
//           <div className="flex flex-col items-center justify-center flex-grow space-y-10 text-3xl font-semibold tracking-wide">
//             <a
//               href="/"
//               onClick={toggleMenu}
//               className="text-[#154941] hover:text-myblack border-b-2 border-myblack"
//             >
//               HOME
//             </a>
//             {/* <a
//               href="/blog"
//               onClick={toggleMenu}
//               className="text-gray-700  hover:text-myblack"
//             >
//               BLOG
//             </a> */}
//             <a
//               href="/about"
//               onClick={toggleMenu}
//               className="text-[#154941]  hover:text-myblack"
//             >
//               ABOUT
//             </a>
//             <a
//               href="/blog"
//               onClick={toggleMenu}
//               className="text-[#154941]  hover:text-myblack"
//             >
//               BLOG
//             </a>
//             <Link href={"https://a.co/d/9tIeO8g"} target="_blank">
//               <button
//                 onClick={toggleMenu}
//                 className="mt-10 bg-[#3d756c] text-white px-12 py-7 rounded-full text-2xl font-bold hover:brightness-90 transition-all"
//               >
//                 GET THE BOOK
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;