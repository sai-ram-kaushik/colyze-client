import React from "react";

const Home = ({ homePage }) => {
  const { title, content, buttonTitle, image } = homePage;
  return (
    <section className="home">
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>

      <div className="container">
        <div className="content">
          <h3 className="title">Innovate Your <span>Ideas</span></h3>
          <p className="sub-content">{content}</p>
          <button>{buttonTitle}</button>
        </div>

        <div className="image-container">
          <div className="image">
            <img src={image} alt="community" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
