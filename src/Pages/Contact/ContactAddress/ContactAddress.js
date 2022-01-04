import React from "react";

const ContactAddress = () => {
  return (
    <div className="pt-240">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="contact-address-wrapper grey-bg text-center mb-90">
              <div className="contact-address-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <div className="contact-address-text mb-40">
                <h2>Main Location</h2>
                <span>
                  205 Main Street,D - Block <br />
                  2nd Floor, New York
                </span>
              </div>
              <div className="contact-address-text">
                <h2>Branch Location</h2>
                <span>
                  205 Main Street,D - Block <br />
                  2nd Floor, New York
                </span>
              </div>{" "}
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="contact-address-wrapper grey-bg text-center mb-90">
              <div className="contact-address-icon">
                <i className="fas fa-envelope-open"></i>
              </div>
              <div className="contact-address-text mb-40">
                <h2>Main Office</h2>
                <span>
                  support@gmail.com <br />
                  infoweb.net
                </span>
              </div>
              <div className="contact-address-text">
                <h2>Branch Office</h2>
                <span>
                  support@gmail.com <br />
                  infoweb.net
                </span>
              </div>{" "}
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="contact-address-wrapper grey-bg text-center mb-90">
              <div className="contact-address-icon">
                <i className="fas fa-headphones"></i>
              </div>
              <div className="contact-address-text mb-40">
                <h2>Emergency</h2>
                <span>
                  Mobile : +012 (345) 789 <br />
                  Fax : 1234567
                </span>
              </div>
              <div className="contact-address-text">
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
