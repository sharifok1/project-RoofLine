import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../redux/actions/productActions";
import useAuth from "../../Hooks/useAuth";
import Service from "../Service/Service";
//imported
const ServicesOffer = () => {
  const [page,setPage] = useState(0); //mush
  const size = 4 //must
  const products = useSelector((state) => state);
  const { pageCount } = useAuth();
 
  const dispatch = useDispatch();
 
  const fetchProducts = async () => {
    const response = await axios
      .get(`http://localhost:5000/services?page=${page}&&size=${size}`)
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(setProducts(response.data.result));
    
    // console.log(pageNumber);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);
  // console.log(pageCount);
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
              {
                [...Array(pageCount).keys()]
                .map(number =><
                  button  class="c-btn"
                  className={number === page ? 'selected' : 'c-btn'}
                  key={number}
                  onClick={()=>setPage(number)}
                >{number}
                </button>)
              }
             
            </div>
          </div>
        </div>
      </div>

      <div class="service-area grey-3-bg pt-125 pb-130"></div>
    </div>
  );
};

export default ServicesOffer;
