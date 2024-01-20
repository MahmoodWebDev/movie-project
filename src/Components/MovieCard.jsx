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
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MovieDetails from "./MovieDetails";

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
              <Typography color="text.secondary">
                {movie.release_date}
              </Typography>
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

              <Typography variant="body2" className="movieRuntime">
                Runtime: {movie.runtime}
              </Typography>
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
          <MovieDetails movie={{ title: movie.title }} />
        </Box>
      </SwipeableDrawer>
    </Box>
  );
}
