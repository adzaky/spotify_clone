import React from "react";
import MusicsCarousel from "../../components/Carousel/MusicsCarousel";

const TopMusicFeatures = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full">
        <MusicsCarousel />
      </div>
      <div className="flex mt-6 bg-black w-full">
        <h1>Placeholder Content</h1>
      </div>
    </div>
  );
};

export default TopMusicFeatures;
