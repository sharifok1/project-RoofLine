import { Rating } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Service = () => {
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
      // <div key={_id} className="col">
      //   <div>
      //     <div className="card shadow" style={{ minHeight: "450px" }}>
      //       <div
      //         style={{ minHeight: "215px" }}
      //         className="d-flex justify-content-center align-items-center"
      //       >
      //         <img src={image1} className="card-img img-fluid p-1" alt="..." />
      //       </div>
      //       <div className="card-body border-top">
      //         <h5>${product_price}</h5>
      //         <h6 className="card-title">{product_name?.slice(0, 50)} ...</h6>
      //         <Rating
      //           style={{ fontSize: "15px" }}
      //           name="half-rating-read"
      //           value={`${rating}`}
      //           precision={0.5}
      //           readOnly
      //         />
      //       </div>
      //       <Link
      //         className="fw-bold"
      //         style={{ textDecoration: "none", color: "goldenrod" }}
      //         to={`/details/${_id}`}
      //       >
      //         <div
      //           className="text-center py-2"
      //           style={{ backgroundColor: "#dbe3e3" }}
      //         >
      //           <i className="fas fa-info-circle"></i> Detail
      //         </div>
      //       </Link>
      //     </div>
      //   </div>
      // </div>
      <div key={_id} class="col-xl-6 col-lg-6 col-md-6">
        <div class="services-02-wrapper mb-30">
          <div class="services-02-img f-left mr-35">
            <img className="img-fluid" src={image1} alt="" />
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
