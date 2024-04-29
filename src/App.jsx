import React from "react";
import "./scss/index.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import data from "./data/landing-page.json";
import Category from "./components/Category";
import Footer from "./components/Footer";
import ExploreProjects from "./components/ExploreProjects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Data from "./pages/Data";

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home homePage={data.homePage} />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/data" element={<Data />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
