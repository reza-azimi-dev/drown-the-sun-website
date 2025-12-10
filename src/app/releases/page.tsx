import ReleaseCard from "@/components/ReleaseCard";
import { RELEASES } from "@/constants";

const ReleasesPage = () => {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <div className="mb-12 border-b border-white/10 pb-6">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-white md:text-6xl">
          Releases
        </h1>
      </div>

      <div className="flex flex-col gap-12">
        {RELEASES.map((release) => (
          <ReleaseCard key={release.id} release={release} />
        ))}
      </div>
    </div>
  );
};

export default ReleasesPage;
