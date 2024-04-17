import React from "react";
import "./scss/index.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import data from './data/landing-page.json'

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Home homePage={data.homePage} />
    </div>
  );
};

export default App;
