import Image from "next/image";

import ShowCard from "@/components/ShowCard";
import { PAST_SHOWS, UPCOMING_SHOWS } from "@/constants";

const TourPage = () => {
  return (
    <div className="-mt-20">
      {/* Header Image */}
      <div className="relative h-[57vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/dts-assets/0568.jpeg"
            alt="Concert background"
            fill
            className="object-[50%_24%] object-cover opacity-60 "
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <h1 className="text-5xl font-black uppercase tracking-tighter text-white md:text-7xl">
            Live Shows
          </h1>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-20">
        {/* Upcoming */}
        <div className="mb-20">
          <h2 className="mb-8 border-b border-white/10 pb-4 text-2xl font-bold uppercase tracking-tight text-white">
            Upcoming Shows
          </h2>
          <div className="flex flex-col gap-4">
            {UPCOMING_SHOWS.length === 0 ? (
              <div className="mx-auto w-full max-w-4xl rounded-2xl border border-white/10 bg-black/70 px-6 py-8 text-center text-white shadow-2xl backdrop-blur">
                <p className="text-lg font-semibold uppercase tracking-[0.12em] text-white/70">
                  No Upcoming Shows
                </p>
                <p className="mt-2 text-sm text-white/60">Check back soon for new dates.</p>
              </div>
            ) : (
              UPCOMING_SHOWS.map((show) => <ShowCard key={show.id} show={show} />)
            )}
          </div>
        </div>

        {/* Past */}
        <div>
          <h2 className="mb-8 border-b border-white/10 pb-4 text-2xl font-bold uppercase tracking-tight text-white opacity-60">
            Past Shows
          </h2>
          <div className="flex flex-col gap-4">
            {PAST_SHOWS.map((show) => (
              <ShowCard key={show.id} show={show} isPast />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPage;
