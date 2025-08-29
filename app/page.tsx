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
  title: "Official Book Website by James",
  description:
    "Explore 'The Abandonment: A Hollywood Bombshell' and 'La Lucha Por Mi Almas' by James Larry Holmes Jr.—a bold and honest memoir on faith, disillusionment, and spiritual truth. Available now on Amazon. Discover the story behind the departure from the church.",
};

export default function Home() {
  return (
    <div>
       <Header />
       <Hero1 />
       <Hero2 />
       <Hero4 />
       <AuthorIntro />
       <Hero3 />
       <Footer />
    </div>
  );
}
