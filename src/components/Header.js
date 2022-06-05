import React, { Fragment } from "react";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <Fragment>
      <Navbar bg='dark' variant='dark' expand='lg' sticky="top">
        <Container>
          <Navbar.Brand as={Link} to='/' className='custom-brand'>
            <img
              style={{ width: "185px", height: "37px" }}
              src={logo}
              className='d-inline-block align-top'
              alt='React Bootstrap logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={NavLink} to='/latest-movies' exact='true'>
                Latest Movies
              </Nav.Link>
              <Nav.Link as={NavLink} to='/upcoming-movies'>
                Upcoming Movies
              </Nav.Link>
              <Nav.Link as={NavLink} to='/nearby-events'>
                Nearby Events
              </Nav.Link>
            </Nav>
            <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='Search Movies'
                className='me-2'
                aria-label='Search'
              />
              {/* <Button variant='outline-success'>Search</Button> */}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
