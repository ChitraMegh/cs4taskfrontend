import React from 'react';
import Slider from 'react-slick';
import Card from './cards';

import card1 from './card1.jpg';
import card2 from './card2.jpg';
import card3 from './card3.jpg';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <Card
        image={card1}
        title="Pot 1"
        description="This is Pot 1"
      />
      <Card
        image={card2}
        title="Pot 2"
        description="This is Pot 2"
      />
      <Card
         image={card3}
         title="Pot 1"
         description="This is Pot 3"
      />
     
    
    </Slider>
  );
}


export default Carousel;
