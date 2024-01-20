import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState, useEffect } from "react";
import { Container, CssBaseline, Paper, Typography } from "@mui/material";
import MovieSearch from "./Components/MovieSearch";
import MovieList from "./Components/MovieList";
import "./App.css";

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

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main">
        <CssBaseline />
        <Paper elevation={3} className="mainContainer">
          <Typography variant="h4" align="center" gutterBottom>
            Movie Search Project
          </Typography>
          <MovieSearch onSearch={searchMovies} />
          <MovieList movies={movies} />
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
