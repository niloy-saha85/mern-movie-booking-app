import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo from "../assets/loader.png";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PopularSlider = ({ movies }) => {
  if (!movies || movies.length === 0) return null;

  const CustomLeftArrow = ({ onClick }) => (
    <a
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className='carousel-control-prev'
      role='button'
      href='!#'
    >
      <span aria-hidden='true' className='carousel-control-prev-icon'></span>
      <span className='visually-hidden'>Previous</span>
    </a>
  );
  const CustomRightArrow = ({ onClick }) => (
    <a
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className='carousel-control-next'
      role='button'
      href='!#'
    >
      <span aria-hidden='true' className='carousel-control-next-icon'></span>
      <span className='visually-hidden'>Next</span>
    </a>
  );

  return (
    <Carousel
      responsive={responsive}
      // infinite
      keyBoardControl
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
    >
      {movies.map((movie) => {
        return (
          <div
            className='d-flex flex-row justify-content-center'
            key={movie.id}
          >
            <img
              className='popular-slider-img'
              src={`${process.env.REACT_APP_TMDB_IMAGE_BASE}w300/${movie.poster_path}`}
              alt={movie.title}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = logo;
                currentTarget.style =
                  "height: 100%; padding-bottom: 182px; padding-top: 200px; padding-left: 104px; width: fit-content;";
              }}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default PopularSlider;
