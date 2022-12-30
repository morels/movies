import React, { PropsWithChildren } from "react";
import style from "./movie-metrics.module.css";

type Props = {
  audience: string;
  rating: string;
  consensus: string;
};

type LabelledMetricProps = {
  title: string;
};

const LabelledMetric = ({ title, children }: PropsWithChildren<LabelledMetricProps>) => (
  <div className={style.MetricContainer}>
    <p className={style.Label}>{title}</p>
    {children}
  </div>
);

const MovieMetrics = ({ audience, rating, consensus }: Props) => (
  <>
    <div className={style.Inline}>
      <LabelledMetric title="Tomatometer">
        <div className={style.Wrapper}>
          <div className={style.Icon}>🍅</div>
          <p className={style.Rating}>{`${rating}%`}</p>
        </div>
      </LabelledMetric>
      <LabelledMetric title="Audience">
        <div className={style.Wrapper}>
          <div className={style.Icon}>🍿</div>
          <p className={style.Rating}>{`${audience}%`}</p>
        </div>
      </LabelledMetric>
    </div>
    <LabelledMetric title="Critics consensus">
      <p className={style.Text}>{consensus}</p>
    </LabelledMetric>
  </>
);

export { MovieMetrics };
