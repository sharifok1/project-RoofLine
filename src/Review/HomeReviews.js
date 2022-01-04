import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const HomeReviews = ({ ratings }) => {
  //   const { ratin, name, image } = ratings;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="card border-0 shadow">
        <Carousel
          responsive={responsive}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
        >
          <div
            className="card-body"
            style={{
              marginLeft: "15px",
              borderTop: "3px solid #f15743",
            }}
          >
            <img
              src=""
              alt=""
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginTop: "-50px",
              }}
            />
            <p>hello</p>
            <p>not ok but work</p>
            <span>23.54</span>
            <br />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomeReviews;
