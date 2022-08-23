import React from "react";

const Button = ({ text, handleClick }) => {
  return (
    <button
      type="button"
      className="bg-white hover:bg-gray-100 text-gray-800 font-bold md:text-md text-sm py-2 px-4 border border-gray-400 rounded shadow
      hover:drop-shadow-xl hover:scale-105 ease-in-out duration-100 cursor-pointer"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
