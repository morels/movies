import React, { useState } from "react";
import { lazy } from "hitchcock";
import { MovieListPage } from "./components/MovieListPage";
import "./global.css";

const MoviePage = lazy(
  () => import("./components/MoviePage").then((module) => ({ default: module.MoviePage })),
  "MoviePage",
);

const App = () => {
  const [currentId, setCurrentId] = useState<string | null>(null);
  const deferredCurrentId = React.useDeferredValue(currentId);

  const handleMovieClick = (id: string) => {
    setCurrentId(id);
  };

  const handleBackClick = () => {
    setCurrentId(null);
  };

  // In this example, there is no point in using `isStale` as a flag as it was used in https://beta.reactjs.org/reference/react/useDeferredValue
  const showDetail = deferredCurrentId !== null && currentId === deferredCurrentId;

  const renderList = (loadingId: string | null) => (
    <MovieListPage onMovieClick={handleMovieClick} loadingId={loadingId} />
  );

  const renderDetail = (id:string) => (
    <>
      <button
        type="button"
        className="App-back"
        onClick={handleBackClick}
      >
        👈
      </button>
      <MoviePage id={id} />
    </>
  );

  return (
    <div className="App">
      {showDetail
        ? renderDetail(deferredCurrentId)
        : renderList(currentId)}
    </div>
  );
};

export default App;
