import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import MovieItem from "../components/MovieItem";
import Paging from "../components/Paging";
import { selectUpcomingItems } from "../store/reducers/upcoming";
import { LOAD_UPCOMING } from "../store/types";

const UpcomingList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectUpcomingItems);
  const { page, totalResults } = useSelector((state) => state.upcoming);
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
    dispatch({ type: LOAD_UPCOMING, payload: page });
  }, [dispatch, params.id]);

  return (
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
  );
};

export default UpcomingList;
