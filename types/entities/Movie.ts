export interface Genre {
  name: string;
}

export interface Award {
  name: string;
  year: number;
}

export interface Movie {
  name: string;
  overview: string;
  release_date: Date;
  director: string;
  genres: Genre[];
  awards: Award[];
  adults: boolean;
}
