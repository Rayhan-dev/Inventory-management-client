import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/garyvess.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/4 hour.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/12 and a half.png "
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
