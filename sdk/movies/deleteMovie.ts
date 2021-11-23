import axios from "axios";
import { MovieId } from "../../types";

const BASE_URL = `${process.env.NEXT_PUBLIC_MOVIES_API_URL}/movies/delete`;

export const deleteMovie = ({ movieId }: { movieId: MovieId }) => {
  const url = `${BASE_URL}/${movieId}`;
  return axios.delete(url);
};
