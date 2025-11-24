import Image from "next/image";

const BioPage = () => {
  return (
    <section className="min-h-screen bg-background-dark/30 py-16 backdrop-blur-sm">
      <div className="flex w-full flex-col items-center gap-10">
        <div className="relative w-full overflow-hidden">
          <Image
            src="/dts-assets/dts-shooting-0671.jpg_compressed.JPEG"
            alt="Drown The Sun performing live"
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-background-dark" />
        </div>

        <div className="w-full max-w-5xl -mt-24 space-y-6 px-6 text-left text-white sm:-mt-28 md:-mt-72">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary drop-shadow">
              Bio
            </p>
            <h1 className="mt-2 text-4xl font-bold leading-tight drop-shadow-md md:text-5xl">
              Drown The Sun
            </h1>
          </div>

          <p className="text-lg text-white/90 drop-shadow">
            Drown The Sun drags you into a world where the sun is gone but hope
            refuses to die. Born in Nuremberg in 2016, the five-piece evolved
            from straight-up metalcore into a brooding strain of ambient djent:
            expressive, melodic passages crashing into unorthodox, groove-heavy
            rhythms that hit like a storm and linger like a memory.
          </p>

          <p className="text-lg text-white/85 drop-shadow">
            On stage, they are a disciplined pack—polyrhythmic drums, razor-edged
            riffs, and a spectrum of shouts and growls that turn packed clubs
            into whirlwinds. Off stage, they’ll carry groceries to the eighth
            floor for a stranger; under the lights, they’ll drive a sweat-soaked
            circle pit through the room.
          </p>

          <p className="text-lg text-white/85 drop-shadow">
            Every release pushes deeper into atmosphere and weight, stitching
            melody to menace and inviting misfits to scream back at the void.
            Drown The Sun is the soundtrack to resistance—cinematic, crushing,
            and impossible to ignore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BioPage;
