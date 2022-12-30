import React, { useRef } from "react";
import { useHover } from "ahooks";
import { movieListJSON } from "../../api";
import style from "./movie-list-page.module.css";
import { Spinner } from "../Spinner";

type Props = {
  onMovieClick: (_:string) => void;
  loadingId?: string | null;
};

type MovieCardProps = {
  id: string;
  icon: string;
  title: string;
  rating: number;
  gross: string;
  onClick: Props["onMovieClick"];
  isLoading: boolean;
};

const MovieCard = ({
  id, icon, title, rating, gross, onClick, isLoading,
}:MovieCardProps) => {
  const ref = useRef(null);
  const isHovering = useHover(ref);

  return (
    <div
      className={style.MovieCard}
      onClick={() => onClick(id)}
      onKeyDown={(event) => {
        if (event.code === "Enter" || event.code === "Space") { // Enter
          onClick(id);
        }
      }}
      role="button"
      tabIndex={0}
      ref={ref}
    >
      <div className={style.Layout}>
        <div className={style.Icon}>{icon}</div>
        <div className={style.LayoutText}>
          <div className={style.Title}>{title}</div>
          <div className={style.Subtitle}>
            <span>{`${rating}%`}</span>
            <span>{gross}</span>
          </div>
        </div>
        {isHovering
          ? <div className={style.Icon}>👉</div>
          : isLoading && <Spinner className={style.Icon} />}
      </div>
    </div>
  );
};

const MovieListPage = ({ onMovieClick, loadingId }:Props) => {
  const movies = movieListJSON;
  return (
    <>
      <h1 className={style.Title}>Top Box Office 🍿</h1>
      <div className={style.MovieListPage}>
        {movies.map(({
          id, title, gross, rating,
        }) => (
          <MovieCard
            id={id}
            key={id}
            icon={rating > 70 ? "🍅" : "🤢"}
            title={title}
            rating={rating}
            gross={gross}
            onClick={onMovieClick}
            isLoading={loadingId === id}
          />
        ))}
      </div>
    </>
  );
};

export { MovieListPage };
