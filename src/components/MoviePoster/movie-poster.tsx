import React from "react";
import { createResource as createFetcher } from "hitchcock";
import style from "./movie-poster.module.css";

const imageFetcher = createFetcher(
  (src:string) => new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(src);
    image.src = src;
  }),
  // slicing range is taken arbitrarily after having evaluated incoming JSON data
  (src:string) => `load poster ${src.slice(-30, -20)}`,
);

type Props = {
  src: string;
};

type ImgProps = React.ComponentPropsWithoutRef<"img">;

const Img = ({ alt, src, ...props }: ImgProps) => (
  <img src={imageFetcher.read(src)} alt={alt} {...props} />
);

const MoviePoster = ({ src }: Props) => (
  <div className={style.MoviePoster}>
    <Img src={src} className={style.Image} alt="poster" />
  </div>
);

export { MoviePoster };
