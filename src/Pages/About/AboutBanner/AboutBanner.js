import React from "react";
import "./../About.css";

const AboutBanner = () => {
  return (
    <div className="AboutBanner">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb-text text-center pt-140 pb-90">
              <h1>About Us</h1>
            </div>
            <div class="text-center">
              <ul class="breadcrumb-menu">
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
