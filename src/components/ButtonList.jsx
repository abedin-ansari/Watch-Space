import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonNames = [
    "Cricket",
    "Movie",
    "Music",
    "Comedy",
    "Live",
    "Cooking",
    "Sports",
    "News",
    "Fashion",
  ];

  return (
    <div className="flex space-x-2">
      {/* Map */}
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}

      {/* Props: recieving in Button.jsx */}
      {/* <Button name="Cricket" />
      <Button name="Movie" />
      <Button name="Music" />
      <Button name="Comedy" />
      <Button name="Live" />
      <Button name="Cooking" /> */}
    </div>
  );
};

export default ButtonList;
