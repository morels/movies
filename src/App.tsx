import React from "react";
import "./global.css";
import { BaseLayout } from "./components/BaseLayout";

function App() {
  return (
    <>
      <header />
      <BaseLayout title="Welcome to React App thats build without CRA">
        {/* eslint-disable-next-line react/button-has-type */}
        <button>Danger!</button>
      </BaseLayout>
      <footer />
    </>
  );
}

export default App;
