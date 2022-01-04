import React, { useEffect, useState } from "react";
import HomeReviews from "./HomeReviews";

const Review = () => {
    const [ratings, setRating] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => setRating(data));
    }, []);
    return (
        <div className="section-title ml-20 pos-rel mb-50">
            <span className="mt-5">Review</span>
            <div className="container">
                <div className="row">
                    {ratings.map((rating) => (
                        <div className="col-lg-4 col-md-6 col-12 mb-4">
                            <HomeReviews key={rating._id} ratings={ratings}></HomeReviews>
                            <HomeReviews></HomeReviews>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Review;
