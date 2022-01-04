import React, { useEffect, useState } from "react";
import ReviewDisplay from "../ReviewDisplay/ReviewDisplay";

const ReviewMain = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("https://fathomless-everglades-06913.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
    // setRender(1)
  }, []);
  console.log(reviews);

  return (
    <div className="section-title ml-20 pos-rel mb-50">
      <div className="row">
        <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
          <div className="section-title text-center pos-rel mb-75">
            <h1>Says</h1>
            <span>OUR TESTIMONIALS</span>
            <h2>What Our People’s Say About Company</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-5">
          {reviews.map((review) => (
            <div key={review._id} className="col my-4">
              <ReviewDisplay review={review}></ReviewDisplay>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewMain;
