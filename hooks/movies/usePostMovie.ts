import { useMutation } from "react-query";
import { postMovie } from "../../sdk/movies/postMovie";

export const usePostMovie = () => {
  return useMutation(postMovie);
};
