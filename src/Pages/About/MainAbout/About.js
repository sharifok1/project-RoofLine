import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import AboutBanner from "../AboutBanner/AboutBanner";
import AboutDelivary from "../AboutDelivary/AboutDelivary";
import AboutHistory from "../AboutHistory/AboutHistory";
import AboutServices from "../AboutServices/AboutServices";

const About = () => {
  return (
    <div>
      <Header />
      <AboutBanner />
      <AboutDelivary />
      <AboutHistory />
      <AboutServices />
      <Footer />
    </div>
  );
};

export default About;
