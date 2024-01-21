import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  Container,
  CssBaseline,
  Paper,
} from "@mui/material";
import MovieSearch from "./Components/MovieSearch";
import MovieList from "./Components/MovieList";
import { useFetchMovies } from "./Utils/useFetchMovies";
import "./App.css";

// Dark theme configuration for the app
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const { data: movies, isLoading, error, setUrl } = useFetchMovies();
  const [searchQuery, setSearchQuery] = useState("");

  const handleMovieSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
    setUrl(`https://api.movies.dcts.se/rpc/movies_search?q=${searchQuery}`);
  };

  const renderStatusMessage = () => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return null;
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main">
        <CssBaseline />
        <Paper elevation={3} className="mainContainer">
          <MovieSearch onSearch={handleMovieSearch} />
          {renderStatusMessage()}
          {movies.length === 0 && searchQuery && <p>No movies found</p>}
          <MovieList movies={movies} />
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
