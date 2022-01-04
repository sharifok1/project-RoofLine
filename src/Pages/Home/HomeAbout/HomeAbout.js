import React from "react";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div>
      <div class="about-us-area pos-rel pt-130 pb-100">
        <div class="shape d-none d-xl-block">
          <div class="shape-item ab-01 rotateme">
            <img
              className="img-fluid"
              src="https://shtheme.org/demosd/roofline/wp-content/themes/roofline/assets/img/shape/05.png"
              alt=""
            />
          </div>
          <div class="shape-item ab-02 bounce-animate">
            <img
              className="img-fluid"
              src="https://shtheme.org/demosd/roofline/wp-content/themes/roofline/assets/img/shape/06.png"
              alt=""
            />
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-xl-7 col-lg-7">
              <div class="about-us-img mb-30">
                <img
                  className="img-fluid"
                  src="https://shtheme.org/demosd/roofline/wp-content/uploads/2021/06/02.png"
                  alt=""
                />
              </div>
            </div>
            <div class="col-xl-5 col-lg-5">
              <div class="about-us-wrapper mt-80 mb-30 mr-20">
                <div class="section-title pos-rel mb-30">
                  <h1>Company</h1>
                  <span>About Us</span>
                  <h2>Explore About Our Roofing History</h2>
                </div>
                <div class="about-us-info">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit volupt
                    atem accusantium doloremque laudantium, totam rperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi archite ecto
                    beatae vitae dicta sunt explicabo
                  </p>
                </div>
                <div class="about-us-text">
                  <p>
                    Accusantium doloremque laudantium totam rperiam eaque ipsa
                    quae ab illo inventore veritatis
                  </p>
                </div>
                <div class="about-us-text">
                  <a href="/about">
                    Discover More <i class="far fa-long-arrow-right"></i>
                  </a>
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
