import React, { useEffect, useState } from 'react';
import ReviewDisplay from '../ReviewDisplay/ReviewDisplay';

const ReviewMain = () => {
    const [reviews, setReview] = useState([]);
    useEffect(()=>{
      fetch("http://localhost:5000/reviews")
          .then(res => res.json())
          .then(data =>setReview(data));
          // setRender(1)
          
    },[])
    console.log(reviews)    
    
    return (
        <div className="section-title ml-20 pos-rel mb-50">
        <span className="mt-5">Review</span>
        <div className="container">
          <div className="row">
            {reviews.map(review => (
              <div key= {review._id}>
                 <ReviewDisplay
                 review={review}
                 ></ReviewDisplay>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default ReviewMain;

