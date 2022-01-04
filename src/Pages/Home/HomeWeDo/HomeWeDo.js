import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const HomeWeDo = () => {
  return (
    <div className="HomeWeDo pt-35 mb-30">
      <div className="skills-area pos-rel">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="skills-02-wrapper mt-30 mr-60">
                <div className="section-title mr-20 pos-rel mb-50">
                  <h1>Skills</h1>
                  <span> What we do</span>
                  <h2>Lot’s Experience In Roofing Services</h2>
                  <p className="section-info">
                    Quis autem vel eum iure repreahenderit quein ea voluptatey
                    esse quam nihil molestiae consequatur, vel dolorem
                  </p>
                </div>
                {/* <div className="row">
                  <div className="col-xl-5 col-lg-6 col-md-5 col-6">
                    <div className="skills-2-single mb-30">
                      <div className="progress-circular">
                        <div
                          style={{
                            display: "inline",
                            width: "126px",
                            height: "126px",
                          }}
                        >
                          <canvas width="126" height="126"></canvas>
                          <input
                            type="text"
                            className="knob"
                            value="0"
                            data-rel="69"
                            data-linecap="round"
                            data-width="126"
                            data-height="126"
                            data-bgcolor="#e5e5e5"
                            data-fgcolor="#f15743"
                            data-thickness=".15"
                            data-readonly="true"
                            disabled=""
                            readonly="readonly"
                            style={{
                              width: "67px",
                              height: "42px",
                              position: "absolute",
                              verticalAlign: "middle",
                              marginTop: "42px",
                              marginLeft: "-96px",
                              border: "0px",
                              background: "none",
                              font: "bold 25px Arial",
                              textAlign: "center",
                              color: "rgb(241, 87, 67)",
                              padding: "0px",
                              appearance: "none",
                            }}
                          />
                        </div>
                      </div>
                      <div className="skills-content">
                        <h4>
                          Repairs &amp; <br /> Maintenance
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-5 col-6">
                    <div className="skills-2-single mb-30">
                      <div className="progress-circular">
                        <div
                          style={{
                            display: "inline",
                            width: "126px",
                            height: "126px",
                          }}
                        >
                          <canvas width="126" height="126"></canvas>
                          <input
                            type="text"
                            className="knob"
                            value="0"
                            data-rel="83"
                            data-linecap="round"
                            data-width="126"
                            data-height="126"
                            data-bgcolor="#e5e5e5"
                            data-fgcolor="#f15743"
                            data-thickness=".15"
                            data-readonly="true"
                            disabled=""
                            readonly="readonly"
                            style={{
                              width: "67px",
                              height: "42px",
                              position: "absolute",
                              verticalAlign: "middle",
                              marginTop: "42px",
                              marginLeft: "-96px",
                              border: "0px",
                              background: "none",
                              font: "bold 25px Arial",
                              textAlign: "center",
                              color: "rgb(241, 87, 67)",
                              padding: "0px",
                              appearance: "none",
                            }}
                          />
                        </div>
                      </div>
                      <div className="skills-content">
                        <h4>
                          Best Online <br /> Support 24/7
                        </h4>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="row">
                  <div className="col-xl-5 col-lg-6 col-md-5 col-6">
                    <div className="skills-2-single mb-30">
                      <div className="progress-circular">
                        <div
                          style={{
                            display: "inline",
                            width: "126px",
                            height: "126px",
                          }}
                        >
                          <canvas width="126" height="126"></canvas>
                        </div>
                      </div>
                      <div
                        className="skills-content"
                        style={{ marginTop: "-70px" }}
                      >
                        <div
                          style={{ width: 80, height: 80, marginLeft: "20px" }}
                        >
                          <CircularProgressbar
                            styles={buildStyles({
                              pathColor: `rgba(255, 10, 0, ${69 / 100})`,
                              textColor: "#f88",
                              trailColor: "#d6d6d6",
                              backgroundColor: "#d6d6d6",
                              pathTransitionDuration: 0.5,
                              // rotation: 0.25,
                            })}
                            valueStart={0}
                            valueEnd={69}
                            value={69}
                            text={`${69}%`}

                            /* This is important to include, because if you're fully managing the
                            animation yourself, you'll want to disable the CSS animation. */
                          />
                        </div>
                        <h4>
                          Repairs &amp; <br /> Maintenance
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-5 col-6">
                    <div className="skills-2-single mb-30">
                      <div className="progress-circular">
                        <div
                          style={{
                            display: "inline",
                            width: "126px",
                            height: "126px",
                          }}
                        >
                          <canvas width="126" height="126"></canvas>
                        </div>
                      </div>
                      <div
                        className="skills-content"
                        style={{ marginTop: "-70px" }}
                      >
                        <div
                          style={{ width: 80, height: 80, marginLeft: "20px" }}
                        >
                          <CircularProgressbar
                            styles={buildStyles({
                              pathColor: `rgba(255, 10, 0, ${69 / 100})`,
                              textColor: "#f88",
                              trailColor: "#d6d6d6",
                              backgroundColor: "#d6d6d6",
                              pathTransitionDuration: 0.5,
                              // rotation: 0.25,
                            })}
                            valueStart={0}
                            valueEnd={83}
                            value={83}
                            text={`${83}%`}
                          />
                        </div>
                        <h4>
                          Best Online <br /> Support 24/7
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="skill-img">
                <img
                  className="img-fluid"
                  src="https://shtheme.org/demosd/roofline/wp-content/uploads/2021/06/skills-02.jpg"
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

export default HomeWeDo;
