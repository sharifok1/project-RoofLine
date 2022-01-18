// import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./../Services.css";
const Service = () => {
  const [serviceCount, setServiceCount] = useState();
  const { receivePageNum } = useAuth();
  const url = "https://fathomless-everglades-06913.herokuapp.com/services";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServiceCount(data));
    console.log(serviceCount?.count);
  }, [!serviceCount]);
  const products = useSelector((state) => state.allProducts.products);
  const size = 4;
  // console.log(products.length);
  let pageNumber = 0;
  if (serviceCount) {
    pageNumber = Math.ceil(serviceCount.count / size);
  }

  console.log(products.length);
  receivePageNum(pageNumber);
  console.log(pageNumber);

  const renderList = products.map((product) => {
    const {
      _id,
      // name,
      title,
      details,
      // details2,
      // rating,
      // review,
      img1,
      // img2,
      // img3,
    } = product;
    // console.log(pageNumber);
    return (
      <div key={_id} className="col-xl-6 col-lg-6 col-md-6">
        <div className="services-02-wrapper mb-30">
          <div className="services-02-img f-left mr-35">
            <img className="img-fluid img-180" src={img1} alt="" />
          </div>
          <div className="inner-02-services">
            <div className="services-02-icon">
              <i className="flaticon-roof-3"></i>
            </div>
            <div className="services-02-text">
              <h4>
                <a href="/">{title}</a>
              </h4>
              <p className="">{details?.slice(0, 100)}</p>
              <Link
                className="fw-bold"
                style={{ textDecoration: "none" }}
                to={`/services/${_id}`}
              >
                Read More <i className="far fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default Service;
