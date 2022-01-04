import React from "react";
import "./../ServicesDetails.css";
const ServicesDetailsBanner = () => {
  return (
    <div className="ServicesDetailsBanner">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb-text text-center pt-140 pb-90">
              <h1> Service Details </h1>
            </div>
            <div className="text-center">
              <ul className="breadcrumb-menu">
                <li>
                  <a href="https://shtheme.org/demosd/roofline/">Home </a>
                </li>
                <li className="breadcrumb-menu22">
                  <span>Service Details </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetailsBanner;
