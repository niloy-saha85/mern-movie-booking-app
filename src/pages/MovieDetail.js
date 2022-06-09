import React, { Fragment, useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCredits, selectDetails } from "../store/reducers/details";
import { LOAD_CREDITS, LOAD_DETAILS } from "../store/types";
import logo from "../assets/loader.png";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DetailsTopBanner from "../components/DetailsTopBanner";

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

  if (Object.keys(details).length === 0) return null;

  return (
    <Fragment>
      <Header />
      <Container fluid style={{ margin: 0 }}>
        <Row>
          <Col style={{ padding: 0, margin: 0, maxHeight: "500px" }}>
            <DetailsTopBanner details={details} />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <h3>About the movie</h3>
            <Row>
              <Col>
                <div>
                  <p className="text-muted">{details.overview}</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h3>Cast { credits && credits.cast && `(${credits.cast.length})` }</h3>
            <Row className='d-flex flex-row'>
              {credits &&
                credits.cast &&
                credits.cast.map((c, i) => {
                  // if (i > 11) return null;
                  return (
                    <Col md={2} key={c.id} className='mb-4'>
                      <div
                        style={{
                          width: "185px",
                          height: "278px",
                          borderRadius: "50%",
                          objectFit: "contain",
                          margin: "0 auto",
                          marginBottom: "6px",
                        }}
                      >
                        <Image
                          className='align-middle'
                          // fluid
                          roundedCircle
                          src={`${process.env.REACT_APP_TMDB_IMAGE_BASE}w185/${c.profile_path}`}
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = logo;
                            currentTarget.style =
                              "width: 185px; height: 278px; object-fit: contain; ";
                          }}
                        />
                        <div className='text-truncate text-center text-muted'>
                          {c.name}
                        </div>
                      </div>
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
