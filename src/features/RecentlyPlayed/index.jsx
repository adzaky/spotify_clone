import React, { useEffect } from "react";
import { Card, ConfigProvider, theme } from "antd";
import { useRecentlyPlayed } from "../../hooks/useRecentlyPlayed";
const { Meta } = Card;
const { darkAlgorithm } = theme;

const RecentlyPlayedFeatures = () => {
  const { data, getRecentlyPlayed } = useRecentlyPlayed();

  useEffect(() => {
    getRecentlyPlayed();
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: darkAlgorithm,
      }}
    >
      <h1 className="text-2xl">Recently Played</h1>
      <div className="flex flex-wrap justify-between gap-4 mt-4 overflow-y-auto rounded-md no-scrollbar">
        {data?.map((item, index) => (
          <div key={index}>
            <Card
              bordered={false}
              hoverable
              cover={
                <img
                  alt={item.track?.artists[0]?.name}
                  src={item.track?.album?.images[0]?.url}
                />
              }
              className="w-56"
            >
              <Meta
                title={item.track?.name}
                description={item.track?.album?.artists[0]?.name}
              />
            </Card>
          </div>
        ))}
      </div>
    </ConfigProvider>
  );
};

export default RecentlyPlayedFeatures;
