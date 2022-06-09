import { faHeart, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/loader.png";
import { format, timeConvert } from "../helpers/common";

const DetailsTopBanner = ({ details, isBookingPage = false }) => {
  // console.log('in details', details, Object.keys(details).length);
  if (Object.keys(details).length === 0) return null;

  return (
    <Card className='bg-dark text-white' style={{ height: "100%" }}>
      <Card.Img
        src={`${process.env.REACT_APP_TMDB_IMAGE_BASE}w780/${details.backdrop_path}`}
        alt={details.title}
        className='details-backdrop'
        onLoad={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          // currentTarget.src = logo;
          // currentTarget.style = "height: 100%; ";
        }}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = logo;
          currentTarget.style =
            "height: 100%; padding-bottom: 182px; padding-top: 200px; padding-left: 104px; width: fit-content; margin: 0 auto;";
        }}
      />
      <Card.ImgOverlay>
        <div className='d-flex flex-row justify-content-between'>
          <div className='d-flex flex-column'>
            <h1>{details.title}</h1>
            {/* <Card.Text className='d-none d-lg-block'>
                      {details.overview}
                    </Card.Text> */}
            <div>
              <FontAwesomeIcon
                className='align-middle'
                size='2x'
                icon={faHeart}
                style={{ color: "red" }}
              />{" "}
              <span>{format(details.popularity)}</span>
              <FontAwesomeIcon
                size='2x'
                className='align-middle ms-3'
                icon={faThumbsUp}
                style={{ color: "blue" }}
              />{" "}
              <span>{format(details.vote_count)}</span>
            </div>
            <div>
              <ul>
                <li className='float-start'>{timeConvert(details.runtime)}</li>
                <li className='float-start ms-4'>
                  {details.genres.map((g) => g.name).join(", ")}
                </li>
                <li className='float-start ms-4'>
                  {new Date(details.release_date).getFullYear()}
                </li>
              </ul>
            </div>
            <div className='mt-2'>
              {!isBookingPage && <Button
                variant='danger'
                size='lg'
                as={Link}
                to={`/movie/${details.id}/book`}
              >
                Book Now
              </Button>}
            </div>
          </div>
          <div>
            <Image
              className='d-none d-lg-block'
              src={`${process.env.REACT_APP_TMDB_IMAGE_BASE}w300/${details.poster_path}`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.classList.add("d-none");
              }}
            />
          </div>
        </div>
        {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
      </Card.ImgOverlay>
      {/* <Card.Footer className='d-flex flex-row justify-content-around bg-dark'>

            </Card.Footer> */}
    </Card>
  );
};

export default DetailsTopBanner;
