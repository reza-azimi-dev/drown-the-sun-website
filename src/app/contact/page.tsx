import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="-mt-20 min-h-screen">
      <div className="relative h-[70vh] min-h-[360px] w-full overflow-hidden">
        <Image
          src="/dts-assets/0582.JPEG"
          alt="Contact background"
          fill
          priority
          className="object-cover object-[50%_20%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Contact</p>
          <h1 className="text-5xl font-black uppercase tracking-tight text-white md:text-7xl">
            Reach The Void
          </h1>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-2xl border border-white/10 bg-black/70 p-8 shadow-2xl backdrop-blur">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
            Booking & Inquiries
          </h2>
          <p className="mt-3 text-white/70">
            For booking, press, or any questions, drop us a line and we’ll get back to you.
          </p>

          <div className="mt-8 flex flex-col gap-4 text-white">
            <a
              href="mailto:booking@drownthesun.com"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-lg font-semibold transition hover:border-primary hover:bg-primary/10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-primary">Email</span>
              booking@drownthesun.com
            </a>
          </div>

          <div className="mt-6 text-sm text-white/60">
            Prefer socials? Reach us via Instagram or Facebook from the social links.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
