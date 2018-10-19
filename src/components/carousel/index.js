import React from 'react';
import Slider from 'react-slick';

export class Carousel extends React.PureComponent {
  render() {
    const settings = {
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    const imgSets = ['http://placekitten.com/g/400/200', 'http://placekitten.com/g/400/200'];

    return (
      <div>
        <Slider {...settings}>
          {imgSets.map((value, index) => (
            <div key={`${value}-${index}`}>
              <img src={value} alt={value} style={{ width: '7.1rem', height: '2.4rem' }} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
