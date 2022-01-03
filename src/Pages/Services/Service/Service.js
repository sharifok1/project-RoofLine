import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Service = () => {
  const [serviceCount, setServiceCount] = useState();
  const { receivePageNum } = useAuth();
  const url = "http://localhost:5000/services";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServiceCount(data));
    console.log(serviceCount?.count);
  }, [!serviceCount]);
  const products = useSelector((state) => state.allProducts.products);
  const size = 4;
  // console.log(products.length);
  const pageNumber = Math.ceil(serviceCount?.count / size);

  console.log(products.length);
  receivePageNum(pageNumber);

  const renderList = products.map((product) => {
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
    // console.log(pageNumber);
    return (
      <div key={_id} class="col-xl-6 col-lg-6 col-md-6">
        <div class="services-02-wrapper mb-30">
          <div class="services-02-img f-left mr-35">
            <img className="img-fluid" src={img1} alt="" />
          </div>
          <div class="inner-02-services">
            <div class="services-02-icon">
              <i class="flaticon-roof-3"></i>
            </div>
            <div class="services-02-text">
              <h4>
                <a href="/">Buildup Roofing</a>
              </h4>
              <p>
                But must explain to you how all this mistaken idea of denounce
              </p>
              <a href="/">
                Read More <i class="far fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default Service;
