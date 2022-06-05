import { Fragment } from "react";
import Header from "./components/Header";
import "./assets/App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import LatestList from "./pages/LatestList";
import UpcomingList from "./pages/UpcomingList";
import NearbyEvents from "./pages/NearbyEvents";
import PageLoading from "./components/PageLoading";
import { useSelector } from "react-redux";
import { latestLoading } from "./store/reducers/latest";
import MovieDetail from "./pages/MovieDetail";
import Home from "./pages/Home";
import { selectPopularLoading } from "./store/reducers/popular";
import Footer from "./components/Footer";

function App() {
  const isLatestLoading = useSelector(latestLoading);
  const isPopularLoading = useSelector(selectPopularLoading);

  return (
    <Fragment>
      <Header />
      {(isLatestLoading || isPopularLoading) && <PageLoading />}
      <Routes>
        <Route path='/' element={<Home />} />
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
        <Route path='*' element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
