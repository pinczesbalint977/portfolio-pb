
import React from 'react';
import kep1 from '../Pic/2.jpg';
import kep2 from '../Pic/3.jpg';
import kep3 from '../Pic/4.jpg';
import kep4 from '../Pic/5.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';

const CardSlider = () => {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <div className='carditems'>
      <Carousel responsive={responsive}>
          <Card img={kep1} title={"Todo List"} text={"Javascript. Html. Css. Local Storage. Responsive. Theme Changer. "} url={"https://pinczesbalint977.github.io/todolist1/"}/>
          <Card img={kep2} title={"Dog Food Tips"} text={"React. UseState. UseEffect. React Scroll. Components. Svg. React Icons. Css. Responsive. "} url={"https://pinczesbalint977.github.io/dogfoodtips/"}/>
          <Card img={kep3} title={"Video Game List"} text={"Javascript. Html. Css. Keyframes. Animation. Responsive. Rest Api. Search Option. Svg. Bootstrap. ScrollTo."} url={"https://pinczesbalint977.github.io/videogames/"}/>
          <Card img={kep4} title={"Ticket Seller"} text={"Angular. Firebase. Crud. Authentication. Realtime Database. Bootstrap. Components. Responsive. Font Awsome. Css. Router. Search option."} url={"https://bootstrap-e48a6.web.app/dashboard"}/>
      </Carousel>
    </div>
  );
};

export default CardSlider;