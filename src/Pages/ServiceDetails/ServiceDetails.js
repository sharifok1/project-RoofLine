import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../../redux/actions/productActions";
import useAuth from "../Hooks/useAuth";

const ServiceDetails = () => {
  const [image, setImage] = useState("");
  console.log(image);
  const product = useSelector((state) => state.product);
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
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [bookingData, setBookingData] = useState({});
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProductData = { ...bookingData };
    newProductData[field] = value;
    setBookingData(newProductData);
  };
  const handleProductDateSubmit = (e) => {
    const booking = {
      ...bookingData,
      name: user.displayName,
      email: user.email,
      condition: "pending",
      product_Detail: product,
    };
    fetch("https://arcane-oasis-37685.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          window.alert("Order SuccessFull ");
          document.getElementById("Form").reset();
          navigate("/dashboard/myOrders");
        }
      });

    e.preventDefault();
  };
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`http://localhost:5000/services/${id}`)
      .catch((err) => {
        console.log("error ", err);
      });
    dispatch(selectedProduct(response.data));
    setImage(response.data.image1);
    console.log(image);
  };
  useEffect(() => {
    if (id && id !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [id]);
  return (
    <div>
      <h1>{_id}</h1>
      <h2>{title}</h2>
    </div>
  );
};

export default ServiceDetails;
