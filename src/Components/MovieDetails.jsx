import React from "react";
import { Box, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { formatRuntime } from "../Utils";


const MovieDetails = ({ movie }) => {
  return (
    <Box className="drawerContainer">
      <Box className="drawerContent">
        <Box sx={{ width: "100%" }}>
          <CardContent>
            <Typography component="div" variant="h5">
              {movie.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {movie.overview}
            </Typography>
            <Typography>Relased: {movie.released}</Typography>
            <Box className="genresContainer">
              {movie.genres.map((genre, index) => (
                <Chip
                  key={index}
                  label={genre}
                  variant="outlined"
                  size="small"
                />
              ))}
            </Box>

            <Box variant="body2" className="movieRuntimeContainer">
              <Box className="runtimeIcon">
                <ScheduleIcon />
              </Box>
              <Box className="movieRuntime">
                {formatRuntime(movie.runtime)}
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Box>
      <Box className="drawerPoster">
        <CardMedia component="img" onClick={() => window.open(movie.poster, "_blank")} image={movie.poster} alt={movie.title} />
      </Box>
    </Box>
  );
};

export default MovieDetails;
