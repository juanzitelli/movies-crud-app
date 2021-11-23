import axios from "axios";
import { Movie } from "../../types";

const BASE_URL = `${process.env.NEXT_PUBLIC_MOVIES_API_URL}/movies/update`;

export const editMovie = ({
  movie: { _id: movieId, ...movie },
}: {
  movie: Movie;
}) => {
  return axios.put(`${BASE_URL}/${movieId}`, {
    movie,
  });
};
