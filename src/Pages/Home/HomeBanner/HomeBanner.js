import React from "react";
import "./../Home.css";

const HomeBanner = () => {
  return (
    <section class="hero-area pos-rel">
      <div class="hero-slider">
        <div class="slider-active slick-initialized slick-slider">
          <div class="slick-list draggable">
            <div
              class="slick-track"
              // style="opacity: 1; width: 1903px;"
            >
              <div
                class="single-slider slider-height d-flex align-items-center slick-slide slick-current slick-active home-banner-bg"
                tabindex="0"
                data-slick-index="0"
                aria-hidden="false"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-xl-6 col-lg-7 col-md-9">
                      <div class="hero-02-content mt-130">
                        <div class="hero-slider-caption hero-text">
                          <span
                            data-animation="fadeInUp"
                            data-delay=".4s"
                            class=""
                            // style="animation-delay: 0.4s;"
                          >
                            <i class="flaticon-support"></i> Services &amp;
                            Repairs
                          </span>
                          <h2
                            data-animation="fadeInUp"
                            data-delay=".6s"
                            class=""
                            // style="animation-delay: 0.6s;"
                          >
                            Roofing Contractors
                          </h2>
                          <p
                            data-animation="fadeInUp"
                            data-delay=".8s"
                            class=""
                            // style="animation-delay: 0.8s;"
                          >
                            Sed perspi ciatis unde omnis iste natus error sitvo
                            accusantium doloremque laudantium
                          </p>
                          <div
                            class="slider-button mt-35"
                            data-animation="fadeInUp"
                            data-delay="1.1s"
                            // style="animation-delay: 1.1s;"
                          >
                            <a class="c-btn" href="/" tabindex="0">
                              <span></span> Need Help <span></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-5 d-none d-lg-block">
                      <div
                        class="slider-img"
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
