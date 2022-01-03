import React from "react";

const ContactArea = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
            <div class="section-title text-center pos-rel mb-75">
              <h1>Message</h1>
              <span>Get in touch</span>
              <h2>Feel Free To Contact Us</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div
              role="form"
              class="wpcf7"
              id="wpcf7-f131-p70-o1"
              lang="en-US"
              dir="ltr"
            >
              <div class="screen-reader-response"></div>
              <form
                action="/demosd/roofline/?page_id=70#wpcf7-f131-p70-o1"
                method="post"
                class="wpcf7-form"
                novalidate="novalidate"
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
                <div id="contacts-form" class="contacts-form">
                  <div class="row">
                    <div class="col-lg-4 col-md-12">
                      <div class="contacts-icon contactss-name">
                        <span class="wpcf7-form-control-wrap names">
                          <input
                            type="text"
                            name="names"
                            // value=""
                            size="40"
                            class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                            // aria-required="true"
                            // aria-invalid="false"
                            placeholder="Your Full Name"
                          />
                        </span>
                      </div>
                      <p></p>
                    </div>
                    <div class="col-lg-4 col-md-12">
                      <div class="contacts-icon contactss-email">
                        <span class="wpcf7-form-control-wrap email">
                          <input
                            type="email"
                            name="email"
                            // value=""
                            size="40"
                            class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                            // aria-required="true"
                            // aria-invalid="false"
                            placeholder="Your Email Address"
                          />
                        </span>
                      </div>
                      <p></p>
                    </div>
                    <div class="col-lg-4 col-md-12">
                      <div class="contacts-icon contactss-website">
                        <span class="wpcf7-form-control-wrap phone">
                          <input
                            type="number"
                            name="phone"
                            // value=""
                            size="40"
                            class="wpcf7-form-control wpcf7-text"
                            // aria-invalid="false"
                            placeholder="Your Phone"
                          />
                        </span>
                      </div>
                      <p></p>
                    </div>
                    <div class="col-lg-12">
                      <div class="contacts-icon contactss-message">
                        <span class="wpcf7-form-control-wrap comments">
                          <textarea
                            name="comments"
                            cols="30"
                            rows="10"
                            class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                            id="comments"
                            // aria-required="true"
                            // aria-invalid="false"
                            placeholder="Your Comments...."
                          ></textarea>
                        </span>
                      </div>
                      <p></p>
                    </div>
                    <div class="col-lg-12">
                      <div class="contacts-form-button text-center">
                        <input
                          type="submit"
                          value="Send Your Message"
                          class="wpcf7-form-control wpcf7-submit c-btn text-light"
                        />
                      </div>
                      <p></p>
                    </div>
                    <p></p>
                  </div>
                </div>
                <div class="wpcf7-response-output wpcf7-display-none"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
