import React from "react";
import { createResource as createFetcher } from "hitchcock";
import { fetchMovieReviews } from "../../api";
import style from "./movie-reviews.module.css";

type Props = {
  id: string;
};

const movieReviewsFetcher = createFetcher(
  (id:string) => fetchMovieReviews(id),
  (id:string) => `/movies/${id}/reviews`,
);

const MovieReviews = ({ id: movieId }:Props) => {
  const reviews = movieReviewsFetcher.read(movieId);
  return (
    <div className={style.MovieReviewList}>
      {/* eslint-disable-next-line max-len */}
      {/* @ts-expect-error Type 'unknown' must have a '[Symbol.iterator]()' method that returns an iterator.ts(2488) */}
      {Object.entries(reviews).map(([id, [{ summary, author }]]) => (
        <div className={style.MovieReview} key={id}>
          <div>🍅</div>
          <div>
            <div className={style.Text}>{summary}</div>
            <div className={style.Author}>{author}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { MovieReviews };
