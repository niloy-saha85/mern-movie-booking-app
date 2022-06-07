import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/loader.png";

const LatestSlider = ({ movies }) => {
  console.log("in latest slider", movies);
  if (!movies || movies.length === 0) return null;
  return (
    <Carousel className='latest-carousel'>
      {movies &&
        movies.length &&
        movies.map((movie) => {
          return (
            <Carousel.Item key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  className='d-block w-100 h-25'
                  src={`${process.env.REACT_APP_TMDB_IMAGE_BASE}w1280/${movie.backdrop_path}`}
                  alt={movie.title}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = logo;
                    currentTarget.style =
                      "width: 45px; height: 67px; object-fit: contain; ";
                  }}
                />
                <Carousel.Caption>
                  <h3>{movie.title}</h3>
                  <p className='d-none d-lg-block'>{movie.overview}</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
};

export default LatestSlider;
