import React from "react";
import style from "./spinner.module.css";

type Props = {
  className?: string;
  size?: "large" | "medium";
};

const Spinner = ({ className, size = "medium" }: Props) => (
  <div className={`${style.Spinner} ${className}`} data-size={size}>🌀</div>
);

export { Spinner };
