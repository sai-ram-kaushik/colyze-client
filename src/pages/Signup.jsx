import React from "react";
import login from "/login.svg";
const Signup = () => {
  return (
    <div className="signup">
      <div className="signup-container">
        <div className="image-container">
          <img src={login} />
        </div>
        <div className="info-container">
          <div className="heading">
            <h3>Sign Up</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
