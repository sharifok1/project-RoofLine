import React from "react";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div>
      <div class="about-area ab-011 pt-150 pb-115">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6">
              <div class="about-img mb-30">
                <img
                  src="https://shtheme.org/demosd/roofline/wp-content/uploads/2021/06/01-1.png"
                  alt=""
                />
                <div class="abouts-text text-right">
                  <div class="abouts-icon">
                    <i class="far fa-plus"></i>
                  </div>
                  <h2>
                    Welcome <br />
                    Roofline
                  </h2>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="about-wrapper mt-20 mb-30">
                <div class="section-title section-title-icon pos-rel mb-50">
                  <h1>About</h1>
                  <span class="line">
                    <i class="fas fa-hard-hat"></i> About Us
                  </span>
                  <h2>Delivering Exceptional Roofing Services</h2>
                </div>
                <div class="inner-about">
                  <div class="about-02-img f-left">
                    <img
                      src="https://shtheme.org/demosd/roofline/wp-content/uploads/2021/06/01-1.jpg"
                      alt=""
                    />
                  </div>
                  <div class="about-title">
                    <div class="about-info f-left">
                      <h2>25</h2>
                    </div>
                    <div class="about-content">
                      <h3>Years Of Experience Roofing Services</h3>
                    </div>
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium dolore laudantiums totam rem aperiam,
                    eaque ipsa illo inventore veritatis et quasi architecto
                    beatae
                  </p>
                </div>
                <div class="about-item">
                  <ul>
                    <li>
                      <div class="about-item-text">
                        <span>Standard Working</span>
                      </div>
                    </li>
                    <li>
                      <div class="about-item-text">
                        <span>Awards Winning Agency</span>
                      </div>
                    </li>
                    <li>
                      <div class="about-item-text">
                        <span>Commercial Solutions</span>
                      </div>
                    </li>
                    <li>
                      <div class="about-item-text">
                        <span>Industrial Solutions</span>
                      </div>
                    </li>
                  </ul>
                </div>{" "}
                <div class="about-button mt-25">
                  <Link to="/about" class="c-btn border-btn">
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

export default HomeAbout;
