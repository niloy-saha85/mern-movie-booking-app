import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faThumbsUp, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";
import logo from '../assets/loader.png'

const MovieItem = ({ item }) => {
  const format = (num) => {
    return Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(num);
  };

  return (
    <Card className='bg-dark text-white mb-4' style={{minHeight: '30.8rem'}}>
      <Card.Img
        src={`${process.env.REACT_APP_TMDB_IMAGE_BASE}w780/${item.poster_path}`}
        alt='Card image'
        style={{ height: "100%" }}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src=logo;
          currentTarget.style = 'height: 100%; padding-bottom: 182px; padding-top: 200px; padding-left: 104px; width: fit-content;'
        }}
      />
      <Card.ImgOverlay className='mb-4'></Card.ImgOverlay>
      <Card.Footer className='d-flex flex-row justify-content-around'>
        {/* <Card.Title className=''>{item.title}</Card.Title> */}
        <div>
          <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />{" "}
          {format(item.popularity)}
        </div>
        <div>
          <FontAwesomeIcon icon={faThumbsUp} style={{ color: "blue" }} /> {format(item.vote_count)}
        </div>
        <div>
        <FontAwesomeIcon icon={faCalendarAlt} /> {item.release_date}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default MovieItem;
