import React from "react";

const VideoCards = ({ info }) => {
  if (!info) return null; // safety check

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-96 shadow-2xl">
      <img className="rounded-lg" src={thumbnails?.high?.url} alt={title} />
      <h3 className="font-bold py-2">{title}</h3>
      <h4>{channelTitle}</h4>
      <p>{statistics?.viewCount || "N/A"} views</p>
    </div>
  );
};

export default VideoCards;
