import { Rating } from "@mui/material";
import React from "react";

import "./ReviewDisplay.css";
const ReviewDisplay = ({ review }) => {
  const { image, feedback, name, email, rating } = review;
  console.log(review);

  return (
    <div>
      <div style={{ minHeight: "400px" }} className="card shadow">
        <div className="card-body">
          <div className="review-card">
            <div>
              <h5 className="card-title fw-bold">{name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
              <Rating
                name="half-rating-read"
                value={`${rating}`}
                precision={0.5}
                readOnly
              />
            </div>
            <img
              style={{
                height: "120px",
                width: "120px",
                marginTop: "-70px",
                marginLeft: "-5px",
              }}
              src={image}
              className="img-fluid rounded-circle p-2"
              alt="..."
            />
          </div>
          <div className="d-flex">
            <p className="card-text fw-bold overflow-auto">
              <span className="fs-3 px-2 text-secondary">
                <i class="fas fa-quote-left"></i>
              </span>
              {feedback?.slice(0, 200)}{" "}
              <span className="text-muted">
                {review?.feedback?.slice(250) && <p>...see more</p>}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDisplay;
