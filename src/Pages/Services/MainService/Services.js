import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import ServicesBanner from "../ServicesBanner/ServicesBanner";
import ServiceExplore from "../ServicesExplore/ServiceExplore";
import ServicesOffer from "../ServicesOffer/ServicesOffer";

const Services = () => {
  
  return (
    <div>
      <Header />
      <ServicesBanner />
      <ServiceExplore />
      <ServicesOffer />
      <Footer />
    </div>
  );
};

export default Services;
