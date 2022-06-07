import { Fragment } from "react";
import "./assets/App.css";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import LatestList from "./pages/LatestList";
import UpcomingList from "./pages/UpcomingList";
import PopularList from "./pages/Popular";
import PageLoading from "./components/PageLoading";
import { useSelector } from "react-redux";
import { latestLoading } from "./store/reducers/latest";
import MovieDetail from "./pages/MovieDetail";
import Home from "./pages/Home";
import { selectPopularLoading } from "./store/reducers/popular";
import { selectUpcomingLoading } from "./store/reducers/upcoming";
import { selectDetailsLoading } from "./store/reducers/details";
import Book from "./pages/Book";

function App() {
  const isLatestLoading = useSelector(latestLoading);
  const isPopularLoading = useSelector(selectPopularLoading);
  const isUpcomingLoading = useSelector(selectUpcomingLoading);
  const isDetailsLoading = useSelector(selectDetailsLoading);

  return (
    <Fragment>
      {(isLatestLoading ||
        isPopularLoading ||
        isUpcomingLoading ||
        isDetailsLoading) && <PageLoading />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/latest-movies' element={<LatestList />}>
          <Route path='page/:id' element={<LatestList />} />
        </Route>
        <Route path='/upcoming-movies' element={<UpcomingList />}>
          <Route path='page/:id' element={<UpcomingList />} />
        </Route>
        <Route path='/popular-movies' element={<PopularList />}>
          <Route path='page/:id' element={<PopularList />} />
        </Route>
        <Route path='/movie/*' element={<Outlet />} >
          <Route path=':id'  element={<MovieDetail />} />
          <Route path=':id/book'  element={<Book />} />
        </Route>
        <Route path='*' element={<Navigate to={"/"} />} />
      </Routes>
    </Fragment>
  );
}

export default App;
