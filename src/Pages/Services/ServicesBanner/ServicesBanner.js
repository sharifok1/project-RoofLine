import React from "react";
import "./../Services.css";
const ServicesBanner = () => {
  return (
    <div className="ServiceBanner mb-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb-text text-center pt-140 pb-90">
              <h1>Our Services</h1>
            </div>
            <div className="text-center">
              <ul className="breadcrumb-menu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-menu22">
                  <span>Services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
