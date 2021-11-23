import { useQuery } from "react-query";
import { getMovie } from "../../sdk/movies/getMovie";
import { MovieId } from "../../types";

export const useMovie = ({ movieId }: { movieId: MovieId }) =>
  useQuery({
    queryHash: `movie-${movieId}`,
    queryFn: () => getMovie({ movieId }),
    cacheTime: 1,
  });
