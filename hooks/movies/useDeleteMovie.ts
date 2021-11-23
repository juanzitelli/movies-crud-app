import { QueryClient, useMutation } from "react-query";
import { deleteMovie } from "../../sdk/movies/deleteMovie";

export const useDeleteMovie = () => {
  const queryClient = new QueryClient();
  return useMutation(deleteMovie, {
    onSuccess: () => queryClient.invalidateQueries("movies"),
  });
};
