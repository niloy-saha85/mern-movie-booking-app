import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import "./assets/App.css";
import { Route, Routes } from "react-router-dom";
import LatestList from "./pages/LatestList";
import UpcomingList from "./pages/UpcomingList";
import NearbyEvents from "./pages/NearbyEvents";
import PageLoading from "./components/PageLoading";
import { useSelector } from "react-redux";
import { latestLoading } from "./store/reducers/latest";
import MovieDetail from "./pages/MovieDetail";

function App() {
  const isLatestLoading = useSelector(latestLoading);

  return (
    <Fragment>
      <Header />
      <Container>
        {isLatestLoading && <PageLoading />}
        <Routes>
          <Route path='/latest-movies' element={<LatestList />}>
            <Route path='page/:id' element={<LatestList />} />
          </Route>
          <Route path='/upcoming-movies' element={<UpcomingList />}>
            <Route path='page/:id' element={<UpcomingList />} />
          </Route>
          <Route path='/nearby-events' element={<NearbyEvents />}>
            <Route path='page/:id' element={<NearbyEvents />} />
          </Route>
          <Route path='/movie/:id' element={<MovieDetail />} />
        </Routes>
      </Container>
    </Fragment>
  );
}

export default App;
