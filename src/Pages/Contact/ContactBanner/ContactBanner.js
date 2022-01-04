import React from "react";
import "./../Contact.css";
const ContactBanner = () => {
  return (
    <div className="ContactBanner mb-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb-text text-center pt-140 pb-90">
              <h1>Contact</h1>
            </div>
            <div className="text-center">
              <ul className="breadcrumb-menu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-menu22">
                  <span>Contact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
