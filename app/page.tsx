import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero1 from "@/components/hero1";
import Hero2 from "@/components/hero2";
import Hero3 from "@/components/hero3";
import type { Metadata } from "next";
import AuthorIntro from "@/components/about";
import Hero4 from "@/components/hero4";

export const metadata: Metadata = {
  title: "Official Book Website by Munshya Alice Tembo",
  description:
    "Explore 'What If Your Child's Healing Begins with Yours?' by Munshya Alice Tembo.—a bold and honest memoir on faith, disillusionment, and spiritual truth. Available now on Amazon. Discover the story complete story.",
};

export default function Home() {
  return (
    <div>
       <Header />
       <Hero1 />
       <Hero2 />
       {/* <Hero4 /> */}
       <AuthorIntro />
       <Hero3 />
       <Footer />
    </div>
  );
}
