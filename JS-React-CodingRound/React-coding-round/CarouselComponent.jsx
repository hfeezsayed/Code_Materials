import React, { useState } from "react";
import bannerKids from "../src/assets/banner_kids.png";
import bannerMens from "../src/assets/banner_mens.png";
import bannerWomen from "../src/assets/banner_women.png";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div>
      <img
        src={images[currentIndex]}
        alt="carousel"
        style={{ width: "100%" }}
      />
      <br />
      <button onClick={goToPrev}>Prev</button>
      <button onClick={goToNext}>Next</button>
    </div>
  );
};

function App() {
  const images = [bannerKids, bannerMens, bannerWomen];
  return (
    <div className="container m-4 text-center">
      <h1>Carousel</h1>
      <Carousel images={images} />
    </div>
  );
}

export default App;
