import Image from "next/image";
import Link from "next/link";

import ShowCard from "@/components/ShowCard";
import { RELEASES, socials, UPCOMING_SHOWS } from "@/constants";
import ReleaseCard from "@/components/ReleaseCard";






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

          {RELEASES.map((release) =>
            release.title === "Resistance" ? (

              <ReleaseCard key={release.id} release={release} />



            ) : null
          )}
        </div>
      </section>

      {/* Upcoming Shows Preview */}
      <section className="bg-background-dark/30 py-20 lg:py-32 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">
            Upcoming Shows
          </h2>
          <div className="flex flex-col gap-4">
            {UPCOMING_SHOWS.length === 0 ? (
              <div className="mx-auto w-full max-w-4xl rounded-2xl border border-white/10 bg-black/70 px-6 py-8 text-center text-white shadow-2xl backdrop-blur">
                <p className="text-lg font-semibold uppercase tracking-[0.12em] text-white/70">
                  No Upcoming Shows
                </p>
                <p className="mt-2 text-sm text-white/60">
                  Check back soon for new dates.
                </p>
              </div>
            ) : (
              UPCOMING_SHOWS.map((show) => <ShowCard key={show.id} show={show} isPast={show.isPast} />)
            )}
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
