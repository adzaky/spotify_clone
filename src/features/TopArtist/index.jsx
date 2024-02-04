import ArtistsCarousel from "../../components/Carousel/ArtistsCarousel";
import { Card, ConfigProvider, theme } from "antd";
import { useTopArtists } from "../../hooks/useTopArtists";
import { useTopItems } from "../../hooks/useTopItems";
const { Meta } = Card;
const { darkAlgorithm } = theme;

const TopArtistFeatures = () => {
  const { genre } = useTopItems("artists", 1);
  const { topArtists } = useTopArtists(genre, 20);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full">
        <ArtistsCarousel />
      </div>
      <ConfigProvider
        theme={{
          algorithm: darkAlgorithm,
        }}
      >
        <h1 className="text-2xl w-full mt-6">Top Artists For You</h1>
        <div className="flex w-full">
          <div className="flex flex-wrap justify-between overflow-y-auto rounded-md no-scrollbar">
            {topArtists?.map((item, index) => (
              <div key={index} className="w-[48%] lg:w-[18%]">
                <a href={item?.artists[0]?.external_urls?.spotify}>
                  <Card
                    bordered={false}
                    hoverable
                    cover={
                      <img alt="Artists" src={item?.album?.images[0]?.url} />
                    }
                    className="w-full mt-6"
                  >
                    <Meta title={item?.album?.artists[0]?.name} />
                  </Card>
                </a>
              </div>
            ))}
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default TopArtistFeatures;
