"use client";

import Image from "next/image";
import Link from "next/link";

export default function AuthorsSection() {
  return (
    <section
      id="authors"
      aria-labelledby="authors-heading"
      className="relative overflow-hidden bg-gradient-to-b from-[#f0f3e7] to-white pt16"
    >
      {/* Decorative background blur */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-700/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-900/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <h2 id="authors-heading" className="sr-only">
          Featured Authors
        </h2>

        {/* ====== JAMES LARRY HOLMES JR. ====== */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Media (Video) */}
          <div className="order-1 lg:order-none">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[22rem] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
              {/* <video
                src="/assets/images/video-1.mp4"
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              /> */}
              <Image
                src="/assets/images/james-2.jpeg"
                alt="Author portrait"
                width={448}
                height={576}
                className="w-full h-full object-cover rounded-xl shadow-2xl"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="order-2 space-y-6">
            <span className="inline-flex items-center rounded-full bg-red-800 px-4 py-1 text-xs font-semibold tracking-wider text-white">
              MEET JAMES LARRY —
            </span>

            <div>
              <h3 className="text-3xl font-bold leading-tight text-[#0a1f1a] sm:text-4xl">
                James Larry Holmes Jr.
              </h3>
              <p className="mt-1 text-lg font-medium text-emerald-900/80">
                Author • Investigator • Spiritual Guide
              </p>
            </div>

            <p className="max-w-prose text-base leading-relaxed text-gray-900">
              Born in Brooklyn, New York at Kings County Hospital, James Larry
              Holmes Jr. attended Grover Cleveland High School (1983–1987) and
              later continued his studies at Harrisburg Area Community College
              (HACC) in Pennsylvania. His adult life has spanned security,
              bounty hunting, and private investigations—work that sharpened his
              eye for detail and truth. He believes God has led him through an
              extraordinary journey so he can tell stories that help people
              spiritually.
            </p>

            <div id="all-books" className="grid gap-4 sm:grid-cols-2">
              {/* Book 1 */}
              <Link
                href="#book-1"
                className="group rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm transition hover:shadow-lg"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-900/70">
                  New Mystery • True Investigation
                </div>
                <div className="mt-1 text-lg font-bold">
                  THE ABANDONMENT: A Hollywood Bombshell
                </div>
                <p className="mt-2 text-sm text-gray-700">
                  Co-created with Shirley Velázquez. Drawn from a real case
                  involving a young woman’s Hollywood star mother—key
                  discoveries surfaced only four years ago. The story expands
                  into a forthcoming documentary and possibly another book.
                </p>
                <span className="mt-3 inline-block text-sm font-semibold text-emerald-900/80 group-hover:underline">
                  View details →
                </span>
              </Link>

              {/* Book 2 */}
              <Link
                href="#book-2"
                className="group rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm transition hover:shadow-lg"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-900/70">
                  Spanish Edition • Testimony
                </div>
                <div className="mt-1 text-lg font-bold">
                  La Lucha Por Mi Alma
                </div>
                <p className="mt-2 text-sm text-gray-700">
                  A true-life testimony—his spiritual bond with his mother, and
                  a gritty coming-of-age in New York. Candid, raw, and
                  ultimately redemptive.
                </p>
                <span className="mt-3 inline-block text-sm font-semibold text-emerald-900/80 group-hover:underline">
                  View details →
                </span>
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/about#james"
                className="rounded-full border-2 border-[#09332c] bg-[#09332c] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-95"
              >
                Explore James
              </Link>
              <Link
                href="/blog"
                className="rounded-full border-2 border-emerald-900/20 bg-white px-6 py-3 text-sm font-semibold text-emerald-900 shadow-sm transition hover:border-emerald-900/40"
              >
                Read Blogs
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px w-full bg-emerald-900/10" />

        {/* ====== SHIRLEY VELÁZQUEZ ====== */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Content */}
          <div className="order-2 space-y-6 lg:order-none">
            <span className="inline-flex items-center rounded-full bg-red-800 px-4 py-1 text-xs font-semibold tracking-wider text-white">
              MEET SHIRLEY —
            </span>

            <div>
              <h3 className="text-3xl font-bold leading-tight text-[#0a1f1a] sm:text-4xl">
                Shirley Velázquez
              </h3>
              <p className="mt-1 text-lg font-medium text-emerald-900/80">
                Storyteller • Filmmaker • Advocate
              </p>
            </div>

            <p className="max-w-prose text-base leading-relaxed text-gray-900">
              Shirley is a storyteller and filmmaker on a lifelong journey to
              uncover heritage and roots—retracing places and memories that
              shape identity. Drawn to the unheard voices of the unnoticed,
              especially children, she brings their stories to life from behind
              the lens, honoring their experiences and connecting them to her
              own search for belonging. She is a creative force behind{" "}
              <span className="font-semibold">
                THE ABANDONMENT: A Hollywood Bombshell
              </span>
              , contributing her vision to the work’s narrative depth.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/about#shirley"
                className="rounded-full border-2 border-[#09332c] bg-[#09332c] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-95"
              >
                Explore Shirley
              </Link>
              {/* <Link
                href="/projects"
                className="rounded-full border-2 border-emerald-900/20 bg-white px-6 py-3 text-sm font-semibold text-emerald-900 shadow-sm transition hover:border-emerald-900/40"
              >
                See Films & Work
              </Link> */}
            </div>
          </div>

          {/* Media (Image) */}
          <div className="order-1 lg:order-none">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[22rem] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
              <Image
                src="/assets/images/author-4.jpeg"
                alt="Portrait of Shirley Velázquez"
                width={640}
                height={800}
                className="h-full w-full object-cover"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
