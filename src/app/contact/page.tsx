'use client';

import Image from "next/image";
import type { FormEvent } from "react";

const ContactPage = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Contact Hero */}
      <div className="relative mb-16 h-[500px] w-full px-4 pt-10">
        <div
          className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-cover bg-center text-center shadow-2xl"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzwRCT0Lpwnn5a2onamEmGwxBgC7vW2QI-Ix8d_uR3bMCwEfnHITienS5MPvt6wjwiaWvLYmqqs5IDwoJ52mH0UzZYrt4-uEbGk_oLcfD2Xbva3v_05dETOcuYy8bE0q4C-1bh60dkHsS-011IA0rw0wf-tJlZofcDo0omRqU-_L1NN269bc3n4IaySk7scdiFPTYKUbQhTaTyWlAWv-7kVUOfUAkQX8SD8-GN9eyhjBle-JyzKGMmaUt0Btt6P6BS1lnsfBMG_hK_")`,
          }}
        >
          <h1 className="mb-4 text-4xl font-black uppercase text-white md:text-6xl">
            Reach The Void
          </h1>
          <p className="max-w-md px-4 text-base text-white/80 md:text-lg">
            For booking, press, or general inquiries, use the form below.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Form Section */}
          <div className="lg:col-span-3">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-white/80">Name</span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="h-14 w-full rounded-lg border border-[#543b3f] bg-[#271b1d] px-4 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-white/80">Email</span>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="h-14 w-full rounded-lg border border-[#543b3f] bg-[#271b1d] px-4 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </label>
              </div>
              
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-white/80">Subject</span>
                <input
                  type="text"
                  placeholder="Enter the subject"
                  className="h-14 w-full rounded-lg border border-[#543b3f] bg-[#271b1d] px-4 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-white/80">Message</span>
                <textarea
                  placeholder="Type your message here..."
                  className="min-h-[160px] w-full resize-y rounded-lg border border-[#543b3f] bg-[#271b1d] p-4 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                ></textarea>
              </label>

              <button className="h-12 w-full rounded-lg bg-primary text-base font-bold text-white transition-colors hover:bg-primary-dark sm:w-auto sm:px-10">
                Send Message
              </button>
            </form>
          </div>

          {/* Sidebar Info */}
          <div className="flex flex-col gap-12 lg:col-span-2">
            {/* Direct Contact */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-white">Direct Contact</h3>
              <div className="flex flex-col gap-3 text-white/70">
                <p>
                  <span className="font-semibold text-white">Booking: </span>
                  <a
                    href="mailto:booking@drownthesun.com"
                    className="hover:text-primary"
                  >
                    booking@drownthesun.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-white">Press &amp; Media: </span>
                  <a
                    href="mailto:press@drownthesun.com"
                    className="hover:text-primary"
                  >
                    press@drownthesun.com
                  </a>
                </p>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-white">
                Follow The Descent
              </h3>
              <div className="flex gap-3">
                {[
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuC0jRvBugSD_jzBjyo-8_MksA47rOZWhXkswCMH6HUmgXW93SrowD8bR9y0VhCmKo5gmjOZygJKZ6VXMT5EukIJbvKVD5sIIMZ8_Joo7_gBDFU55bcD-DlfS5PC6rb82UqtyQwd19LSFNdm9QLb8eZ6QN3AgYeFRTDn7CPHRnZ31HTT0VotsUqxRoLCLXT1D6u4nfY2WoDtmz6OqeWXz5j7q36-GFqabEKt40isiVlXotb8z5847vmXTBMEJ-kSytk6XiXvfOPOEy-u",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCZlkT2iDeXNRwI48lbDj4TnQ-LNobsg7-SUUy8k3uM_T0V8n21oXcdttidAgF3yjECWdiZrngn_qayHhjU0tDeOCVhLGxwn5aB9c4MfBrgrQ4DolD8_2Df8JPbW1_I53sMwQ_bTCiQwJnaKCI-NEMj6plja-BDCE2e_OWBybXDmTZ4Aim1YgjUy5In-qOnNYKBpfcH4kRcwdEOPsfSWUIStHWVATJ2oSmJPBtyXkr3rlWcuAbOGG9sLUM_Xnli_Lop0VUSmwGq2mkO",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDof6YKCMFpBY1zzKyWNY1-QHKtSvxZSjzPKgGrvuMN42ww5gpm5kQK_lfaZ4KU53_YG05fTqOotmkvWkQkLSKIioUP4qBUOGFfiaGzhVa-C_ECF3FBddL2w9j9mamYMGD6vSv6zabkgR1cIrdSBNJYjxD8W2fe0G8XvQEku5LcXG0nJ-x_9b80zorZ-K_izmh8hB362BO9lKfUsS7NmWUYqCsMZjDDCKidscTp7dbtGSTZuUxGuGFf5cmY56vgtagiFaGv7q7vEji6",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCB0AqAHqCUriMD0SND63CB15QncW-QJir3Dl-vmK7Im0VNOyh_pDPeLL0h3GKmzuIAvjhksBNVMKJ5Bgna6KT699peVq-Sfx4OdvUrB0iUN-iX51FpgQCwo-Ueg2sOXPM7Hxcu6V4LY041e7clNxSmAUQjLcQgcs_-vb5R-1Qbbm_zzl0eHvrwe0BkPK4rFwDaPRivAYo6tELGjhd-8Ww4bPXpDBENubkDoFPtjBj2HLRQPY_GPw1NqCxyqOUHCh2klnQohqhvxobV",
                ].map((src, i) => (
                  <button
                    key={src}
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#39282b] transition-colors hover:bg-primary"
                    aria-label={`Social icon ${i + 1}`}
                  >
                    <Image src={src} alt="" width={24} height={24} className="h-6 w-6" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Latest Transmissions (Gallery) */}
        <div className="mt-20">
          <h2 className="mb-8 text-3xl font-bold text-white">
            Latest Transmissions
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCsEo3LAdrrjvsEtSfMsk7umYBwInsigE84J9uCRYi8B4lVLqaSUDN7YnTd8157xGhbadZVKhCIWKKFTyDLsET-otgVkxRT_M5AKIG2lEwt80U7mnCEmairKR8Y7JbJPuuzWMgiEOJMMZqIIT0Z965jzjLeso_YwGeqvYBkNbi5aF5Gsax2G7d1r1cbZ1Fv9grRQiYo9YEeZb2haaLoqhgjCh9JrQNp2ZHEirNuK16-jU1l-rDc_TmKRa61Rhghw1h39z6qhi26RaoQ",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCdXeoQ1P6KMaYEu7QgtTNz-7vGYSFuCrw5AMID5FcRWMoeyMQxSiOuT3vQ08XQbwUxY9wXuA68U0gWrPbynTr-cfSmREoknw9jaiHJJ8r9PcDz48hHJrmhXq7n1-RO565OoOGhmKWIvxSaa1IMu7T-IN9T_2DAhkSvDqYrC8XH4eoieSTvy7GXyP09th33DMRNrr1b9WQrcUCiXiMhA5uXvneGbXLTG8Bp2yLzB_dp7QGnAouywJgxk-izO19jRHnVwy3qsd9Digav",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBOc7KvoBQ2mjT_mODdALglJWOUZ8xwn5tLTKxHcgUInbmejt3r0MaiWe5Rv3zZJM9OfyfZuJwzn-4uldIJ1wQkrh8-0B298xszXfu_Haq9hiscuClQZjQN8z56sqVLeZtAEpnvZShpaT01DId2Qz6OyHa7YYHtJ05cOCPl7CchPUK_DaIhVlnYfl2N9vbzXPUAMKCQtSW3bLBA33RTHHPHZ-ahOb13EhZEcVD53zVX9hxCbFRILxGG7gdiBiGRLDTgNTd0V2DLQD-l",
            ].map((img) => (
              <div
                key={img}
                className="relative aspect-square overflow-hidden rounded-lg bg-[#271b1d]"
              >
                <Image
                  src={img}
                  alt="Gallery"
                  fill
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
