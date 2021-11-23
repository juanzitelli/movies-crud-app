import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_MOVIES_API_URL}/movies`;

export const getMovies = async () => {
  const {
    data: {
      payload: { list: movies },
    },
  } = await axios.get(URL);

  return movies;
};
