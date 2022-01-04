import React from "react";

const AboutHistory = () => {
  return (
    <div>
      <div className="history-area grey-bg pt-120 pb-100 pos-rel">
        <div className="shape d-none d-xl-block">
          <div className="shape-item ab-03 rotateme">
            <img
              src="https://shtheme.org/demosd/roofline/wp-content/themes/roofline/assets/img/shape/10.png"
              alt=""
            />
          </div>
          <div className="shape-item ab-04">
            <img
              src="https://shtheme.org/demosd/roofline/wp-content/themes/roofline/assets/img/shape/11.png"
              alt=""
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="history-wrapper mt-15 mr-20 mb-30">
                <div className="section-title pos-rel mb-30">
                  <h1>Company</h1>
                  <span>About us</span>
                  <h2>Explore About Our Roofing History</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit volupt
                  atem accusantium doloremque laudantium, totam rperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi archite ecto
                  beatae vitae dicta sunt explicabo
                </p>
                <div className="about-us-text">
                  <p>
                    Accusantium doloremque laudantium totam rperiam eaque ipsa
                    quae ab illo inventore veritatis
                  </p>
                </div>
                <div className="about-us-text">
                  <a href="/">
                    Discover More <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="history-img mb-30">
                <img
                  src="https://shtheme.org/demosd/roofline/wp-content/uploads/2021/07/h.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHistory;
