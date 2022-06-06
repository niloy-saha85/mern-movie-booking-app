import React, { Fragment, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MovieItem from "../components/MovieItem";
import Paging from "../components/Paging";
import { latestItems } from "../store/reducers/latest";
import { LOAD_LATEST } from "../store/types";

const LatestList = () => {
  const dispatch = useDispatch();
  const items = useSelector(latestItems);
  const { page, totalResults } = useSelector((state) => state.latest);
  const navigate = useNavigate();
  const params = useParams();
  console.log(items);

  const onPageChange = (page) => {
    console.log(page);
    navigate({
      pathname: `page/${page}`,
    });
  };

  useEffect(() => {
    const page = params.id || 1;
    dispatch({ type: LOAD_LATEST, payload: page });
  }, [dispatch, params.id]);

  return (
    <Fragment>
        <Header />
      <Container>
        <Row className='mt-3'>
          {items &&
            items.map((item) => {
              return (
                <Col xs={12} md={3} key={item.id}>
                  <MovieItem item={item} />
                </Col>
              );
            })}
        </Row>
        <Row>
          <Paging
            itemsCount={totalResults}
            itemsPerPage={20}
            currentPage={page}
            setCurrentPage={onPageChange}
            alwaysShown={false}
          />
        </Row>
      </Container>
        <Footer />
    </Fragment>
  );
};

export default LatestList;
