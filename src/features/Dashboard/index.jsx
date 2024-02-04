import React from "react";
import Searchbar from "../../components/Searchbar";
import { useArtistID } from "../../hooks/useArtistID";
import { Card, ConfigProvider, theme } from "antd";
import Meta from "antd/es/card/Meta";
import { useTopItems } from "../../hooks/useTopItems";
const { darkAlgorithm } = theme;

const DashboardFeatures = () => {
  const { artist, setSearchInput } = useArtistID();
  const { topMusics } = useTopItems("tracks", 6);

  return (
    <ConfigProvider
      theme={{
        algorithm: darkAlgorithm,
      }}
    >
      <div className="flex md:flex-wrap overflow-x-auto justify-between gap-4 no-scrollbar">
        {topMusics?.map((item, index) => (
          <div
            key={index}
            className="flex shrink-0 gap-4 justify-start items-center w-full md:w-[48%] lg:w-[32%] backdrop-blur-sm hover:bg-black/80 bg-black/60 rounded-md cursor-pointer duration-300"
          >
            <a href={item?.album?.external_urls?.spotify}>
              <img
                alt={item?.name}
                src={item?.album?.images[0]?.url}
                className="size-20 rounded-l-md"
              />
            </a>
            <h1 className="pr-6">{item?.album?.name}</h1>
          </div>
        ))}
      </div>
      <div className="mt-6 ">
        <Searchbar
          setSearchInput={setSearchInput}
          placeholder="What do you want to listen to?"
        />
        <div className="flex flex-wrap justify-between items-center">
          {artist.tracks?.items?.map((item, index) => {
            return (
              <div key={index} className="w-[48%] md:w-[24%] lg:w-[16%]">
                <a href={item?.external_urls?.spotify}>
                  <Card
                    bordered={false}
                    hoverable
                    cover={
                      <img alt={item.name} src={item.album?.images[0].url} />
                    }
                    className="w-full mt-6"
                  >
                    <Meta
                      title={item.name}
                      description={item.artists[0].name}
                    />
                  </Card>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </ConfigProvider>
  );
};

export default DashboardFeatures;
