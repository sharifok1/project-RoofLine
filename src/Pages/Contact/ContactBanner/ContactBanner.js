import React from "react";
import "./../Contact.css";
const ContactBanner = () => {
  return (
    <div className="ContactBanner mb-5">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb-text text-center pt-140 pb-90">
              <h1>Contact</h1>
            </div>
            <div class="text-center">
              <ul class="breadcrumb-menu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li class="breadcrumb-menu22">
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
