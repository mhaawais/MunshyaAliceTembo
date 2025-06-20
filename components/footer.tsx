import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#bce1dc] text-mycolor w-full px-6 py-10">
      <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center gap-10">

        {/* Section 1 - Book Image */}
        <div className="flex w-full lg:w-1/3 justify-center lg:justify-end">
          <div className="p-2 rounded-md">
            <Image
              src="/assets/images/footer.png"
              alt="Footer Book Image"
              width={300}
              height={330}
            />
          </div>
        </div>

        {/* Section 2 - Text and Button */}
        <div className="flex flex-col items-center text-center justify-center w-full lg:w-1/3">
          <p className="text-lg font-serif mb-4 text-black">
            Now available in paperback and eBook from Amazon and other book sellers.
          </p>
          <Link
            href="https://a.co/d/0Kge1Ax"
            target="_blank"
          >
            <button className="bg-[#3d756c] text-black px-8 py-4 rounded-full text-lg font-bold hover:brightness-90 transition-all">
              GET THE BOOK
            </button>
          </Link>
        </div>

        {/* Section 3 - Logo and Contact */}
        <div className="flex flex-col w-full lg:w-1/3 justify-center lg:justify-start items-center lg:items-start">
          <a href="/" className="p-3 rounded-md mb-4">
            <div className="relative w-[250px] h-[120px]">
              <Image
                src="/assets/logo/Author-Logo1.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </a>
          <div className="text-center lg:text-left space-y-1">
            <p className="text-sm sm:text-base font-medium text-[#3d756c]">
              📧 Email: <a href="mailto:Pdgpnation@gmail.com" className="hover:underline">info.james@gmail.com</a>
            </p>
            <p className="text-sm sm:text-base font-medium text-[#3d756c]">
              📞 Contact: <a href="tel:1117773333" className="hover:underline">111-777-3333</a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

