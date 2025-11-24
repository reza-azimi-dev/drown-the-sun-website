import Image from "next/image";
import Link from "next/link";

import ShowCard from "@/components/ShowCard";
import { RELEASES, socials, UPCOMING_SHOWS } from "@/constants";






const HomePage = () => {
  return (
    <div className="-mt-20">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="mb-10 inline-block ">
            <div className="relative overflow-hidden rounded-full opacity-50 border border-white/10 bg-black/40 p-2 shadow-2xl backdrop-blur-md">
              <Image
                src="/dts-assets/dts-logo-circle.png"
                alt="Drown The Sun Logo"
                width={500}
                height={500}
                className="h-auto w-[340px] rounded-full sm:w-[3200x] md:w-[420px] lg:w-[500px] "
                priority
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </div>
          </div>
         
          <div className="flex gap-10 justify-center">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="group flex h-9 w-9  opacity-70 transition hover:-translate-y-0.5"
                aria-label={social.name}
                target="_blank"
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d={social.svgPath} fill="white" />
                </svg>
                <span className="sr-only">{social.name}</span>
              </a>
            ))}

          </div>
        </div>
      </section>

    

      {/* Featured Release Section */}
      <section className="bg-background-card/40 py-20 lg:py-32 backdrop-blur-sm">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">
            New Single Out Now
          </h2>
          <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:border-white/20">
            <div className="flex flex-col gap-10 md:flex-row">
              <div className="w-full shrink-0 md:w-1/3">
                <div
                  className="aspect-square w-full rounded-lg bg-cover bg-center shadow-lg"
                  style={{
                    backgroundImage:
                      'url(/dts-assets/covers/resistance-album-cover.jpg)',
                  }}
                ></div>
              </div>
              <div className="flex flex-col justify-center w-full">
                <h3 className="mb-2 text-4xl font-bold text-white">Resistance</h3>
                {RELEASES.map((release) =>
                  release.title === "Resistance" ? (
                    <div
                      key={release.id}
                      className="mb-6 text-lg text-white/70"
                    >
                      {release.type} - {release.year}
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

                      <div className="flex flex-wrap gap-4 mt-6">
                        <button className="flex h-12 items-center justify-center rounded-lg bg-[#1DB954] px-6 text-sm font-bold text-black transition-transform hover:scale-105">
                          Stream on Spotify
                        </button>
                        <button className="flex h-12 items-center justify-center rounded-lg border border-white/20 bg-transparent px-6 text-sm font-bold text-white transition-colors hover:bg-white/10">
                          Listen on Apple Music
                        </button>
                      </div>

                    </div>

                  
                

                  ) : null
                )}
                
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Shows Preview */}
      <section className="bg-background-dark/30 py-20 lg:py-32 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">
            Upcoming Shows
          </h2>
          <div className="flex flex-col gap-4">
            {UPCOMING_SHOWS.map((show) => (
              <ShowCard key={show.id} show={show} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/tour"
              className="inline-block text-lg font-bold text-primary underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              View All Show Dates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
