import React from "react";

const HomeWeDo = () => {
  return (
    <div className="HomeWeDo pt-35">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 d-flex align-items-end">
            <div className="choose-img">
              <img
                src="https://shtheme.org/demosd/roofline/wp-content/uploads/2021/07/01.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 my-auto">
            <div className="choose-wrapper mb-30">
              <div className="section-title mr-20 pos-rel mb-35">
                <h1>Why Us</h1>
                <span> What We Do</span>
                <h2>Why People Choose Our Roofline</h2>
              </div>
              <div className="choose-info">
                <p>
                  Sed ut perspiciati unde omnis iste natus error vaolupta temc
                  ntium doloremque laudantium totam rem aperiam eaquepsu abillo
                  inventore veritatis et quasi architecto beatae
                </p>
              </div>
              <div className="choose-item choose-item-02">
                <ul>
                  <li>
                    <div className="choose-icon f-left">
                      <i className="fas fa-hospital-alt"></i>
                      <div className="choose-tag">
                        <i className="fas fa-check"></i>
                      </div>
                    </div>
                    <div className="choose-text">
                      <h4>Quality &amp; Experience</h4>
                      <p>
                        Nor again is there anyone who loves or pursues desires
                        to obtain pain of itself because it is pain but
                        bccasionally circumstances occur in which toil and pain
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="choose-icon f-left">
                      <i className="fas fa-medal"></i>
                      <div className="choose-tag">
                        <i className="fas fa-check"></i>
                      </div>
                    </div>
                    <div className="choose-text">
                      <h4>Certificate Company</h4>
                      <p>
                        Nor again is there anyone who loves or pursues desires
                        to obtain pain of itself because it is pain but
                        bccasionally circumstances occur in which toil and pain
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWeDo;
