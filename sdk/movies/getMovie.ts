import axios from "axios";
import { MovieId } from "../../types";

const BASE_URL = `${process.env.NEXT_PUBLIC_MOVIES_API_URL}/movies`;

export const getMovie = async ({ movieId }: { movieId: MovieId }) => {
  const url = `${BASE_URL}/${movieId}`;
  const {
    data: {
      payload: { item: movie },
    },
  } = await axios.get(url);

  return movie;
};
