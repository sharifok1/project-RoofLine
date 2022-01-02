import React from "react";
import "./../Services.css";
const ServicesBanner = () => {
  return (
    <div className="ServiceBanner mb-5">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb-text text-center pt-140 pb-90">
              <h1>Our Services</h1>
            </div>
            <div class="text-center">
              <ul class="breadcrumb-menu">
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
