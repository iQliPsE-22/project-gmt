import React, { useState } from "react";
import IMG3 from "../assets/image32.png";
import IMG2 from "../assets/image38.png";
import IMG1 from "../assets/image39.png";
import "../App.css";
import Card from "./Card";

const Carousel = () => {
  const data = [
    {
      src: IMG1,
      heading: "We serve incomparable delicacies",
      content:
        "All the best restaurants with their top menu waiting for you, they can't wait for your order!!",
    },
    {
      src: IMG2,
      heading: "We serve incomparable delicacies",
      content:
        "All the best restaurants with their top menu waiting for you, they can't wait for your order!!",
    },
    {
      src: IMG3,
      heading: "We serve incomparable delicacies",
      content:
        "All the best restaurants with their top menu waiting for you, they can't wait for your order!!",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleLeft = () => {
    setCurrentImage((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleRight = () => {
    setCurrentImage((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="overflow-hidden w-full flex flex-col items-center relative">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {data.map((item, index) => (
          <div
            key={`slide-${index}`}
            className="min-w-full h-auto flex flex-col items-center"
          >
            <img
              src={item.src}
              alt={`image-${index}`}
              className="w-full h-screen object-cover"
            />
            <Card
              key={`card-${index}`}
              handleLeft={handleLeft}
              handleRight={handleRight}
              data={data}
              currentImage={currentImage}
              setCurrentImage={setCurrentImage}
              heading={item.heading}
              content={item.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
