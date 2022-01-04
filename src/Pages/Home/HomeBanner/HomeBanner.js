import React from "react";
import { Link } from "react-router-dom";
import "./../Home.css";

const HomeBanner = () => {
  return (
    <section class="hero-area pos-rel HomeBanner home-banner-bg">
      <div class="container">
        <div class="row">
          <div class="col-xl-7 col-lg-8 col-md-9">
            <div class="hero-03-content mt-50">
              <div class="hero-slider-caption hero-02-text">
                <span
                  data-animation="fadeInUp"
                  data-delay=".4s"
                  class=""
                  style={{ animationDelay: "0.4s;" }}
                >
                  <i class="fas fa-tools"></i> Services &amp; Repairs
                </span>
                <h2
                  data-animation="fadeInUp"
                  data-delay=".6s"
                  class=""
                  style={{ animationDelay: "0.6s;" }}
                >
                  Discover The Effective Roofing Solutions
                </h2>
                <div
                  class="slider-button slider-02-button mt-35"
                  data-animation="fadeInUp"
                  data-delay="1.s"
                >
                  <a class="c-btn" href="*" tabindex="0">
                    <span></span> Need Helps <span></span>
                  </a>
                  <a class="c-btn btn-white" href="*" tabindex="0">
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
