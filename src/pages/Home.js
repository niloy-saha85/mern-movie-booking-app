import React, { Fragment, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LatestSlider from "../components/LatestSlider";
import PopularSlider from "../components/PopularSlider";
import { latestItems } from "../store/reducers/latest";
import { selectPopularItems } from "../store/reducers/popular";
import { LOAD_LATEST, LOAD_POPULAR } from "../store/types";

const Home = () => {
  const dispatch = useDispatch();
  const latestMovies = useSelector(latestItems);
  const popularMovies = useSelector(selectPopularItems);

  useEffect(() => {
    dispatch({ type: LOAD_LATEST, payload: 1 });
    dispatch({ type: LOAD_POPULAR, payload: 1 });
  }, [dispatch]);

  return (
    <Fragment>
      <Container fluid>
        <Row className='mt-2'>
          <Col xs={12} md={12}>
            <LatestSlider movies={latestMovies} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={12} className='mt-2'>
            <div className='d-flex flex-row justify-content-between'>
              <h4 className='ms-3'>Popular Movies</h4>
              <Link to={"/popular-movies"} className='me-3'>{"See All >"}</Link>
            </div>
          </Col>
        </Row>
        <Row className='mb-2'>
          <Col>
            <PopularSlider movies={popularMovies} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Home;
