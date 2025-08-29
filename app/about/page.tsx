import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Authors | James Larry Holmes Jr. & Shirley Velázquez",
  description:
    "Meet the authors behind THE ABANDONMENT and La Lucha Por Mi Alma. Explore bios, contact, and galleries.",
};

const chip =
  "inline-flex items-center rounded-full bg-emerald-900/10 text-emerald-900 px-3 py-1 text-xs font-semibold tracking-wider backdrop-blur ring-1 ring-emerald-900/15";

function GalleryGrid({
  images,
  contain = false,
}: {
  images: string[];
  contain?: boolean;
}) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {images.map((src, i) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-xl ring-1 ring-black/5 bg-white"
        >
          {/* Square on mobile for balance, slightly tall on larger screens */}
          <div className="relative aspect-square sm:aspect-[4/5] w-full">
            <Image
              src={src}
              alt={`gallery ${i + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              className={`${
                contain ? "object-contain p-2 bg-white" : "object-cover"
              } transition-transform duration-500 group-hover:scale-[1.03]`}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  );
}

const About = () => {
  const jamesGallery = [
    "/assets/images/james-2.jpeg",
    "/assets/images/james-3.jpeg",
    "/assets/images/james-4.jpeg",
    "/assets/images/james-6.jpg",
    "/assets/images/my-m3.png", // duplicate as filler; replace with a 5th/6th when ready
    "/assets/images/photo-4.png",
  ];

  // const shirleyGallery = [
  //   "/assets/images/author-1.jpeg",
  //   "/assets/images/author-2.jpeg",
  //   "/assets/images/author-8.jpeg",
  //   "/assets/images/author-9.jpeg",
  //   "/assets/images/author-5.jpeg",
  //   "/assets/images/author-6.jpeg",
  // ];

  const shirleyGallery = [
    "/assets/images/photo-1.png",
    "/assets/images/photo-2.png",
    "/assets/images/photo-10.png",
    "/assets/images/photo-9.png",
    "/assets/images/photo-3.png",
    "/assets/images/photo-11.png",
  ];

  return (
    <>
      <Header />

      {/* Anchor pills */}
      {/* <nav className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-black/5"> */}
      <nav
        className="
    sticky inset-x-0
    top-[200px]
    md:top-0      
    lg:top-0
    z-40 bg-white/90 backdrop-blur border-b border-black/5
  "
      >
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-center gap-3">
          <Link
            href="#james"
            className="rounded-full px-4 py-2 text-sm font-semibold bg-emerald-700 text-white hover:brightness-95 transition"
          >
            James
          </Link>
          <Link
            href="#shirley"
            className="rounded-full px-4 py-2 text-sm font-semibold bg-emerald-900/10 text-emerald-900 ring-1 ring-emerald-900/15 hover:bg-emerald-900/15 transition"
          >
            Shirley
          </Link>
        </div>
      </nav>

      <main className="bg-white text-black">
        {/* ================= JAMES ================= */}
        <section id="james" className="scroll-mt-24 w-full py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Media */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl bg-[#f0f3e7] p-3 shadow-2xl ring-1 ring-black/5">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                    <Image
                      src="/assets/images/james-3.jpeg"
                      alt="James Larry Holmes Jr."
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className={chip}>Author</span>
                    <span className={chip}>Investigator</span>
                    <span className={chip}>Spiritual Guide</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                {/* <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-900/80">
                  MEET THE AUTHOR
                </p> */}
                <p className="mx-auto inline-flex items-center rounded-full bg-[#09332c] px-4 py-1 text-sm font-semibold tracking-wider text-white">
                  MEET THE AUTHORS —
                </p>
                <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-[#09332c] leading-tight">
                  James Larry Holmes Jr.
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-gray-800">
                  <p>
                    I’m Mr. James Larry Holmes Jr. Born in Brooklyn, New York,
                    at Kings County Hospital. I attended Grover Cleveland High
                    School (1983–1987). Later in life I was further educated at
                    Harrisburg Area Community College—better known as HACC—in
                    Harrisburg, Pennsylvania. My whole adult life consists of
                    security, bounty hunting, and private investigations. God
                    has given me a very interesting life, and I can tell stories
                    forever more. Not to mention, God has given me a real gift
                    so that I can help people spiritually.
                  </p>

                  <p className="italic border-l-4 border-emerald-900/30 pl-4 text-emerald-950">
                    From street-level grit to spiritual insight, James blends
                    real investigations with redemption, creating narratives
                    that feel true, urgent, and human.
                  </p>

                  {/* Extra context for James */}
                  <div className="rounded-xl bg-emerald-50 p-4 ring-1 ring-emerald-900/10">
                    <h4 className="text-emerald-900 font-bold mb-2">
                      Books & Projects
                    </h4>
                    <ul className="space-y-2 text-[16px] leading-7 text-emerald-950">
                      <li>
                        <span className="font-semibold">
                          THE ABANDONMENT: A Hollywood Bombshell
                        </span>{" "}
                        — drawn from a real investigation involving a young
                        woman’s Hollywood star mother; discoveries surfaced only
                        a few years ago and tie into a developing documentary
                        vision.
                      </li>
                      <li>
                        <span className="font-semibold">
                          La Lucha Por Mi Alma (Spanish Edition)
                        </span>{" "}
                        — a true-life testimony of faith, a powerful bond with
                        his mother, and a resilient upbringing in New York.
                      </li>
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <Link
                        href="https://a.co/d/9tIeO8g"
                        target="_blank"
                        className="rounded-full bg-[#09332c] text-white px-5 py-2 text-sm font-semibold ring-1 ring-white/20 hover:brightness-95 transition"
                      >
                        Get THE ABANDONMENT
                      </Link>
                      <Link
                        href="https://a.co/d/0Kge1Ax"
                        target="_blank"
                        className="rounded-full border-2 border-[#09332c] text-[#09332c] bg-white px-5 py-2 text-sm font-semibold hover:bg-emerald-50 transition"
                      >
                        Get La Lucha Por Mi Alma
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:Fightformysoul1968@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full bg-[#09332c] text-white px-5 py-3 text-sm font-semibold ring-1 ring-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:brightness-95 transition"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="opacity-90"
                      fill="currentColor"
                    >
                      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
                    </svg>
                    Fightformysoul1968@gmail.com
                  </a>
                  <a
                    href="tel:+19293432375"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#09332c] text-[#09332c] bg-white px-5 py-3 text-sm font-semibold hover:bg-emerald-50 transition"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="opacity-90"
                      fill="currentColor"
                    >
                      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.31.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.85 22 2 13.15 2 2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.27.2 2.47.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z" />
                    </svg>
                    (929) 343-2375
                  </a>
                </div>
              </div>
            </div>

            {/* James Gallery */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-[#09332c]">Gallery</h3>
              <p className="text-sm text-emerald-900/70">
                Highlights from the journey
              </p>
              <GalleryGrid images={jamesGallery} />
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px w-full bg-emerald-900/10" />

        {/* ================= SHIRLEY ================= */}
        <section
          id="shirley"
          className="scroll-mt-24 w-full py-16 bg-[#f7faf8]"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Content */}
              <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center">
                {/* <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-900/80">
                  MEET THE CREATIVE
                </p> */}
                <p className="mx-auto inline-flex items-center rounded-full bg-[#09332c] px-4 py-1 text-xs font-semibold tracking-wider text-white">
                  MEET THE CREATIVE
                </p>
                <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-[#09332c] leading-tight">
                  Shirley Velázquez
                </h2>

                <div className="mt-6 space-y-6 text-[17px] leading-8 text-gray-800">
                  <p>
                    Shirley Velázquez is a storyteller and filmmaker on a
                    lifelong journey to uncover her heritage and roots,
                    exploring the places and memories that shaped her identity.
                    Deeply drawn to the unheard voices of the
                    unnoticed—especially children—she brings their stories to
                    life through her writing and films, honoring their
                    experiences while connecting them to her own search for
                    belonging.
                  </p>
                  <p>
                    Working primarily behind the lens, Shirley blends
                    documentary sensibilities with poetic framing, capturing
                    truth with care. Her collaboration on{" "}
                    <span className="font-semibold">
                      THE ABANDONMENT: A Hollywood Bombshell
                    </span>{" "}
                    deepens the work’s perspective, threading empathy, memory,
                    and resilience into each frame.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  <span className={chip}>Storyteller</span>
                  <span className={chip}>Filmmaker</span>
                  <span className={chip}>Advocate</span>
                </div>
              </div>

              {/* Media */}
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative overflow-hidden rounded-2xl bg-[#f0f3e7] p-3 shadow-2xl ring-1 ring-black/5">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                    <Image
                      src="/assets/images/author-4.jpeg"
                      alt="Shirley Velázquez"
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Shirley Gallery (use contain to avoid cropping and reduce “too tall” feel) */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-[#09332c]">Gallery</h3>
              <p className="text-sm text-emerald-900/70">
                Frames & field notes
              </p>
              <GalleryGrid images={shirleyGallery} contain />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
