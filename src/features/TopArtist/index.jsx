import ArtistsCarousel from "../../components/Carousel/ArtistsCarousel";

const TopArtistFeatures = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full">
        <ArtistsCarousel />
      </div>
      <div className="flex mt-6 bg-black w-full">
        <h1>Placeholder Content</h1>
      </div>
    </div>
  );
};

export default TopArtistFeatures;
