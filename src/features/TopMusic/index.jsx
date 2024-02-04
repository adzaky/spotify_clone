import React from "react";
import MusicsCarousel from "../../components/Carousel/MusicsCarousel";
import { useTopItems } from "../../hooks/useTopItems";
import { Card, ConfigProvider, theme } from "antd";
const { Meta } = Card;
const { darkAlgorithm } = theme;

const TopMusicFeatures = () => {
  const { topMusics } = useTopItems("tracks", 20);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full">
        <MusicsCarousel />
      </div>
      <ConfigProvider
        theme={{
          algorithm: darkAlgorithm,
        }}
      >
        <h1 className="text-2xl w-full mt-6">Top Tracks For You</h1>
        <div className="flex w-full">
          <div className="flex flex-wrap justify-between overflow-y-auto rounded-md no-scrollbar">
            {topMusics?.map((item, index) => (
              <div key={index} className="w-[48%] lg:w-[18%]">
                <a href={item?.external_urls?.spotify}>
                  <Card
                    bordered={false}
                    hoverable
                    cover={
                      <img alt="Tracks" src={item?.album?.images[0]?.url} />
                    }
                    className="w-full mt-6"
                  >
                    <Meta
                      title={item?.name}
                      description={item?.artists[0]?.name}
                    />
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

export default TopMusicFeatures;
