import React, { Fragment, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LatestSlider from "../components/LatestSlider";
import PopularSlider from "../components/PopularSlider";
import { latestItems } from "../store/reducers/latest";
import { LOAD_LATEST } from "../store/types";

const Home = () => {
  const dispatch = useDispatch();
  const latestMovies = useSelector(latestItems);
  useEffect(() => {
    dispatch({ type: LOAD_LATEST, payload: 1 });
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
              <h4 className='text-muted'>Recommended Movies</h4>
              <Link to={"/recommended-movies"}>{"See All >"}</Link>
            </div>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col>
            <PopularSlider />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Home;
