import React, { PropsWithChildren } from "react";
import { MovieDetails } from "../MovieDetails";
import { MovieReviews } from "../MovieReviews";
import { Spinner } from "../Spinner";

type Props = {
  id?: string | undefined
};

const Center = ({ children }: PropsWithChildren) => (
  <div style={{ display: "flex", justifyContent: "center" }}>{children}</div>
);

const MoviePage = ({ id }: Props) => (
  <>
    <MovieDetails id={id!} />
    <React.Suspense fallback={(
      <Center>
        <Spinner size="large" />
      </Center>
)}
    >
      <MovieReviews id={id!} />
    </React.Suspense>
  </>
);

export { MoviePage };
