import React from 'react';

import './ReviewDisplay.css'
const ReviewDisplay = ({review}) => {
    const {image,feedback,name,email}=review;
    console.log(review)
    
    return (
        <div>
             
            <div className='review-card'>
                <div>
                    <img className='review-avater' src={image} alt="" />
                    <img 
                    className='second-img' src='https://i.ibb.co/QCJFXBr/pngwing-com.png' alt="" />
                </div>
                <div className='main-feedback'>
                    <p className='feedback'>{feedback}</p>
                    <br />
                    <p>{name}</p> <br />
                    <span>{email}</span>
                    
                </div>
            </div>
           
        </div>
    );
};

export default ReviewDisplay;