import React from "react";

import type { Release } from "@/types";

interface ReleaseCardProps {
  release: Release;
}

const ReleaseCard: React.FC<ReleaseCardProps> = ({ release }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:border-white/20">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Cover Art */}
        <div className="w-full shrink-0 lg:w-1/3">
          <div
            className="aspect-square w-full rounded-lg bg-cover bg-center shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            style={{ backgroundImage: `url("${release.coverUrl}")` }}
          ></div>
        </div>

        {/* Info & Links */}
        <div className="flex flex-grow flex-col gap-4">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              {release.title}
            </h2>
            <p className="mt-2 text-lg text-white/60">
              {release.type} - {release.year}
            </p>
          </div>

          {/* Spotify Embed */}
          {release.spotifyUrl && (
            <div className="w-full overflow-hidden rounded-2xl border border-white/10">
              <iframe
                className="block h-[152px] w-full"
                style={{ border: "none" }}
                src={release.spotifyUrl}
                title={`${release.title} Spotify embed`}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-0">
            <a
              href="https://open.spotify.com/artist/2yFB2TDFWStvT5nYj8g8Hc"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 items-center justify-center gap-2 rounded-lg bg-[#1DB954] px-6 text-sm font-bold text-black transition-transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path  d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Spotify
            </a>
            <a
              href="https://music.apple.com/de/artist/drown-the-sun/1356157060"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-6 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path  d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              Apple Music
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleaseCard;
