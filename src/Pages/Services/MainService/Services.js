import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import ServicesBanner from "../ServicesBanner/ServicesBanner";
import ServiceExplore from "../ServicesExplore/ServiceExplore";
import ServicesOffer from "../ServicesOffer/ServicesOffer";

const Services = () => {
  const [services, setServices]=useState()
  useEffect(()=>{
    const url ='http://localhost:5000/services'
    fetch(url)
    .then(res => res.json())
    .then(data =>setServices(data))
    },[])
    console.log(services)
  return (
    <div>
      <Header />
      <ServicesBanner />
      <ServiceExplore />
      {
        services.map(service=><ServicesOffer
        key={service._id}
        >
        </ServicesOffer>
          )
      }
      
      <Footer />
    </div>
  );
};

export default Services;
