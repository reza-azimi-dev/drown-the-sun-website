import React from "react";

import type { Show } from "@/types";

interface ShowCardProps {
  show: Show;
  isPast?: boolean;
}

const ShowCard: React.FC<ShowCardProps> = ({ show, isPast = false }) => {
  return (
    <div
      className={`group flex flex-col items-center justify-between gap-4 rounded-lg bg-background-card p-6 transition-all hover:bg-white/10 md:flex-row ${
        isPast ? "opacity-60" : ""
      }`}
    >
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-lg ${
            isPast ? "bg-white/5 text-white/40" : "bg-white/10 text-white"
          }`}
        >
          <span className="material-symbols-outlined text-2xl">calendar_month</span>
        </div>
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-white md:w-36">{show.date}</p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-base font-semibold text-white">{show.venue}</p>
          <p className="text-sm text-white/60">{show.location}</p>
        </div>
      </div>

      <button
        disabled={show.isSoldOut}
        className={`flex h-10 min-w-[100px] items-center justify-center rounded-lg px-6 text-sm font-bold uppercase tracking-wider transition-colors ${
          show.isSoldOut
            ? "cursor-not-allowed bg-white/10 text-white/50"
            : "bg-primary text-white hover:bg-primary-dark"
        }`}
      >
        {show.isSoldOut ? "Sold Out" : "Tickets"}
      </button>
    </div>
  );
};

export default ShowCard;
