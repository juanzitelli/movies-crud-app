import { Alert, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { EditMovieForm } from "../../../components/modules/movies/forms/EditMovieForm";
import { useMovie } from "../../../hooks/movies/useMovie";

const EditMovie = () => {
  const {
    query: { movieId },
  } = useRouter();

  const { data: movie, error, isLoading } = useMovie({ movieId });

  if (error) {
    return <Alert severity="error">Error trying to fetch movies</Alert>;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <EditMovieForm movie={movie} />
    </>
  );
};

export default EditMovie;
