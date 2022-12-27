import React, { PropsWithChildren } from "react";

type Props = {
  title: string;
};

const BaseLayout = ({ title, children }: PropsWithChildren<Props>) => (
  <main>
    <h1>{title}</h1>
    {children}
  </main>
);

export { BaseLayout };
