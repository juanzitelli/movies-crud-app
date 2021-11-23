import { useQuery } from "react-query";
import { getMovies } from "../../sdk/movies/getMovies";

export const useMovies = () => useQuery("movies", getMovies);
