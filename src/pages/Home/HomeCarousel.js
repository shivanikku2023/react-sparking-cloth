import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselData = [
  {
    id: 1,
    image: require('../../assets/images/prod-5.jpg'),
    caption: 'Today Deals',
    description: 'Description Here'
  },
  {
    id: 2,
    image: require('../../assets/images/prod-6.jpg'),
    caption: 'Today Deals',
    description: 'Description Here'
  },
  {
    id: 3,
    image: require('../../assets/images/prod-7.png'),
    caption: 'Today Deals',
    description: 'Description Here'
  },
  {
    id: 4,
    image: require('../../assets/images/prod-9.jpg'),
    caption: 'Today Deals',
    description: 'Description Here'
  }
];

function HomeCarousel () {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {CarouselData.map((slide) => {
          return (
            <Carousel.Item key={slide.id}>
              <img
                className="d-block w-100"
                src={slide.image}
                alt="slider image"
              />
              {/* <Carousel.Caption>
                <h3>{slide.caption}</h3>
                <p>{slide.description}</p>
              </Carousel.Caption> */}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
export default HomeCarousel;
