import axios from "axios";
import { MovieWithoutId } from "../../types";

const URL = `${process.env.NEXT_PUBLIC_MOVIES_API_URL}/movies/create`;

export const postMovie = ({ movie }: { movie: MovieWithoutId }) => {
  return axios.post(URL, {
    movie,
  });
};
