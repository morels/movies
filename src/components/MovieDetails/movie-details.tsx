import React from "react";
import { createResource as createFetcher } from "hitchcock";
import { fetchMovieDetails } from "../../api";
import { MovieMetrics } from "../MovieMetrics";
import { MoviePoster } from "../MoviePoster";
import style from "./movie-details.module.css";

type Props = {
  id: string;
};

const movieDetailsFetcher = createFetcher(
  (id:string) => fetchMovieDetails(id),
  (id:string) => `/movies/${id}/details`,
);

const MovieDetails = ({ id }: Props) => {
  // Despite fetch on render is to be considered a bad practice 😵👎🏻,
  // we are now focusing now on Suspense feature and skip it
  const movie = movieDetailsFetcher.read(id);
  return (
    <div className={style.MovieDetails}>
      <MoviePoster src={movie.poster} />
      <h1 className={style.Title}>{movie.title}</h1>
      <MovieMetrics {...movie} />
    </div>
  );
};

export { MovieDetails };
