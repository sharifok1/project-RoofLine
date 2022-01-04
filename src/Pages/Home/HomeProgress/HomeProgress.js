import React from "react";

const HomeProgress = () => {
  return (
    <div className="process-area pb-30 grey-bg pos-rel">
      <div
        className="process-bg-img"
        // style="background-image:url(https://shtheme.org/demosd/roofline/wp-content/uploads/2021/06/03-1.jpg)"
      ></div>
      <div className="container">
        <div className="process-bg-02">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-8">
              <div className="section-title mr-20 pos-rel mb-80">
                <h1>Process</h1>
                <span> working process</span>
                <h2>How Does We Finished Our Projects</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-end">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="process-wrapper mb-100">
                <div className="p-content">
                  <h2>01</h2>
                </div>
                <div className="process-icon">
                  <i className="fas fa-tools"></i>
                </div>
                <div className="process-text">
                  <h4>How To Started Roofing</h4>
                  <p>
                    Sed ut perspiciatis unmnis iste natus error soluptatem
                    accusantium dolore
                  </p>{" "}
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="process-wrapper mb-100">
                <div className="p-content">
                  <h2>02</h2>
                </div>
                <div className="process-icon">
                  <i className="fas fa-columns"></i>
                </div>
                <div className="process-text">
                  <h4>Project Analysis &amp; Installations</h4>
                  <p>
                    Quis autem was iureepreh enderit qui ineas voluptatec velit
                    esse quam nihils
                  </p>
                  <ul className="process-list">
                    <li>Best Plan Provides</li>
                    <li>Analysis For Experts</li>
                  </ul>{" "}
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="process-wrapper mb-100">
                <div className="p-content">
                  <h2>03</h2>
                </div>
                <div className="process-icon">
                  <i className="fas fa-crown"></i>
                </div>
                <div className="process-text">
                  <h4>Final Step To Get Your Result</h4>
                  <p>
                    Sed ut perspiciatis unmnis iste natus error soluptatem
                    accusantium dolore
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProgress;
