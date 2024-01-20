import React, { useState, useEffect } from "react";
import { Container, CssBaseline, Paper, Typography } from "@mui/material";
import MovieSearch from "./components/MovieSearch";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchDefaultMovies();
  }, []);

  const fetchDefaultMovies = async () => {
    try {
      const response = await fetch("https://api.movies.dcts.se/movies");
      const data = await response.json();
      setMovies(data || []);
    } catch (error) {
      console.error("Error fetching default movies:", error.message);
    }
  };

  const searchMovies = async (query) => {
    try {
      const response = await fetch(
        `https://api.movies.dcts.se/rpc/movies_search?q=${query}`
      );
      const data = await response.json();
      setMovies(data || []);
    } catch (error) {
      console.error("Error fetching movies:", error.message);
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Movie Search Project
        </Typography>
        <MovieSearch onSearch={searchMovies} />
        <Typography variant="h5" style={{ margin: "20px 0" }}>
          Movie List
        </Typography>
        <MovieList movies={movies} />
      </Paper>
    </Container>
  );
};

export default App;
