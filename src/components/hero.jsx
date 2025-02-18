import React, { useState, useEffect } from "react";
import heroimg7 from "../assets/images/heroimg7.jpg";
import heroimg8 from "../assets/images/heroimg8.jpg";

function Hero() {
  const images = [heroimg7, heroimg8];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="relative  w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {/*Background-image*/}
        <div
          className="absolute inset-0 transition-all duration-1000 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        ></div>

        {/*Dark Overlay*/}
        <div className="absolute inset-0 bg-cream bg-opacity-20 flex flex-col items-center justify-center text-center text-mocha p-4">
          <h1 className="text-3xl font-bold font-playfair md:text-5xl lg:text-6xl">
            Welcome to Zawadi Candles. <br />
            <span className="text-lg md:text-xl lg:text-2xl">
              HandCrafted Candles Kama Zawadi Kwako
            </span>
          </h1>

          <button className="mt-14 px-6 py-2 bg-warmBrown text-cream text-sm md:text-lg font-semibold rounded-lg hover:bg-terracotta duration-300 lg:text-xl">
            Shop Now
          </button>
        </div>

        {/* Dots (Indicators) */}
        <div className="absolute bottom-4 flex w-full justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}
export default Hero;
