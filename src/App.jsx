import React from "react";
import "./scss/index.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import data from "./data/landing-page.json";
import Category from "./components/Category";
import Footer from "./components/Footer";
import ExploreProjects from "./components/ExploreProjects";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Home homePage={data.homePage} />
      <Category category={data.category} />
      <ExploreProjects exploreProjects={data.exploreProjects} />
      <Footer />
    </div>
  );
};

export default App;
