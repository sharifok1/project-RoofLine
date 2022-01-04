import React from "react";

import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import AboutBanner from "../AboutBanner/AboutBanner";
import AboutDelivary from "../AboutDelivary/AboutDelivary";
import AboutHistory from "../AboutHistory/AboutHistory";
import AboutServices from "../AboutServices/AboutServices";
import ReviewMain from "../ReviewMain/ReviewMain";

const About = () => {
  return (
    <div>
      <Header />
      <AboutBanner />
      <AboutDelivary />
      <AboutHistory />
      <AboutServices />
      <ReviewMain></ReviewMain>
      <Footer />
    </div>
  );
};

export default About;
