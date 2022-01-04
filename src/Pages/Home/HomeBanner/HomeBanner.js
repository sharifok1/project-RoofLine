import React from "react";
import { Link } from "react-router-dom";
import "./../Home.css";

const HomeBanner = () => {
  return (
    <section className="hero-area pos-rel HomeBanner home-banner-bg">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-8 col-md-9">
            <div className="hero-03-content mt-50">
              <div className="hero-slider-caption hero-02-text">
                <span
                  data-animation="fadeInUp"
                  data-delay=".4s"
                  className=""
                  style={{ animationDelay: "0.4s;" }}
                >
                  <i className="fas fa-tools"></i> Services &amp; Repairs
                </span>
                <h2
                  data-animation="fadeInUp"
                  data-delay=".6s"
                  className=""
                  style={{ animationDelay: "0.6s;" }}
                >
                  Discover The Effective Roofing Solutions
                </h2>
                <div
                  className="slider-button slider-02-button mt-35"
                  data-animation="fadeInUp"
                  data-delay="1.s"
                >
                  <a className="c-btn" href="*" tabindex="0">
                    <span></span> Need Helps <span></span>
                  </a>
                  <a className="c-btn btn-white" href="*" tabindex="0">
                    <span></span> About Us <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
