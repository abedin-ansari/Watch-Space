import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Body;
