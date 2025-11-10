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

export const AdVideoCard = ({ info }) => {
  // Higher Order Component (used in VideoContainer.jsx): Takes a component and returns a new component with additional features or styling existing component.
  return (
    <div className="relative p-2 m-2 border-2 border-amber-500 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg shadow-2xl">
      <div className="absolute top-2 left-2 z-10 bg-amber-500 text-white font-bold px-3 py-1 rounded-md text-xs shadow-lg">AD</div>
      <VideoCards info={info} />
    </div>
  );
};

export default VideoCards;
