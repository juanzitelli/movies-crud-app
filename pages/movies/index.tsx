import { Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { MovieList } from "../../components/modules/movies/MovieList";
import NextLink from "next/link";

const MoviesPage = () => {
  return (
    <>
      <Stack direction="column" gap={2}>
        <Typography variant="h2" sx={{ fontWeight: 700 }}>
          Movies 🎬🍿
        </Typography>
        <Divider />
        <NextLink href="/movies/new">
          <Button variant="contained">Create new movie</Button>
        </NextLink>
        <MovieList />
      </Stack>
    </>
  );
};

export default MoviesPage;
