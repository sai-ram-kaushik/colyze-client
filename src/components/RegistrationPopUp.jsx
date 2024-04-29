import React from "react";
import welcomeImage from "/welcome.svg";
import { IoCloseSharp } from "react-icons/io5";
const RegistrationPopUp = (props) => {
  return props.trigger ? (
    <div className="registrationPopUp">
      <div className="innerPopUp">
        <div className="close-btn" onClick={() => props.setTrigger(false)}>
          <IoCloseSharp size={25} />
        </div>
        <div className="main-container">
          <div className="image-container">
            <img src={welcomeImage} />
          </div>
          <div className="register-container">
            <div className="heading">
              <h3 className="title">REGISTER</h3>
              <p>Please Register To Get Login Credentials</p>
            </div>

            <div className="user-details">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label for="username">Username:</label>
              <input type="text" id="username" name="username" required />

              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label for="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />

              <label for="linkedin">LinkedIn:</label>
              <input type="url" id="linkedin" name="linkedin" required />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default RegistrationPopUp;
