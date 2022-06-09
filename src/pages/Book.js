import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import QRCode from "react-qr-code";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsTopBanner from "../components/DetailsTopBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { selectDetails, selectDetailsLoading } from "../store/reducers/details";
import { LOAD_DETAILS } from "../store/types";

const Book = () => {
  const details = useSelector(selectDetails);
  const detailsLoading = useSelector(selectDetailsLoading);
  const [inputs, setInputs] = useState({ isSubmitted: false });
  const dispatch = useDispatch();
  const params = useParams();
  const isDetailsLoaded = Object.keys(details).length;

  const onInputChange = ({ target: { name, value } }) =>
    setInputs((state) => ({ ...state, [name]: value }));

  const onSubmitForm = (e) => {
    e.preventDefault();
    setInputs((state) => ({ ...state, isSubmitted: true }));
    console.log(inputs);
  };

  console.log(inputs);

  useEffect(() => {
    if (!isDetailsLoaded && !detailsLoading) {
      console.log("calling api for details");
      dispatch({ type: LOAD_DETAILS, payload: params.id });
    }
  }, [details, params.id, dispatch, isDetailsLoaded, detailsLoading]);

  return (
    <Fragment>
      <Header />
      <Container fluid>
        <Row>
          <Col style={{ padding: 0, margin: 0, maxHeight: "500px" }}>
            <DetailsTopBanner details={details} isBookingPage={true} />
          </Col>
        </Row>
        <Container>
          {!inputs.isSubmitted && (
            <Row className='mt-3'>
              <Col xs md>
                <h3>Book Tickets</h3>
              </Col>
              <Col xs={12} md={12}>
                <Form onSubmit={onSubmitForm}>
                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      name='email'
                      type='email'
                      placeholder='Enter email'
                      onChange={onInputChange}
                    />
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formBasicName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      name='name'
                      type='text'
                      placeholder='Enter name'
                      onChange={onInputChange}
                    />
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formNoTickets'>
                    <Form.Label>Number of Tickets</Form.Label>
                    <Form.Select
                      aria-label='Default select'
                      name='tickets'
                      onChange={onInputChange}
                    >
                      <option>-- Select -- </option>
                      <option value='1'>One</option>
                      <option value='2'>Two</option>
                      <option value='3'>Three</option>
                      <option value='4'>Four</option>
                      <option value='5'>Five</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formDate'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      min={new Date().toISOString().slice(0, 10)}
                      name='date'
                      type='date'
                      placeholder='Select date'
                      onChange={onInputChange}
                    />
                  </Form.Group>
                  <Button variant='primary' type='submit'>
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          )}
          {inputs.isSubmitted && (
            <Fragment>
              <Row className="mt-3">
                <Col xs md>
                  <h3>Your Booking Details</h3>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col className="mx-auto">
                  <QRCode value={`${inputs.name}(${inputs.email}) has booked ${inputs.tickets} tickets for ${inputs.date} for the movie "${details.title}"`} />
                </Col>
              </Row>
            </Fragment>
          )}
        </Container>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Book;
