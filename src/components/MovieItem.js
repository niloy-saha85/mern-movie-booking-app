import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faThumbsUp, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";

const MovieItem = ({ item }) => {
  const format = (num) => {
    return Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(num);
  };

  return (
    <Card className='bg-dark text-white mb-4'>
      <Card.Img
        src={`${process.env.REACT_APP_TMDB_IMAGE_BASE}w780/${item.poster_path}`}
        alt='Card image'
        style={{ height: "100%" }}
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
