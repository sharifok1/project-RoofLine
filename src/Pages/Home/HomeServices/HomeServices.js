import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../redux/actions/productActions";
import HomeServiceCard from "./HomeServiceCard";

const HomeServices = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fathomless-everglades-06913.herokuapp.com/services")
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(setProducts(response.data.result));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="container">
      <div className="py-5">
        <div class="row">
          <div class="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
            <div class="section-title text-center pos-rel mb-75">
              <h1>Services</h1>
              <span> what we offer</span>
              <h2>We Provides Awesome Roofling Solutions</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <HomeServiceCard></HomeServiceCard>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
