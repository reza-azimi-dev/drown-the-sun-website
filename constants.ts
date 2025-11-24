import { Show, Release } from "./types";

export const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/2DrownTheSun/?eid=ARC8VTMTbZ9jsq2RtEkA9kF3Bz06oE6Z2lvKJlsJpnwLeAhAgR24u1IXBEzqfW4R3T9cNlGXtIjr9RRZ",
    note: "Follow on Facebook",
    svgPath: "M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/drown_the_sun/?hl=de",
    note: "@drown_the_sun",
    svgPath: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z"
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/2yFB2TDFWStvT5nYj8g8Hc?si=ODHYkTPrTeCUb0Scrimzwg",
    note: "Follow + Stream",
    svgPath: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCLhT0cRde-LP89Va_jON7fA",
    note: "Visuals and live cuts",
    svgPath: "M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z",
  },
];

export const UPCOMING_SHOWS: Show[] = [
  {
    id: "1",
    date: "JUN 28, 2024",
    venue: "The Viper Room",
    location: "Los Angeles, CA",
    isSoldOut: false,
  },
  {
    id: "2",
    date: "JUL 15, 2024",
    venue: "Saint Vitus Bar",
    location: "Brooklyn, NY",
    isSoldOut: false,
  },
  {
    id: "3",
    date: "AUG 02, 2024",
    venue: "The Metro",
    location: "Chicago, IL",
    isSoldOut: true,
  },
];

export const TOUR_PAGE_SHOWS: Show[] = [
  {
    id: "t1",
    date: "JUNE 29, 2024",
    venue: "The Underworld",
    location: "Camden, London, UK",
    isSoldOut: false,
  },
  {
    id: "t2",
    date: "JULY 15, 2024",
    venue: "Hellfest Open Air",
    location: "Clisson, France",
    isSoldOut: false,
  },
  {
    id: "t3",
    date: "AUGUST 02, 2024",
    venue: "Wacken Open Air",
    location: "Wacken, Germany",
    isSoldOut: false,
  },
];

export const PAST_SHOWS: Show[] = [
  {
    id: "p1",
    date: "MAY 10, 2024",
    venue: "Whisky a Go Go",
    location: "Los Angeles, CA, USA",
    isSoldOut: true,
  },
  {
    id: "p2",
    date: "APRIL 21, 2024",
    venue: "Cassiopeia",
    location: "Berlin, Germany",
    isSoldOut: true,
  },
];

export const RELEASES: Release[] = [
  {
    id: "r1",
    title: "Resistance",
    type: "Single",
    year: "2024",
    coverUrl: "/dts-assets/covers/resistance-album-cover.jpg",
    spotifyUrl: "https://open.spotify.com/embed/album/5joAXLYfMgiWEIld76q0Uo?utm_source=generator&theme=0",
  },
  {
    id: "r2",
    title: "Despondent",
    type: "Single",
    year: "2023",
    coverUrl: "/dts-assets/covers/despondent-album-cover.jpg",
    spotifyUrl: "https://open.spotify.com/embed/album/7x099ImxKG40svK3fel51s?utm_source=generator&theme=0",
  },
  {
    id: "r3",
    title: "Deficency",
    type: "Single",
    year: "2022",
    coverUrl: "/dts-assets/covers/deficency-album-cover.jpg",
    spotifyUrl: "https://open.spotify.com/embed/album/6Cx8P3jHRhebZ0KYT7bjWG?utm_source=generator&theme=0",
  },
   {
    id: "r4",
    title: "Confidence",
    type: "Single",
    year: "2021",
    coverUrl: "/dts-assets/covers/confidence-album-cover.jpg",
    spotifyUrl: "https://open.spotify.com/embed/album/76MxH9gbDoDwjJKZr722Ue?utm_source=generator&theme=0",
  },

];
