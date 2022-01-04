import React, { useEffect, useState } from "react";

import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import AboutBanner from "../AboutBanner/AboutBanner";
import AboutDelivary from "../AboutDelivary/AboutDelivary";
import AboutHistory from "../AboutHistory/AboutHistory";
import AboutServices from "../AboutServices/AboutServices";
import ReviewMain from "../ReviewMain/ReviewMain";

const About = () => {
  const [pageNumber, setPageNumber] = useState();
  const size = 2;
  const url = "https://fathomless-everglades-06913.herokuapp.com/reviews";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPageNumber(Math.ceil(data.count / size)));
    console.log(pageNumber);
  }, [!pageNumber]);
  return (
    <div>
      <Header />
      <AboutBanner />
      <AboutDelivary />
      <AboutHistory />
      <AboutServices />
      <ReviewMain pageNumber={pageNumber}></ReviewMain>
      <Footer />
    </div>
  );
};

export default About;
