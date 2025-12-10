"use client";

import Image from "next/image";
import React, { useState } from "react";
import { createPortal } from "react-dom";

import type { Show } from "@/types";

interface ShowCardProps {
  show: Show;
  isPast?: boolean;
}

const ShowCard: React.FC<ShowCardProps> = ({ show, isPast = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBannerModalOpen, setIsBannerModalOpen] = useState(false);
  const [mounted] = useState(() => typeof window !== "undefined");
  const bannerSrc = show.bannerUrl?.trim() ? show.bannerUrl : "";

  const [dateMain, dateYear] = show.date.split(",").map((part) => part.trim());

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setIsModalOpen(true)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsModalOpen(true);
        }
      }}
      className={`group relative mx-auto w-full max-w-4xl cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-black/80 shadow-2xl backdrop-blur transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] hover:-translate-y-0.5 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 ${
        isPast ? "opacity-60" : ""
      }`}
    >
      <div className="absolute inset-0">
        {bannerSrc ? (
          <Image
            src={bannerSrc}
            alt={`${show.venue} banner`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 900px"
            priority={false}
          />
        ) : (
          <div className="h-full w-full bg-black" />
        )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/95" />
        <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90 backdrop-blur-sm">
            🔍 Preview
          </div>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-[auto,1fr] items-start gap-x-5 gap-y-3 px-5 py-6 md:grid-cols-[auto,1fr,auto] md:items-center md:gap-6 md:px-8 md:py-7">
        <div className="flex items-center gap-3 md:gap-4">
          <div
            className={`flex h-20 w-20 flex-col justify-center rounded-xl bg-white/10 text-center font-black uppercase leading-tight tracking-tight text-white shadow-inner md:h-24 md:w-24 ${
              isPast ? "opacity-60" : ""
            }`}
          >
            <span className="text-base md:text-lg">{dateMain || show.date}</span>
            {dateYear && <span className="text-sm text-white/70 md:text-base">{dateYear}</span>}
          </div>
          <div className="hidden h-12 w-px bg-white/10 md:block" aria-hidden="true" />
        </div>

        <div className="flex flex-col gap-1 text-left">
          <p className="text-lg font-bold uppercase tracking-[0.08em] text-primary md:text-xl">
            {isPast ? "Past Show" : "Live"}
          </p>
          <p className="text-2xl font-black text-white md:text-3xl">{show.location}</p>
          <p className="text-base text-white/70 md:text-lg">{show.venue}</p>
        </div>

        <div className="col-span-2 flex flex-col items-end gap-2 md:col-span-1 md:col-start-3 md:row-start-1 md:gap-3">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/70 transition group-hover:border-white/30 group-hover:bg-white/10">
            {/* <span aria-hidden="true" className="text-sm text-white/80">{">"}</span> */}
            <span>Tap for details</span>
          </div>
        </div>
      </div>

      {mounted && isModalOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8"
              role="dialog"
              aria-modal="true"
              onClick={() => setIsModalOpen(false)}
              onMouseDown={() => setIsModalOpen(false)}
            >
              <div
                className="relative w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
              >
                <div className="relative flex h-full flex-col md:flex-row">
                  <button
                    type="button"
                    onClick={() => setIsBannerModalOpen(true)}
                    className="group/banner relative w-full bg-black min-h-[340px] md:w-[55%] md:flex-[0_0_55%] md:min-h-[620px]"
                    aria-label="Open banner"
                  >
                    {bannerSrc ? (
                      <Image
                        src={bannerSrc}
                        alt={`${show.venue} banner`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 760px"
                      />
                    ) : (
                      <div className="h-full w-full bg-black" />
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover/banner:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256.00098 256.00098"
                        className="h-12 w-12 text-white/90"
                        fill="currentColor"
                        aria-hidden="true"
                        
                      >
                        <path d="M159.99707,116a12.00028,12.00028,0,0,1-12,12h-20v20a12,12,0,0,1-24,0V128h-20a12,12,0,0,1,0-24h20V84a12,12,0,0,1,24,0v20h20A12.00028,12.00028,0,0,1,159.99707,116Zm72.47949,116.48242a12.00033,12.00033,0,0,1-16.9707,0l-40.67871-40.67871a96.10513,96.10513,0,1,1,16.97168-16.96979l40.67773,40.6778A11.99973,11.99973,0,0,1,232.47656,232.48242ZM115.99707,187.99609a72,72,0,1,0-72-72A72.08124,72.08124,0,0,0,115.99707,187.99609Z" />
                      </svg>
                    </div>
                  </button>

                  <div className="flex flex-1 flex-col gap-5 overflow-y-auto p-6 md:w-[45%] md:p-8">
                    <div className="flex items-center justify-between gap-3">
                      <div className="relative flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white/80">
                        <span className="relative flex h-3 w-3">
                          <span
                            className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
                              !isPast ? "bg-green-400 animate-ping" : "bg-white/40"
                            }`}
                            aria-hidden="true"
                          ></span>
                          <span
                            className={`relative inline-flex h-3 w-3 rounded-full ${
                              !isPast ? "bg-green-400" : "bg-white/50"
                            }`}
                            aria-hidden="true"
                          ></span>
                        </span>
                        <span>{isPast ? "Past Show" : "Live"}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-white/30 hover:bg-white/10"
                      >
                        <span aria-hidden="true" className="mr-1 text-sm">
                          
                        </span>
                        Close
                      </button>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/60">{show.date}</p>
                      <h3 className="text-3xl font-black text-white md:text-4xl">{show.location}</h3>
                      <p className="text-base text-white/70 md:text-lg">{show.venue}</p>
                      {show.description && (
                        <p className="whitespace-pre-line text-sm text-white/60 md:text-base">
                          {show.description}
                        </p>
                      )}
                    </div>

                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
      {mounted && isBannerModalOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8"
              role="dialog"
              aria-modal="true"
              onClick={() => setIsBannerModalOpen(false)}
            >
              <div
                className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setIsBannerModalOpen(false)}
                  className="absolute right-3 top-3 z-10 rounded-full bg-black/60 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-black/80"
                >
                  Close
                </button>
                {bannerSrc ? (
                  <div className="relative h-[80vh] min-h-[360px] w-full bg-black md:h-[82vh]">
                    <Image
                      src={bannerSrc}
                      alt={`${show.venue} full banner`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 1200px"
                    />
                  </div>
                ) : (
                  <div className="h-[80vh] w-full rounded-2xl bg-black" />
                )}
              </div>
            </div>,
            document.body
          )
        : null}
    </div>
  );
};

export default ShowCard;
