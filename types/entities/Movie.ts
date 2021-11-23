export type Movie = {
  _id: string;
  name: string;
  overview: string;
  release_date: Date | string;
  director: string;
  genres: string[];
  adults: boolean;
  __v?: number;
};

export type MovieWithoutId = Omit<Movie, "_id">;

export type MovieId = string | string[] | undefined;
