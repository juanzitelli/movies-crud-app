import {
  Alert,
  CircularProgress,
  Divider,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { usePostMovie } from "../../../../hooks/movies/usePostMovie";
import { MovieWithoutId } from "../../../../types";
import { BaseMovieForm, CancelButton, SubmitButton } from "./BaseMovieForm";

export const AddMovieForm = () => {
  const postMovieMutation = usePostMovie();

  const onAddSubmitHandler = (movie: MovieWithoutId) => {
    postMovieMutation.mutate({ movie });
  };

  const defaultAddMovieValues = {
    adults: false,
    name: "",
    overview: "",
    director: "",
    genres: [],
    release_date: new Date(),
  };

  return (
    <>
      <Typography variant="h3">Add a new movie</Typography>
      <Divider sx={{ marginBottom: "1rem" }} />
      <BaseMovieForm
        defaultValues={defaultAddMovieValues}
        onSubmit={onAddSubmitHandler}
      >
        <Stack direction="row" gap={2}>
          {postMovieMutation.isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <SubmitButton>Confirm changes</SubmitButton>
              <CancelButton>Cancel</CancelButton>
            </>
          )}
          <Snackbar open={postMovieMutation.isSuccess} autoHideDuration={3000}>
            <Alert severity="success">
              Wohoo! The movie has been added correctly
            </Alert>
          </Snackbar>
          <Snackbar open={postMovieMutation.isError} autoHideDuration={3000}>
            <Alert severity="error">
              Something went wrong trying to create the movie, please review
              your input and try again.
            </Alert>
          </Snackbar>
        </Stack>
      </BaseMovieForm>
    </>
  );
};
