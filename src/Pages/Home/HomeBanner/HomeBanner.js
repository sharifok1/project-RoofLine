import React from "react";
import { Link } from "react-router-dom";
import "./../Home.css";

const HomeBanner = () => {
  return (
    <section className="hero-area pos-rel">
      <div className="hero-slider">
        <div className="slider-active slick-initialized slick-slider">
          <div className="slick-list draggable">
            <div
              className="slick-track"
              // style="opacity: 1; width: 1903px;"
            >
              <div
                className="single-slider slider-height d-flex align-items-center slick-slide slick-current slick-active home-banner-bg"
                tabindex="0"
                data-slick-index="0"
                aria-hidden="false"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-9">
                      <div className="hero-02-content mt-130">
                        <div className="hero-slider-caption hero-text">
                          <span
                            data-animation="fadeInUp"
                            data-delay=".4s"
                            className=""
                            // style="animation-delay: 0.4s;"
                          >
                            <i className="flaticon-support"></i> Services &amp;
                            Repairs
                          </span>
                          <h2
                            data-animation="fadeInUp"
                            data-delay=".6s"
                            className=""
                            // style="animation-delay: 0.6s;"
                          >
                            Roofing Contractors
                          </h2>
                          <p
                            data-animation="fadeInUp"
                            data-delay=".8s"
                            className=""
                            // style="animation-delay: 0.8s;"
                          >
                            Sed perspi ciatis unde omnis iste natus error sitvo
                            accusantium doloremque laudantium
                          </p>
                          <div
                            className="slider-button mt-35"
                            data-animation="fadeInUp"
                            data-delay="1.1s"
                            // style="animation-delay: 1.1s;"
                          >
                            <Link to="/contact" className="c-btn" tabindex="0">
                              <span></span> Need Help <span></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-5 d-none d-lg-block">
                      <div
                        className="slider-img"
                        data-animation="fadeInRight"
                        data-delay="1.3s"
                        // style="animation-delay: 1.3s;"
                      >
                        <img
                          src="https://shtheme.org/demosd/roofline/wp-content/uploads/2021/06/01.png"
                          alt=""
                          // style="    margin-top: 50px;"
                        />
                      </div>
                    </div>
                  </div>
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
