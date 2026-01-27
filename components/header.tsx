"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#bce1dc] backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/logo/Author-Logo2.png"
              alt="logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-800 hover:text-[#3d756c] hover:underline transition-colors duration-300 font-semibold hover:font-bold text-lg"
            >
              Home
            </Link>
            <Link
              href="/book"
              className="text-gray-800 hover:text-[#3d756c] hover:underline transition-colors duration-300 font-semibold hover:font-bold text-lg"
            >
              Books
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-[#3d756c] hover:underline transition-colors duration-300 font-semibold hover:font-bold text-lg"
            >
              Author
            </Link>
             <Link
              href="/blog"
              className="text-gray-800 hover:text-[#3d756c] hover:underline transition-colors duration-300 font-semibold hover:font-bold text-lg"
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-[#3d756c] hover:underline transition-colors duration-300 font-semibold hover:font-bold text-lg"
            >
              Contact
            </Link>
          </nav>

          {/* Get Book Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.amazon.com/s?k=Alice+tembo&i=digital-text&crid=8VK7O35ETKRC&sprefix=alice+temb%2Cdigital-text%2C372&ref=nb_sb_noss_2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-white font-bold text-xl px-10 py-5 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer
              bg-[#3d756c] hover:brightness-90">
                Get the Book
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center cursor-pointer"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl text-[#3d756c] bg-white" />
            ) : (
              <FaBars className="text-2xl text-[#3d756c] bg-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`bg-[#bce1dc] lg:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <nav className="bg-[#bce1dc] py-4 space-y-4 flex flex-col items-center">
            <Link
              href="/"
              className="block text-gray-800 hover:text-[#3d756c] hover:underline transition-colors duration-300 font-bold text-[18px]"
            >
              Home
            </Link>
            <Link
              href="/book"
              className="block text-gray-800 hover:text-[#3d756c] hover:underline transition-colors duration-300 font-bold text-[18px]"
            >
              Books
            </Link>
            <Link
              href="/about"
              className="block text-gray-800 hover:text-[#3d756c] hover:underline transition-colors duration-300 font-bold text-[18px]"
            >
              Author
            </Link>
            <Link
              href="/blog"
              className="block text-gray-800 hover:text-[#3d756c] hover:underline transition-colors duration-300 font-bold text-[18px]"
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="block text-gray-800 hover:text-[#3d756c] hover:underline transition-colors duration-300 font-bold text-[18px]"
            >
              Contact
            </Link>
            <a
              href="https://www.amazon.com/s?k=Alice+tembo&i=digital-text&crid=8VK7O35ETKRC&sprefix=alice+temb%2Cdigital-text%2C372&ref=nb_sb_noss_2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-white px-8 py-4 font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer
              mt-10 bg-[#3d756c] text-2xl hover:brightness-90">
                Get the Book
              </button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}