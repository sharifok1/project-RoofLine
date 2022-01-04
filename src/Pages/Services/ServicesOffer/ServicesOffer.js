import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../redux/actions/productActions";
import useAuth from "../../Hooks/useAuth";
import Service from "../Service/Service";
//imported
const ServicesOffer = () => {
  const [page, setPage] = useState(0); //mush
  const size = 4; //must
  const products = useSelector((state) => state);
  const { pageCount } = useAuth();
  const getCount = pageCount;
  console.log(pageCount);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get(
        `https://fathomless-everglades-06913.herokuapp.com/services?page=${page}&&size=${size}`
      )
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(setProducts(response.data.result));

    // console.log(response.data.count);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);
  // console.log(pageCount);
  return (
    <div>
      <div className="service-area grey-3-bg pt-125 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="section-title text-center pos-rel mb-75">
                <h1>Services</h1>
                <span> what we offer</span>
                <h2>We Provides Awesome Roofling Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <Service></Service>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="services-button text-center mt-30">
                {[...Array(getCount)?.keys()].map((number) => (
                  <button
<<<<<<< HEAD
                    // class="c-btn"
=======
                    className="c-btn"
>>>>>>> 51c424eb4172183d6380e7bf6f71f098a9ce55b7
                    className={number === page ? "selected" : "c-btn"}
                    key={number}
                    onClick={() => setPage(number)}
                  >
                    {number}
                    {console.log(number)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOffer;
