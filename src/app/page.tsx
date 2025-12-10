import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";
import ShowCard from "@/components/ShowCard";
import ReleaseCard from "@/components/ReleaseCard";
import { RELEASES, socials, UPCOMING_SHOWS } from "@/constants";





export const metadata: Metadata = {
  title: "Drown The Sun | Official Site",
  description:
    "Drown The Sun – official site for news, tour dates, music, and contact. Stream the latest releases and see upcoming shows.",
  openGraph: {
    title: "Drown The Sun | Official Site",
    description:
      "Drown The Sun – official site for news, tour dates, music, and contact. Stream the latest releases and see upcoming shows.",
    url: "https://drown-the-sun.vercel.app",
    siteName: "Drown The Sun",
    images: [
      {
        url: "/dts-assets/0568.JPEG",
        width: 1200,
        height: 630,
        alt: "Drown The Sun live",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drown The Sun | Official Site",
    description:
      "Drown The Sun – official site for news, tour dates, music, and contact. Stream the latest releases and see upcoming shows.",
    images: ["/dts-assets/0568.JPEG"],
  },
};

const HomePage = () => {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "Drown The Sun",
    url: "https://drown-the-sun.vercel.app",
    image: "/dts-assets/dts-logo.png",
    sameAs: socials.map((s) => s.href),
  };

  const eventsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: UPCOMING_SHOWS.map((show, index) => ({
      "@type": "MusicEvent",
      position: index + 1,
      name: `${show.venue} - ${show.location}`,
      startDate: show.date,
      location: {
        "@type": "Place",
        name: show.venue,
        address: show.location,
      },
      image: show.bannerUrl,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: show.isPast
        ? "https://schema.org/EventScheduled"
        : "https://schema.org/EventPostponed",
    })),
  };

  return (
    <div className="-mt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([orgJsonLd, eventsJsonLd]),
        }}
      />
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
