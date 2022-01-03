import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../redux/actions/productActions";
import Service from "../Service/Service";

const ServicesOffer = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:5000/services")
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
            <div class="section-title text-center pos-rel mb-75">
              <h1>Services</h1>
              <span> what we offer</span>
              <h2>We Provides Awesome Roofling Solutions</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <Service></Service>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="services-button text-center mt-30">
              <a class="c-btn" href="/">
                <span></span> View All Services <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="service-area grey-3-bg pt-125 pb-130"></div>
    </div>
  );
};

export default ServicesOffer;
