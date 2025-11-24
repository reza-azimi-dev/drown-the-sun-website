export interface Show {
  id: string;
  date: string;
  venue: string;
  location: string;
  isSoldOut: boolean;
}

export interface Release {
  id: string;
  title: string;
  type: string;
  year: string;
  coverUrl: string;
  spotifyUrl?: string;
}

export interface NavLink {
  label: string;
  path: string;
}
