import React from "react";
import { Typography, Box } from "@mui/material";
import MovieCard from "./MovieCard";
const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return <Typography>No movies found.</Typography>;
  }

  return (
    <Box className="movieList">
      {movies.slice(0, 20).map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          variant="outlined"
        />
      ))}
    </Box>
  );
};

export default MovieList;
