import * as React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MovieDetails from "./MovieDetails";
import { formatRuntime } from "../Utils/utils";

export default function MovieCard({ movie }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleCardClick = () => {
    setDrawerOpen(true);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  return (
    <Box>
      <CardActionArea>
        <Card className="movieCard" onClick={handleCardClick}>
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
                {movie.overview.split(" ").slice(0, 15).join(" ") + "..."}
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
                <Box>
                  <ScheduleIcon />
                </Box>
                <Box className="movieRuntime">
                  {formatRuntime(movie.runtime)}
                </Box>
              </Box>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={movie.poster}
            alt={movie.title}
          />
        </Card>
      </CardActionArea>
      <SwipeableDrawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <MovieDetails movie={{ ...movie }} />
        </Box>
      </SwipeableDrawer>
    </Box>
  );
}
