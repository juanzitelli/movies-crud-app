import { Alert, Grid, Link, Skeleton } from "@mui/material";
import NextLink from "next/link";
import React from "react";
import { useMovies } from "../../../hooks/movies/useMovies";
import { Movie } from "../../../types";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
  const { data: movies, error, isLoading } = useMovies();

  if (error) {
    return <Alert severity="error">Error trying to fetch movies</Alert>;
  }

  if (isLoading) {
    return (
      <Grid>
        {Array.from([1, 2, 3, 4]).map((n) => {
          return (
            <Grid key={n} item xs={2} sm={4} md={4}>
              <Skeleton width={345} height={200} />
            </Grid>
          );
        })}
      </Grid>
    );
  }

  if (movies.length === 0) {
    return (
      <Alert severity="info">
        Looks like there are no movies available! Try{" "}
        <NextLink href="/movies/new">
          <Link>creating a new one</Link>
        </NextLink>
        !
      </Alert>
    );
  }

  return (
    <>
      <Grid container spacing={3}>
        {movies?.map((movie: Movie) => {
          return <MovieCard key={movie._id} movie={movie} />;
        })}
      </Grid>
    </>
  );
};
