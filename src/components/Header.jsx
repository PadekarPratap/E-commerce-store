import React, { useEffect, useState } from "react";
import { slides } from "../slides.js";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const changeBackground = () => {
    const isLastImage = currentIndex === slides.length - 1;
    const index = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      changeBackground();
    }, 6000);
    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  return (
    <>
    <div
      className="h-[90vh] relative bg-center bg-no-repeat bg-cover duration-500"
      style={{ backgroundImage: `url(${slides[currentIndex].imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/50 text-white">
        <div className="mt-[8rem] max-w-[1200px] mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-mono">
            BrandName
          </h1>
          <p className="md:text-lg lg:text-2xl font-semibold mb-8 mt-3">
            Get the best food products from a wide range of categories at
            affordable prices!
          </p>
          <button className="bg-orange-500 px-4 py-1 font-medium md:text-2xl">
            Explore Now!
          </button>
        </div>
      </div>
    </div>
    <div className="flex space-x-5 justify-center mt-[-2rem] z-10 relative">
    {slides.map((slide, slideIndex) => {
        return (
            <div key={slide.imageUrl} role="button" onClick={() => setCurrentIndex(slideIndex)}>
            <div className={currentIndex === slideIndex ? "w-2 h-2 bg-white rounded-full border-4 border-blue-950" : "w-2 h-2 bg-white rounded-full"}></div>
          </div>
        );
    })}
    </div>
    </>
  );
};

export default Header;
