import React from "react";

const ContactAddress = () => {
  return (
    <div className="pt-240">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="contact-address-wrapper grey-bg text-center mb-90">
              <div class="contact-address-icon">
                <i class="fas fa-map-marked-alt"></i>
              </div>
              <div class="contact-address-text mb-40">
                <h2>Main Location</h2>
                <span>
                  205 Main Street,D - Block <br />
                  2nd Floor, New York
                </span>
              </div>
              <div class="contact-address-text">
                <h2>Branch Location</h2>
                <span>
                  205 Main Street,D - Block <br />
                  2nd Floor, New York
                </span>
              </div>{" "}
            </div>
          </div>

          <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="contact-address-wrapper grey-bg text-center mb-90">
              <div class="contact-address-icon">
                <i class="fas fa-envelope-open"></i>
              </div>
              <div class="contact-address-text mb-40">
                <h2>Main Office</h2>
                <span>
                  support@gmail.com <br />
                  infoweb.net
                </span>
              </div>
              <div class="contact-address-text">
                <h2>Branch Office</h2>
                <span>
                  support@gmail.com <br />
                  infoweb.net
                </span>
              </div>{" "}
            </div>
          </div>

          <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="contact-address-wrapper grey-bg text-center mb-90">
              <div class="contact-address-icon">
                <i class="fas fa-headphones"></i>
              </div>
              <div class="contact-address-text mb-40">
                <h2>Emergency</h2>
                <span>
                  Mobile : +012 (345) 789 <br />
                  Fax : 1234567
                </span>
              </div>
              <div class="contact-address-text">
                <h2>Appointment</h2>
                <span>
                  Mobile : +012 (345) 789 <br />
                  Fax : 1234567
                </span>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
