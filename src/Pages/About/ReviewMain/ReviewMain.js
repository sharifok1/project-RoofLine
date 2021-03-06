import React, { useEffect, useState } from "react";
import ReviewDisplay from "../ReviewDisplay/ReviewDisplay";

const ReviewMain = ({ pageNumber }) => {
  const [reviews, setReview] = useState([]);
  console.log(pageNumber);
  const [page, setPage] = useState(0); //mush
  // const [pageNumber, setPageNumber] = useState();
  const size = 2;
  // const url = "https://fathomless-everglades-06913.herokuapp.com/reviews";

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setPageNumber(data.count / size));
  //   console.log(pageNumber);
  // }, [!pageNumber]);
  useEffect(() => {
    fetch(
      `https://fathomless-everglades-06913.herokuapp.com/reviews?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setReview(data.result));
  }, [page]);

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
      <div className="services-button text-center mt-30 mb-5">
        {pageNumber &&
          [...Array(pageNumber)?.keys()].map((number) => (
            <button
              className="c-btn"
              className={number === page ? "selected" : "c-btn"}
              key={number}
              onClick={() => setPage(number)}
            >
              {number}
            </button>
          ))}
      </div>
    </div>
  );
};

export default ReviewMain;
