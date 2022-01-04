import { Rating } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./../Home.css";

const HomeServiceCard = () => {
  const products = useSelector((state) => state.allProducts.products);
  const showAbleProducts = products.slice(0, 3);
  const renderList = showAbleProducts.map((product) => {
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
    } = product;
    return (
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="services-wrapper mb-30">
          <div className="services-img">
            <a href="/">
              <img className="img-fluid" src={img1} alt="" />
            </a>
            <div className="services-icon">
              <a href="/">
                <i className="fas fa-angle-double-right"></i>
              </a>
            </div>
          </div>
          <div className="services-text text-center">
            <h4>{name}</h4>
            <p>{title}</p>
            <div className="ser-icon">
              <i className="flaticon-roof-2"></i>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default HomeServiceCard;
