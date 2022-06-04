import React from "react";
import { Carousel } from "react-bootstrap";

const LatestSlider = ({ movies }) => {
  console.log("in latest slider", movies);
  return (
    <Carousel className='latest-carousel'>
      {movies &&
        movies.length &&
        movies.map((movie) => {
          return (
            <Carousel.Item key={movie.id}>
              <img
                className='d-block w-100 h-25'
                src={`${process.env.REACT_APP_TMDB_IMAGE_BASE}w1280/${movie.backdrop_path}`}
                alt={movie.title}
              />
              <Carousel.Caption>
                <h3>{movie.title}</h3>
                <p>
                  {movie.overview}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
};

export default LatestSlider;
