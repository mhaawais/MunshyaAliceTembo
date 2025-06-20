import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero2 = () => {
  return (
    <div className="bg-[#bce1dc] w-full py-10 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-8">
        {/* Image Section */}
        <div className="bg-[#bce1dc] p-6 rounded-md w-full max-w-[350px]">
          <Image
            src="/assets/images/m4.JPG"
            alt="Book Image"
            width={300}
            height={400}
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Text Section */}
        {/* <div className="bg-[#64a59a] p-8 rounded-md w-full max-w-[500px] flex flex-col justify-center items-center lg:items-start min-h-[450px] text-center lg:text-left font-serif">
          <h2 className="text-3xl md:text-4xl font-bold text-myblack mb-4">
           La Lucha Por Mi Almas<br />
          (Spanish Edition)
          </h2>
          <h3 className="mb-8 text-xl text-gray-700">
            By: <br /> 
            Dwight Vincent Green Jr.
          </h3>
          <Link href={"https://a.co/d/0Kge1Ax"} target="_blank"> 
          <button 
            className="inline-block bg-black text-white px-6 py-3 font-semibold text-lg rounded-md transition-all duration-300 hover:bg-gray-800"
          >
            Get The BooK!
          </button>
          </Link>
        </div> */}
        <div className="bg-[#64a59a] p-4 rounded-md w-full max-w-[500px] flex flex-col justify-center items-center lg:items-start min-h-[320px] text-center lg:text-left font-serif">
          <p className="font-bold text-white uppercase tracking-wide mb-1 text-base sm:text-lg md:text-xl lg:text-2xl">
            JUST RELEASED —
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-myblack mb-2">
            La Lucha Por Mi Almas
            <br />
            (Spanish Edition)
          </h2>
          <h3 className="mb-4 text-lg text-gray-700">
            By: <br />
            James Larry Holmes JR.
          </h3>
          <Link href={"https://a.co/d/0Kge1Ax"} target="_blank">
            <button className="inline-block bg-black text-white px-5 py-5 font-semibold text-xl rounded-md transition-all duration-300 hover:bg-gray-800 font-serif">
              Get The BooK!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
