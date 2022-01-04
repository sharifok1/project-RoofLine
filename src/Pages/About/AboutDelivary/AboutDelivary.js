import React from "react";
import { Link } from "react-router-dom";

const AboutDelivary = () => {
  return (
    <div>
      <div className="about-area ab-011 pt-150 pb-115">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about-img mb-30">
                <img
                  className="img-fluid"
                  src="https://shtheme.org/demosd/roofline/wp-content/uploads/2021/06/03-1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-wrapper mt-20 mb-30">
                <div className="section-title section-title-icon pos-rel mb-50">
                  <h1>About</h1>
                  <span className="line">
                    <i className="fas fa-hard-hat"></i> About Us
                  </span>
                  <h2>Delivering Exceptional Roofing Services</h2>
                </div>
                <div className="about-us-02-text">
                  <h4>
                    <span>25</span> Years Of Experience Roofing Services
                  </h4>
                  <p>
                    Adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut
                    aliquid ex ea commodi conse
                  </p>
                </div>
                <div className="about-item">
                  <ul>
                    <li>
                      <div className="about-item-text">
                        <span>Standard Working</span>
                      </div>
                    </li>
                    <li>
                      <div className="about-item-text">
                        <span>Awards Winning Agency</span>
                      </div>
                    </li>
                    <li>
                      <div className="about-item-text">
                        <span>Commercial Solutions</span>
                      </div>
                    </li>
                    <li>
                      <div className="about-item-text">
                        <span>Industrial Solutions</span>
                      </div>
                    </li>

                    <li>
                      <div className="about-item-text">
                        <span>Repair &amp; Maintenance</span>
                      </div>
                    </li>

                    <li>
                      <div className="about-item-text">
                        <span>Support 24/7</span>
                      </div>
                    </li>
                  </ul>
                </div>{" "}
                <div className="about-button mt-25">
                  <Link className="c-btn border-btn" to="/notFound">
                    <span></span>
                    Read More<span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDelivary;
