import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return <Typography>No movies found.</Typography>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <Card key={movie.id} variant="outlined" style={{ marginBottom: '16px', display: 'flex' }}>
          {/* Movie poster */}
          <CardMedia
            component="img"
            height="140"
            image={movie.poster} // Replace with the actual poster URL from the API
            alt={movie.title}
            style={{ minWidth: '140px' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            {/* Movie Details */}
            <CardContent style={{ flex: '1 0 auto' }}>
              <Typography variant="h5" component="div">
                {movie.title}
              </Typography>
              <Typography color="text.secondary">{movie.release_date}</Typography>
              <Typography>{movie.overview}</Typography>
              <Typography>Genres: {movie.genres.join(', ')}</Typography>
              <Typography>Duration: {movie.duration} minutes</Typography>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MovieList;
