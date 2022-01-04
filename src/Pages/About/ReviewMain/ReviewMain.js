import React, { useEffect, useState } from "react";
import ReviewDisplay from "../ReviewDisplay/ReviewDisplay";

const ReviewMain = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
    // setRender(1)
  }, []);
  console.log(reviews);

  return (
    <div className="section-title ml-20 pos-rel mb-50">
      <div className="section-title text-center pos-rel mb-75">
        <h1>Says</h1>
        <span>OUR TESTIMONIALS</span>
        <h2>What Our People’s Say About Company</h2>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 py-5">
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
