import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";

const ServicesMainDetails = (props) => {
  const { user } = useAuth();
  const [bookingData, setBookingData] = useState({});
  const navigate = useNavigate();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProductData = { ...bookingData };
    newProductData[field] = value;
    setBookingData(newProductData);
  };
  const handleProductDateSubmit = (e) => {
    const booking = {
      ...bookingData,
      name: user.displayName,
      email: user.email,
      condition: "pending",
      product_Detail: props.product,
    };
    fetch("https://fathomless-everglades-06913.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          window.alert("Order SuccessFull ");
          document.getElementById("Form").reset();
          navigate("/dashboard/myOrders");
        }
      });

    e.preventDefault();
  };
  const {
    _id,
    name,
    title,
    details,
    details2,
    rating,
    review,
    img1,
    img2,
    img3,
    security,
    professional,
    maintenance,
    support,
  } = props.product;
  return (
    <div className="pb-100 pt-175">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 mb-30">
            <div className="services-details-wrapper">
              <div className="services-details-img">
                <img className="h-500" src={img1} alt="" />
              </div>
              <div className="services-details-text">
                <span>{title}</span>
                <h2>{name}</h2>
              </div>
              <div className="services-details-text mt-30">
                <p>{details}</p>
              </div>
              <div className="row mb-15">
                <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                  <div className="single-work">
                    <div className="work-icon">
                      <i className="fas fa-location"></i>
                    </div>
                    <div className="work-text">
                      <h4>Well Security</h4>
                      <p>{security}</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                  <div className="single-work">
                    <div className="work-icon">
                      <i className="fas fa-layer-group"></i>
                    </div>
                    <div className="work-text">
                      <h4>Professional</h4>
                      <p>{professional}</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                  <div className="single-work">
                    <div className="work-icon">
                      <i className="fas fa-sun"></i>
                    </div>
                    <div className="work-text">
                      <h4>Maintenance</h4>
                      <p>{maintenance}</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                  <div className="single-work">
                    <div className="work-icon">
                      <i className="fas fa-umbrella-beach"></i>
                    </div>
                    <div className="work-text">
                      <h4>Support 24/7</h4>
                      <p> {support}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="services-details-tag grey-bg">
                <h2>
                  Smashing Podcast Episode 21 With Chris Ferdinandi Are Modern
                  Best Practices Bad For Create Responsive Dashboard
                </h2>
                <span>Marvin A. Therrien</span>
              </div>
              <div className="row mt-50 mb-10">
                <div className="col-xl-6 col-lg-6 mb-30">
                  <div className="services-details-img">
                    <img className="h-300" src={img2} alt="" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 mb-30">
                  <div className="services-details-img">
                    <img className="h-300" src={img3} alt="" />
                  </div>
                </div>
              </div>
              <div className="services-details-info mb-45">
                <p>{details2}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 mb-30">
            <div
              id="category_service-3"
              className="widget mb-40  widget_category_service"
            >
              {" "}
              <ul className="service-details-list">
                <li>
                  <a href="/">Maintenance &amp; Repairs</a>
                </li>
                <li>
                  <a href="/">Roof Transportations</a>
                </li>
                <li>
                  <a href="/">Roofing Buildup</a>
                </li>
                <li>
                  <a href="/">Roofing Cleaning</a>
                </li>
                <li>
                  <a href="/">Roofing Repairs</a>
                </li>
              </ul>
            </div>
            <div id="text-3" className="widget mb-40  widget_text">
              <h3 className="widget-title">Get In Touch</h3>{" "}
              <div className="textwidget">
                <div
                  role="form"
                  className="wpcf7"
                  id="wpcf7-f5-p98-o1"
                  lang="en-US"
                  dir="ltr"
                >
                  <div className="screen-reader-response"></div>
                  <form
                    action="/demosd/roofline/?service=roofing-cleaning#wpcf7-f5-p98-o1"
                    method="post"
                    className="wpcf7-form"
                    novalidate="novalidate"
                  >
                    <div style={{ display: "none" }}>
                      <input type="hidden" name="_wpcf7" value="5" />
                      <br />
                      <input
                        type="text"
                        name="_wpcf7_version"
                        // value="5.0.2"
                      />
                      <br />
                      <input type="text" name="_wpcf7_locale" value="en_US" />
                      <br />
                      <input
                        type="text"
                        name="_wpcf7_unit_tag"
                        // value="wpcf7-f5-p98-o1"
                      />
                      <br />
                      <input
                        type="text"
                        name="_wpcf7_container_post"
                        // value="98"
                      />
                    </div>
                    <div id="ser-side-form" className="ser-side-form">
                      <div className="ser-side s-name">
                        <span className="wpcf7-form-control-wrap names">
                          <input
                            type="text"
                            name="names"
                            // value=""
                            size="40"
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                            // aria-required="true"
                            // aria-invalid="false"
                            placeholder="Write Your Name"
                          />
                        </span>
                      </div>
                      <div className="ser-side s-email">
                        <span className="wpcf7-form-control-wrap email">
                          <input
                            type="email"
                            name="email"
                            // value=""
                            size="40"
                            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                            // aria-required="true"
                            // aria-invalid="false"
                            placeholder="Your Email"
                          />
                        </span>
                      </div>
                      <div className="ser-side s-sub">
                        <span className="wpcf7-form-control-wrap subject">
                          <input
                            type="text"
                            name="subject"
                            // value=""
                            size="40"
                            className="wpcf7-form-control wpcf7-text"
                            // aria-invalid="false"
                            placeholder="Subject"
                          />
                        </span>
                      </div>
                      <div className="ser-side s-contact">
                        <span className="wpcf7-form-control-wrap comments">
                          <textarea
                            name="comments"
                            cols="30"
                            rows="10"
                            className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                            id="comments"
                            // aria-required="true"
                            // aria-invalid="false"
                            placeholder="Message"
                          ></textarea>
                        </span>
                      </div>
                      <div className="ser-button">
                        <input
                          type="submit"
                          value="Send Message"
                          className="wpcf7-form-control wpcf7-submit c-btn"
                        />
                      </div>
                    </div>
                    <div className="wpcf7-response-output wpcf7-display-none"></div>
                  </form>
                </div>
              </div>
            </div>
            <div
              id="custom_html-3"
              className="widget_text widget mb-40  widget_custom_html"
            >
              <div className="textwidget custom-html-widget">
                {" "}
                <div className="banner-img">
                  <a href="/">
                    <img
                      src="https://shtheme.org/demosd/roofline/wp-content/uploads/2020/12/banner.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="show"
          style={{
            minHeight: "450px",
            backgroundImage: `url(https://i.ibb.co/NxpPwq8/Buy-now.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <div id="buyNow" className="container">
            <form
              id="Form"
              className="my-5 p-4 rounded shadow mx-auto"
              style={{ maxWidth: "50rem", backgroundColor: "#000000ba" }}
              onSubmit={handleProductDateSubmit}
            >
              <Typography
                style={{
                  color: "deeppink",
                  textAlign: "center",
                  fontFamily: `"Yanone Kaffeesatz", sans-serif`,
                }}
                sx={{ my: 3 }}
                variant="h3"
                gutterBottom
              >
                ORDER NOW
              </Typography>
              <Typography variant="h6" className="text-primary fw-bold">
                Hi <span className="text-success">{user.displayName}</span>,
                your selected product model is{" "}
                <span className="text-success">{name}</span>
                .<br />
                <span className="text-danger">
                  Please fill up the text field to parches the product.
                </span>
                Thank you.
              </Typography>
              <TextField
                sx={{ width: "95%", m: 1, input: { color: "white" } }}
                id="standard-basic"
                label="Your Name"
                focused
                value={`${user.displayName}`}
                color="success"
                name="name"
                variant="standard"
              />
              <TextField
                sx={{ width: "95%", m: 1, input: { color: "white" } }}
                id="standard-basic"
                label="Your Email"
                color="success"
                focused
                value={`${user.email}`}
                name="email"
                variant="standard"
              />
              <div id="emailHelp" className="form-text text-primary">
                We will take your name and email by default.
              </div>
              <TextField
                sx={{ width: "95%", m: 1, input: { color: "white" } }}
                id="standard-basic"
                label="Phone"
                color="success"
                name="phone"
                required
                placeholder="Please Enter Your Phone Number"
                onBlur={handleOnBlur}
                variant="standard"
                focused
              />
              <TextField
                sx={{ width: "95%", m: 1, input: { color: "white" } }}
                id="standard-basic"
                color="success"
                required
                placeholder="Please Enter Your Location"
                label="Your Location"
                name="location"
                onBlur={handleOnBlur}
                variant="standard"
                focused
              />

              <Button
                sx={{ width: "95%", m: 1 }}
                style={{
                  backgroundColor: "crimson",
                }}
                type="submit"
                variant="contained"
              >
                BUY
              </Button>
              {/* {isLoading && <CircularProgress />} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesMainDetails;
