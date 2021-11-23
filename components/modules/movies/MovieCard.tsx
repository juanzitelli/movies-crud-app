import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import React from "react";
import { useDeleteMovie } from "../../../hooks/movies/useDeleteMovie";
import { Movie, MovieId } from "../../../types";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const deleteMovieMutation = useDeleteMovie();

  const onDeleteMovieClickHandler = ({ movieId }: { movieId: MovieId }) => {
    if (
      window.confirm(
        "Are you sure you want to delete this movie? This action is IRREVERSIBLE."
      )
    ) {
      deleteMovieMutation.mutate({ movieId });
    }
  };

  return (
    <Grid item>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.name}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.primary">
            {movie.overview}
          </Typography>
        </CardContent>
        <CardActions>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Button variant="outlined" color="primary">
              <NextLink href={`/movies/edit/${movie._id}`}>
                <a>
                  <Link>Edit movie</Link>
                </a>
              </NextLink>
            </Button>

            <Button
              onClick={() => {
                onDeleteMovieClickHandler({ movieId: movie._id });
              }}
              variant="outlined"
              color="error"
            >
              <Typography variant="button">Delete movie</Typography>
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};
