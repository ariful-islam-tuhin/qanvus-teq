import React from 'react';
import Slider from "react-slick";
import './Slick.css'

const Slick = () => {
  const settings =

  {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className='slick'>
      <Slider {...settings}>
       
        <div>
          <img src="https://abirshop.sg/public/uploads/all/sLm8kde8JTQcwGofZ5UWCvj7BBxaHfOyKumzFEZT.jpg" alt="" />
        </div>
        <div>
          <img src="https://abirshop.sg/public/uploads/all/sLm8kde8JTQcwGofZ5UWCvj7BBxaHfOyKumzFEZT.jpg" alt="" />
        </div>
        <div>
          <img src="https://abirshop.sg/public/uploads/all/sLm8kde8JTQcwGofZ5UWCvj7BBxaHfOyKumzFEZT.jpg" alt="" />
        </div>
        <div>
          <img src="https://abirshop.sg/public/uploads/all/sLm8kde8JTQcwGofZ5UWCvj7BBxaHfOyKumzFEZT.jpg" alt="" />
        </div>



      </Slider>
    </div>
  );
};

export default Slick;


