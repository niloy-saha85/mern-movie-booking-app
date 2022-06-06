import React, { Fragment, useEffect } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCredits, selectDetails } from "../store/reducers/details";
import { LOAD_CREDITS, LOAD_DETAILS } from "../store/types";
// import Image from "react-bootstrap/Image";
import logo from "../assets/loader.png";
import { faHeart, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { format, timeConvert } from "../helpers/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MovieDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);
  const credits = useSelector(selectCredits);
  console.log(details, credits);

  useEffect(() => {
    console.log("in details page, ", params.id);
    dispatch({ type: LOAD_DETAILS, payload: params.id });
    dispatch({ type: LOAD_CREDITS, payload: params.id });
  }, [dispatch, params.id]);

  if (!Object.keys(details).length) return null;

  return (
    <Fragment>
      <Header />
      <Container fluid style={{ margin: 0 }}>
        <Row>
          <Col style={{ padding: 0, margin: 0, maxHeight: "500px" }}>
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
                    <Card.Text className="d-none d-lg-block">{details.overview}</Card.Text>
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
                        <li className='float-start'>
                          {timeConvert(details.runtime)}
                        </li>
                        <li className='float-start ms-4'>
                          {details.genres.map((g) => g.name).join(", ")}
                        </li>
                        <li className='float-start ms-4'>
                          {new Date(details.release_date).getFullYear()}
                        </li>
                      </ul>
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
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h3>Cast</h3>
            <Row className='d-flex flex-row'>
              {credits &&
                credits.cast &&
                credits.cast.map((c, i) => {
                  if (i > 11) return null;
                  return (
                    <Col
                      className=''
                      key={c.id}
                    >
                      <Image
                       className="align-middle"
                       fluid
                       roundedCircle
                        src={`${process.env.REACT_APP_TMDB_IMAGE_BASE}w45/${c.profile_path}`}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src = logo;
                          currentTarget.style = "width: 45px; height: 67px; object-fit: contain; ";
                        }}
                      />
                      <div>{c.name}</div>
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default MovieDetail;
