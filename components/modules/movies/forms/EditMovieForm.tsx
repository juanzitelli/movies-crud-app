import { Alert, CircularProgress, Snackbar, Stack } from "@mui/material";
import React from "react";
import { Movie } from "../../../../types";
import { useEditMovie } from "./../../../../hooks/movies/useEditMovie";
import { BaseMovieForm, CancelButton, SubmitButton } from "./BaseMovieForm";
export const EditMovieForm = ({ movie }: { movie: Movie }) => {
  const editMovieMutation = useEditMovie({ movieId: movie._id });

  const onEditSubmitHandler = ({ __v, ...movie }: Movie) => {
    editMovieMutation.mutate({
      movie,
    });
  };

  return (
    <>
      <BaseMovieForm
        defaultValues={{ ...movie }}
        onSubmit={onEditSubmitHandler}
      >
        <Stack direction="row" gap={2}>
          {editMovieMutation.isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <SubmitButton>Confirm changes</SubmitButton>
              <CancelButton>Cancel</CancelButton>
            </>
          )}
          <Snackbar open={editMovieMutation.isSuccess} autoHideDuration={3000}>
            <Alert severity="success">
              Wohoo! The movie has been updated correctly
            </Alert>
          </Snackbar>
          <Snackbar open={editMovieMutation.isError} autoHideDuration={3000}>
            <Alert severity="error">
              Something went wrong trying to update the movie, please review
              your input and try again.
            </Alert>
          </Snackbar>
        </Stack>
      </BaseMovieForm>
    </>
  );
};
