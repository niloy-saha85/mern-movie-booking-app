import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import './assets/App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Container fluid>
        <h1>Hello There</h1>
      </Container>
    </Fragment>
  );
}

export default App;
