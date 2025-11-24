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
          <div
            key={release.id}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:border-white/20"
          >
            <div className="flex flex-col gap-8 lg:flex-row">
              {/* Cover Art */}
              <div className="w-full shrink-0 lg:w-1/3">
                <div
                  className="aspect-square w-full rounded-lg bg-cover bg-center shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ backgroundImage: `url("${release.coverUrl}")` }}
                ></div>
              </div>

              {/* Info & Links */}
              <div className="flex flex-grow flex-col gap-6">
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
                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-4">
                    {[
                      { name: "Apple Music", icon: "play_circle" },
                      { name: "YouTube", icon: "smart_display" },
                      { name: "Bandcamp", icon: "podcasts" },
                      { name: "Tidal", icon: "music_note" },
                    ].map((platform) => (
                      <button
                        key={platform.name}
                        className="flex flex-col items-center justify-center gap-2 rounded-lg p-3 transition-colors hover:bg-white/5"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-primary">
                          <span className="material-symbols-outlined text-2xl">
                            {platform.icon}
                          </span>
                        </div>
                        <span className="text-xs font-medium text-white/80">
                          {platform.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReleasesPage;
