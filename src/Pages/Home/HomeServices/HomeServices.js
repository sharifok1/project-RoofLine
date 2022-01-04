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
      .get("http://localhost:5000/services")
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(setProducts(response.data.result));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <div className="py-5">
        <div className="section-title mr-20 pos-rel mb-80 text-center col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
          <h1>Services</h1>
          <span>WHAT WE OFFER</span>
          <h2>We Provides Awesome Roofling Solutions</h2>
          <div className="row">
            <HomeServiceCard></HomeServiceCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
