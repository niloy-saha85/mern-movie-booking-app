import React, { Fragment, useState } from "react";
import { Container, Form, Image, Nav, Navbar } from "react-bootstrap";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import API from "../api";

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  return (
    <Fragment>
      <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
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
              <Nav.Link as={NavLink} to='/popular-movies'>
                Popular Movies
              </Nav.Link>
            </Nav>
            <Form className='d-flex'>
              {/* <FormControl
                type='search'
                placeholder='Search Movies'
                className='me-2'
                aria-label='Search'
              /> */}
              <AsyncTypeahead
                placeholder="Search movies..."
                searchText="Searching..."
                id='movieSearch'
                isLoading={isLoading}
                options={options}
                labelKey={(option) => `${option.title}`}
                onSearch={async (query) => {
                  setIsLoading(true);
                  const {
                    data: { results },
                  } = await API.get(
                    `/search/movie?query=${encodeURIComponent(query)}`
                  );
                  console.log(results.slice(0, 9));
                  setOptions(results);
                  setIsLoading(false);
                }}
                renderMenuItemChildren={(option, props, index) => {
                  return (
                    <Link to={`/movie/${option.id}`} style={{textDecoration: 'none'}}>
                      <div className='h-25 w-25'>
                        <Image
                          thumbnail
                          src={`${process.env.REACT_APP_TMDB_IMAGE_BASE}w92/${option.poster_path}`}
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src=logo;
                            currentTarget.style = 'width: 38px !important; height: 50px; margin: 0px auto !important; object-fit: contain; padding-left: 16px; }'
                          }}
                        />{" "}
                        <span className="text-muted"> {option.title}</span>
                      </div>
                    </Link>
                  );
                }}
                onChange={(selected) => navigate(`/movie/${selected[0].id}`)}
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
