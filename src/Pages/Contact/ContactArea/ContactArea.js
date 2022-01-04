import React from "react";
import { NavLink } from "react-router-dom";

const ContactArea = () => {
  return (
    <div>
      <div className="container">
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <NavLink to="/career">
            <button className="wpcf7-form-control wpcf7-submit c-btn text-light">
              Share Your business With us
            </button>
          </NavLink>
        </div>

        <div className="row">
          <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
            <div className="section-title text-center pos-rel mb-75">
              <h1>Message</h1>
              <span>Get in touch</span>
              <h2>Feel Free To Contact Us</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div
              role="form"
              className="wpcf7"
              id="wpcf7-f131-p70-o1"
              lang="en-US"
              dir="ltr"
            >
              <div className="screen-reader-response"></div>
              <form
                action="/demosd/roofline/?page_id=70#wpcf7-f131-p70-o1"
                method="post"
                className="wpcf7-form"
                novalidate="novalidate"
                target="_blank"
                action="https://formsubmit.co/team32programming@gmail.com"
                method="POST"
              >
                <div style={{ display: " none" }}>
                  <input type="hidden" name="_wpcf7" value="131" />
                  <input type="hidden" name="_wpcf7_version" value="5.0.2" />
                  <input type="hidden" name="_wpcf7_locale" value="en_US" />
                  <input
                    type="hidden"
                    name="_wpcf7_unit_tag"
                    value="wpcf7-f131-p70-o1"
                  />
                  <input
                    type="hidden"
                    name="_wpcf7_container_post"
                    value="70"
                  />
                </div>
                <di v id="contacts-form" className="contacts-form">
                  <div className="row">
                    <div className="col-lg-4 col-md-12">
                      <div className="contacts-icon contactss-name">
                        <span className="wpcf7-form-control-wrap names">
                          <input
                            type="text"
                            name="names"
                            // value=""
                            size="40"
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                            // aria-required="true"
                            // aria-invalid="false"
                            placeholder="Your Full Name"
                          />
                        </span>
                      </div>
                      <p></p>
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <div className="contacts-icon contactss-email">
                        <span className="wpcf7-form-control-wrap email">
                          <input
                            type="email"
                            name="email"
                            // value=""
                            size="40"
                            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                            // aria-required="true"
                            // aria-invalid="false"
                            placeholder="Your Email Address"
                          />
                        </span>
                      </div>
                      <p></p>
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <div className="contacts-icon contactss-website">
                        <span className="wpcf7-form-control-wrap phone">
                          <input
                            type="number"
                            name="phone"
                            // value=""
                            size="40"
                            className="wpcf7-form-control wpcf7-text"
                            // aria-invalid="false"
                            placeholder="Your Phone"
                          />
                        </span>
                      </div>
                      <p></p>
                    </div>
                    <div className="col-lg-12">
                      <div className="contacts-icon contactss-message">
                        <span className="wpcf7-form-control-wrap comments">
                          <textarea
                            name="comments"
                            cols="30"
                            rows="10"
                            className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                            id="comments"
                            // aria-required="true"
                            // aria-invalid="false"
                            placeholder="Your Comments...."
                          ></textarea>
                        </span>
                      </div>
                      <p></p>
                    </div>
                    <div className="col-lg-12">
                      <div className="contacts-form-button text-center">
                        <input
                          type="submit"
                          value="Send Your Message"
                          className="wpcf7-form-control wpcf7-submit c-btn text-light"
                        />
                      </div>
                      <p></p>
                    </div>
                    <p></p>
                  </div>
                </di>
                <div className="wpcf7-response-output wpcf7-display-none"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
