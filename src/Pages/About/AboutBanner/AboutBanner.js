import React from "react";
import "./../About.css";

const AboutBanner = () => {
  return (
    <div className="AboutBanner">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb-text text-center pt-140 pb-90">
              <h1>About Us</h1>
            </div>
            <div className="text-center">
              <ul className="breadcrumb-menu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-menu22">
                  <span>About Us</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
