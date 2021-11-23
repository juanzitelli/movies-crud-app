import { useMutation } from "react-query";
import { editMovie } from "../../sdk/movies/editMovie";
import { MovieId } from "../../types";

export const useEditMovie = ({ movieId }: { movieId: MovieId }) => {
  const mutationKey = `edit-movie-${movieId}`;

  return useMutation(editMovie, {
    mutationKey,
  });
};
