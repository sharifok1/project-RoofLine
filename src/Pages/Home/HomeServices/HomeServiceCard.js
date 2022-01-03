import { Rating } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomeServiceCard = () => {
  const products = useSelector((state) => state.allProducts.products);
  const showAbleProducts = products.slice(0, 10);
  const renderList = showAbleProducts.map((product) => {
    const {
      _id,
      product_name,
      product_price,
      brand,
      sereen_size,
      rating,
      review,
      cpu,
      detail,
      image1,
    } = product;
    return (
      <div class="col-xl-4 col-lg-4 col-md-6">
        <div class="services-wrapper mb-30">
          <div class="services-img">
            <a href="/">
              <img
                src="https://shtheme.org/demosd/roofline/wp-content/uploads/2021/06/02-1.jpg"
                alt=""
              />
            </a>
            <div class="services-icon">
              <a href="/">
                <i class="fas fa-angle-double-right"></i>
              </a>
            </div>
          </div>
          <div class="services-text text-center">
            <h4>Roofing Cleaning</h4>
            <p>
              Sed perspicis unde omnis iste natus error voluptatem accusantium
              doloreue laudantium totam rem aperiam{" "}
            </p>
            <div class="ser-icon">
              <i class="flaticon-roof-2"></i>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default HomeServiceCard;
