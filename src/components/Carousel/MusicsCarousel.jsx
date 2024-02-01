import React from "react";
import { Carousel } from "antd";
import { useTopItems } from "../../hooks/useTopItems";

const MusicsCarousel = () => {
  const { topMusics } = useTopItems("tracks", 10);

  return (
    <Carousel autoplay autoplaySpeed={5000} draggable fade>
      {topMusics?.map((item, index) => (
        <div
          className="w-full backdrop-blur-sm bg-black/60 rounded-3xl p-4"
          key={index}
        >
          <div className="flex justify-between items-center text-white">
            <h1 className="ml-4 text-3xl">{item?.name}</h1>
            <img
              src={item?.album?.images[0]?.url}
              alt="Artist"
              className="rounded-full size-32 mr-4"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default MusicsCarousel;
