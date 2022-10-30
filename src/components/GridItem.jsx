import React, { useState, useEffect } from "react";

const GridItem = ({ name, colors, sendGradient }) => {
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    switch (colors.length) {
      case 2:
        setGradient(`linear-gradient(to right,${colors[0]}, ${colors[1]})`);
        break;
      case 3:
        setGradient(
          `linear-gradient(to right,${colors[0]},${colors[1]},${colors[2]})`
        );
        break;
      case 4:
        setGradient(
          `linear-gradient(to right,${colors[0]},${colors[1]},${colors[2]},${colors[3]})`
        );
        break;
      case 5:
        setGradient(
          `linear-gradient(to right,${colors[0]},${colors[1]},${colors[2]},${colors[3]},${colors[4]})`
        );
        break;
      default:
        setGradient(
          `linear-gradient(to right,${colors[0]},${colors[1]},${colors[2]},${colors[3]},${colors[4]},${colors[5]})`
        );
    }
  }, [colors]);

  return (
    <div
      style={{ backgroundImage: gradient }}
      className="lg:h-32 lg:w-72 h-48 w-80 rounded flex justify-center items-center text-black
      hover:drop-shadow-xl hover:scale-105 ease-in-out duration-150 cursor-pointer select-none"
      onDoubleClick={() => {
        sendGradient(gradient);
      }}
    >
      <span className="bg-white px-3">{name}</span>
    </div>
  );
};

export default GridItem;
