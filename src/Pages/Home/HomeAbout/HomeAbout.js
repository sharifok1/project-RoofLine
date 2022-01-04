import React from "react";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div>
      <div className="about-us-area pos-rel pt-130 pb-100">
        <div className="shape d-none d-xl-block">
          <div className="shape-item ab-01 rotateme">
            <img
              className="img-fluid"
              src="https://shtheme.org/demosd/roofline/wp-content/themes/roofline/assets/img/shape/05.png"
              alt=""
            />
          </div>
          <div className="shape-item ab-02 bounce-animate">
            <img
              className="img-fluid"
              src="https://shtheme.org/demosd/roofline/wp-content/themes/roofline/assets/img/shape/06.png"
              alt=""
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7">
              <div className="about-us-img mb-30">
                <img
                  className="img-fluid"
                  src="https://shtheme.org/demosd/roofline/wp-content/uploads/2021/06/02.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="about-us-wrapper mt-80 mb-30 mr-20">
                <div className="section-title pos-rel mb-30">
                  <h1>Company</h1>
                  <span>About Us</span>
                  <h2>Explore About Our Roofing History</h2>
                </div>
                <div className="about-us-info">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit volupt
                    atem accusantium doloremque laudantium, totam rperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi archite ecto
                    beatae vitae dicta sunt explicabo
                  </p>
                </div>
                <div className="about-us-text">
                  <p>
                    Accusantium doloremque laudantium totam rperiam eaque ipsa
                    quae ab illo inventore veritatis
                  </p>
                </div>
                <div className="about-us-text">
                  <a href="/about">
                    Discover More <i className="far fa-long-arrow-right"></i>
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
