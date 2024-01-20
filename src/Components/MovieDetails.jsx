import React from "react";
// Payload
/*
  {
    "id": "tt0000010",
    "title": "Workers Leaving the Lumière Factory",
    "overview": "Working men and women leave through the main gate of the Lumière factory in Lyon, France. Filmed on 22 March 1895, it is often referred to as the first real motion picture ever made, although Louis Le Prince's 1888 Roundhay Garden Scene pre-dated it by seven years.  Three separate versions of this film exist, which differ from one another in numerous ways. The first version features a carriage drawn by one horse, while in the second version the carriage is drawn by two horses, and there is no carriage at all in the third version. The clothing style is also different between the three versions, demonstrating the different seasons in which each was filmed. This film was made in the 35 mm format with an aspect ratio of 1.33:1, and at a speed of 16 frames per second. At that rate, the 17 meters of film length provided a duration of 46 seconds, holding a total of 800 frames.",
    "poster": "https://assets.movies.skruv.io/c/T/2/s/cT2sefAXgEoICJUCEM6UfxXfuDM.jpg",
    "runtime": 1,
    "popularity": 5.802,
    "genres": ["Documentary"],
    "released": "1895-03-22"
  },
*/
const MovieDetails = ({movie}) => {
  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  );
};

export default MovieDetails;
