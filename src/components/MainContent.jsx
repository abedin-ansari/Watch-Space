import React from "react";
import MenuItems from "./MenuItems";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContent = () => {
  return (
    <div className="">
      <ButtonList />
      <MenuItems />
      <VideoContainer />
    </div>
  );
};

export default MainContent;
