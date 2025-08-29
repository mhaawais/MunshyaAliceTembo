"use client";

import React, { useRef, useState, useEffect } from "react";
import { FiPlay, FiPause, FiVolume2, FiVolumeX, FiBookOpen } from "react-icons/fi";

const Hero4 = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Respect reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setIsPlaying(false);
      videoRef.current?.pause();
    }
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsPlaying(false);
        videoRef.current?.pause();
      } else {
        setIsPlaying(true);
        videoRef.current?.play().catch(() => {});
      }
    };
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section className="relative isolate">
      {/* Background: blurred, covers entire area */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          src="/assets/images/video-1.mp4"
          className="h-full w-full object-cover blur-xl scale-110 opacity-70"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Foreground container */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex min-h-[80svh] items-center py-16 md:py-24">
          <div className="w-full">
            {/* Headline */}
            <div className="max-w-3xl text-[#15ceb8]">
              <h1 className="text-4xl font-bold font-mono tracking-tight sm:text-5xl md:text-6xl">
                Chill Vibes, Clear Mind
              </h1>
              <p className="mt-4 max-w-2xl text-white/90 sm:text-lg">
                A soothing mix of dance and ambient sound to ease tension, lift mood, and bring you back to center.
              </p>
            </div>

            {/* Video frame: fully visible; larger below md */}
            <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-2 backdrop-blur-sm shadow-2xl">
              {/* Taller aspect on mobile; classic 16:9 on md+ */}
              <div className="relative mx-auto w-full max-w-5xl aspect-[4/3] sm:aspect-[3/2] md:aspect-video">
                <video
                  ref={videoRef}
                  src="/assets/images/video-1.mp4"
                  className="absolute inset-0 h-full w-full object-contain rounded-xl"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate"
                />
                {/* Inner gradient for bright frames */}
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                {/* Controls */}
                <div className="absolute left-3 bottom-3 flex gap-2 md:gap-3">
                  <button
                    onClick={togglePlay}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm font-medium text-white/90 backdrop-blur
                               transition hover:bg-white/10 hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <FiPause className="shrink-0" /> : <FiPlay className="shrink-0" />}
                    <span className="translate-y-[0.5px] transition group-hover:translate-x-0.5">
                      {isPlaying ? "Pause" : "Play"}
                    </span>
                  </button>

                  <button
                    onClick={toggleMute}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm font-medium text-white/90 backdrop-blur
                               transition hover:bg-white/10 hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? <FiVolumeX className="shrink-0" /> : <FiVolume2 className="shrink-0" />}
                    <span className="translate-y-[0.5px] transition group-hover:translate-x-0.5">
                      {isMuted ? "Unmute" : "Mute"}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Primary CTA only */}
            <div className="mt-8">
              <a
                href="#all-books"  // Change to "#book1" if you want to anchor a specific book section.
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm md:text-base font-semibold text-gray-900
                           bg-white/95 shadow-sm ring-1 ring-inset ring-white/60
                           hover:bg-white hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0
                           transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <FiBookOpen className="text-gray-900" />
                <span>View Publications</span>
                {/* subtle arrow nudge on hover using currentColor svg */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition -mr-0.5 group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>

              <p className="mt-2 text-xs text-white/60">
                Let relaxed movement and warm tones hush the noise. Breathe deeper and feel the day soften.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
