'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

import { NavLink } from "@/types";
import { socials } from "@/constants";

const NAV_LINKS: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Bio", path: "/bio" },
  { label: "Tour", path: "/tour" },
  { label: "Releases", path: "/releases" },
  { label: "Contact", path: "/contact" },
];

const FOOTER_LINKS = [
  { icon: "library_music", href: "https://open.spotify.com/", label: "Spotify" },
  { icon: "smart_display", href: "https://www.youtube.com/", label: "YouTube" },
  { icon: "podcasts", href: "https://music.apple.com/", label: "Apple Music" },
  { icon: "mail", href: "mailto:booking@drownthesun.com", label: "Email" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    setIsOpen(false);
    // Close mobile menu on route change; ignore exhaustive-deps to avoid instant toggle close.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between border-b border-white/10">
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/dts-assets/dts-logo.png"
              alt="Drown The Sun logo"
              width={140}
              height={56}
              className="h-7 w-auto transition-transform group-hover:scale-105"
              priority
            />
            <span className="sr-only">Drown The Sun</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.path ? "text-primary" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/releases"
              className="ml-4 flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
            >
              Listen Now
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white transition-colors hover:text-primary md:hidden"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-8 w-8"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.3 5.71a1 1 0 0 0-1.41-1.41L12 9.59 7.11 4.7A1 1 0 1 0 5.7 6.11L10.59 11l-4.9 4.89a1 1 0 1 0 1.41 1.42L12 12.41l4.89 4.9a1 1 0 0 0 1.42-1.42L13.41 11l4.89-4.89Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-8 w-8"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4 6.75A.75.75 0 0 1 4.75 6h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 6.75Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 12Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 17.25Z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "80px" }}
      >
        <nav className="flex flex-col items-center gap-8 pt-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-2xl font-bold transition-colors hover:text-primary ${
                pathname === link.path ? "text-primary" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/releases"
            className="mt-4 flex h-12 w-48 items-center justify-center rounded-lg bg-primary text-lg font-bold text-white transition-colors hover:bg-primary-dark"
          >
            Listen Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex gap-6 mt-0 mb-6 text-center justify-center">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="group flex h-10 w-10 items-center opacity-70 justify-center rounded-full drop-shadow-[0_0_8px_rgba(0,0,0,0.55)] transition hover:-translate-y-0.5 hover:text-white"
              aria-label={social.name}
              target="_blank"
              rel="noreferrer"
            >
              <svg className="h-10 w-10">
                <path d={social.svgPath} fill="currentColor" />
              </svg>
              <span className="sr-only">{social.name}</span>
            </a>
          ))}

        </div>
        <p className="text-xs text-white/40">
          (c) 2025 DROWN THE SUN. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const currentPath = usePathname();

  return (
    <div className="relative flex min-h-screen flex-col text-white">
      <div
        className="fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
        style={{
          backgroundImage: 'url("/dts-assets/background-fallback-mobile.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/dts-assets/background-fallback-mobile.png"
        >
          <source
            src="/dts-assets/Resistance-480p.mp4"
            type="video/mp4"
            media="(max-width: 768px)"
          />
          <source src="/dts-assets/Resistance-1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/80" />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main key={currentPath} className="flex-grow pt-20 page-fade">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
