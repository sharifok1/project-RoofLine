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
    fetch("http://localhost:5000/booking", {
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
  } = props.product;
  return (
    <div className="pb-100 pt-175">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-8 mb-30">
            <div class="services-details-wrapper">
              <div class="services-details-img">
                <img className="h-500" src={img1} alt="" />
              </div>
              <div class="services-details-text">
                <span>{title}</span>
                <h2>{name}</h2>
              </div>
              <div class="services-details-text mt-30">
                <p>{details}</p>
              </div>
              <div class="row mb-15">
                <div class="col-xl-6 col-lg-6 col-md-6 mb-30">
                  <div class="single-work">
                    <div class="work-icon">
                      <i class="fas fa-location"></i>
                    </div>
                    <div class="work-text">
                      <h4>Well Security</h4>
                      <p>
                        Lorem ipsum dolor sit amet nsectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 mb-30">
                  <div class="single-work">
                    <div class="work-icon">
                      <i class="fas fa-layer-group"></i>
                    </div>
                    <div class="work-text">
                      <h4>Professional</h4>
                      <p>
                        Lorem ipsum dolor sit amet nsectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 mb-30">
                  <div class="single-work">
                    <div class="work-icon">
                      <i class="fas fa-sun"></i>
                    </div>
                    <div class="work-text">
                      <h4>Maintenance</h4>
                      <p>
                        Lorem ipsum dolor sit amet nsectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 mb-30">
                  <div class="single-work">
                    <div class="work-icon">
                      <i class="fas fa-umbrella-beach"></i>
                    </div>
                    <div class="work-text">
                      <h4>Support 24/7</h4>
                      <p>
                        Lorem ipsum dolor sit amet nsectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="services-details-tag grey-bg">
                <h2>
                  Smashing Podcast Episode 21 With Chris Ferdinandi Are Modern
                  Best Practices Bad For Create Responsive Dashboard
                </h2>
                <span>Marvin A. Therrien</span>
              </div>
              <div class="row mt-50 mb-10">
                <div class="col-xl-6 col-lg-6 mb-30">
                  <div class="services-details-img">
                    <img className="h-300" src={img2} alt="" />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 mb-30">
                  <div class="services-details-img">
                    <img className="h-300" src={img3} alt="" />
                  </div>
                </div>
              </div>
              <div class="services-details-info mb-45">
                <p>{details2}</p>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 mb-30">
            <div
              id="category_service-3"
              class="widget mb-40  widget_category_service"
            >
              {" "}
              <ul class="service-details-list">
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
            <div id="text-3" class="widget mb-40  widget_text">
              <h3 class="widget-title">Get In Touch</h3>{" "}
              <div class="textwidget">
                <div
                  role="form"
                  class="wpcf7"
                  id="wpcf7-f5-p98-o1"
                  lang="en-US"
                  dir="ltr"
                >
                  <div class="screen-reader-response"></div>
                  <form
                    action="/demosd/roofline/?service=roofing-cleaning#wpcf7-f5-p98-o1"
                    method="post"
                    class="wpcf7-form"
                    novalidate="novalidate"
                  >
                    <div style={{ display: "none" }}>
                      <input type="hidden" name="_wpcf7" value="5" />
                      <br />
                      <input
                        type="hidden"
                        name="_wpcf7_version"
                        value="5.0.2"
                      />
                      <br />
                      <input type="hidden" name="_wpcf7_locale" value="en_US" />
                      <br />
                      <input
                        type="hidden"
                        name="_wpcf7_unit_tag"
                        value="wpcf7-f5-p98-o1"
                      />
                      <br />
                      <input
                        type="hidden"
                        name="_wpcf7_container_post"
                        value="98"
                      />
                    </div>
                    <div id="ser-side-form" class="ser-side-form">
                      <div class="ser-side s-name">
                        <span class="wpcf7-form-control-wrap names">
                          <input
                            type="text"
                            name="names"
                            value=""
                            size="40"
                            class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Write Your Name"
                          />
                        </span>
                      </div>
                      <div class="ser-side s-email">
                        <span class="wpcf7-form-control-wrap email">
                          <input
                            type="email"
                            name="email"
                            value=""
                            size="40"
                            class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Your Email"
                          />
                        </span>
                      </div>
                      <div class="ser-side s-sub">
                        <span class="wpcf7-form-control-wrap subject">
                          <input
                            type="text"
                            name="subject"
                            value=""
                            size="40"
                            class="wpcf7-form-control wpcf7-text"
                            aria-invalid="false"
                            placeholder="Subject"
                          />
                        </span>
                      </div>
                      <div class="ser-side s-contact">
                        <span class="wpcf7-form-control-wrap comments">
                          <textarea
                            name="comments"
                            cols="30"
                            rows="10"
                            class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                            id="comments"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Message"
                          ></textarea>
                        </span>
                      </div>
                      <div class="ser-button">
                        <input
                          type="submit"
                          value="Send Message"
                          class="wpcf7-form-control wpcf7-submit c-btn"
                        />
                      </div>
                    </div>
                    <div class="wpcf7-response-output wpcf7-display-none"></div>
                  </form>
                </div>
              </div>
            </div>
            <div
              id="custom_html-3"
              class="widget_text widget mb-40  widget_custom_html"
            >
              <div class="textwidget custom-html-widget">
                {" "}
                <div class="banner-img">
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
