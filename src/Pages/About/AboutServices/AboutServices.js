import { easeQuadInOut } from "d3-ease";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

<AnimatedProgressProvider
  valueStart={0}
  valueEnd={69}
  duration={1.4}
  easingFunction={easeQuadInOut}
></AnimatedProgressProvider>;
// {(value) => {
//    const roundedValue = Math.round(value);
//   }}
const AboutServices = () => {
  return (
    <div>
      <div className="skills-area pos-rel my-5">
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
                  src="https://shtheme.org/demosd/roofline/wp-content/uploads/2021/06/skills-3.jpg"
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

export default AboutServices;
