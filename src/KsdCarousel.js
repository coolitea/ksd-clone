import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import carousel1 from './assets/images/carousel1.jpg';
import carousel2 from './assets/images/carousel2.jpg';
import carousel3 from './assets/images/carousel3.jpg';
import './KsdCarousel.css';

class KsdCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <React.Fragment className="ksdCarousel">
        <Carousel
          activeIndex={index}
          direction={direction}
          interval={5000}
          onSelect={this.handleSelect}
          className="carousel-inner">
          <Carousel.Item className="item">
            <img
              className="d-block w-100 ksdCarousel"
              src={carousel1}
              // src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h2 className="leap">금융환경 선진화를 </h2>
              <h2 className="leap">한발 앞당길 </h2>
              <h2 className="leap">
                <span className="leap__impact">전자증권제도 </span> 도입!
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="item">
            <img
              className="d-block w-100 ksdCarousel"
              src={carousel2}
              // src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h2 className="blue">마침내,</h2>
              <h2 className="blue__impact">2019년 9월 16일</h2>
              <h2 className="blue">종이증권이 </h2>
              <h2 className="blue">
                <span className="blue__impact">전자증권</span>으로 바뀝니다
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="item">
            <img
              className="d-block w-100 ksdCarousel"
              src={carousel3}
              // src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1 className="green">더 널리, </h1>
              <h1 className="green__impact">세계를 끌어안다</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </React.Fragment>
    );
  }
}

export default KsdCarousel;
