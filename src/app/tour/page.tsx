import Image from "next/image";

import ShowCard from "@/components/ShowCard";
import { PAST_SHOWS, TOUR_PAGE_SHOWS } from "@/constants";

const TourPage = () => {
  return (
    <div className="-mt-20">
      {/* Header Image */}
      <div className="relative h-[57vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/dts-assets/dts-shooting-0568.jpg_compressed.jpeg"
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
            {TOUR_PAGE_SHOWS.map((show) => (
              <ShowCard key={show.id} show={show} />
            ))}
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
