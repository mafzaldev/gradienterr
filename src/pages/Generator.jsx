import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { AiOutlineRotateRight } from "react-icons/ai";

import copy from "copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Generator = () => {
  const directions = ["to right", "to left", "to bottom", "to top"];
  const [direction, setDirection] = useState(0);
  const [colors, setColors] = useState({
    color01: "#06b6d4",
    color02: "#3b82f6",
  });

  const [gradient, setGradient] = useState(
    `linear-gradient(${directions[direction]},${colors.color01},${colors.color02})`
  );

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setColors((values) => ({ ...values, [name]: value }));
  };

  const swapColors = () => {
    const tempColor = colors.color01;
    setColors((values) => ({ ...values, color01: colors.color02 }));
    setColors((values) => ({ ...values, color02: tempColor }));
  };

  const changeDirection = (e) => {
    e.preventDefault();
    if (direction < directions.length - 1) {
      setDirection(direction + 1);
    } else setDirection(0);
  };

  const copyToClipboard = () => {
    copy(`background: ${gradient}`);
    notify();
  };

  const notify = () =>
    toast.success("Gradient copied to clipboard!", {
      position: "bottom-center",
      autoClose: 700,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const infoAlert = () =>
    toast.info("Double click on the gradient to copy!", {
      position: "bottom-right",
      autoClose: 400,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  useEffect(() => {
    setGradient(
      `linear-gradient(${directions[direction]},${colors.color01},${colors.color02})`
    );
    // eslint-disable-next-line
  }, [colors, direction]);

  useEffect(() => {
    infoAlert();
  }, []);
  return (
    <div className="flex flex-col">
      <h1 className="text-white mt-24 md:text-4xl text-3xl font-bold text-center">
        Gradient Generator
      </h1>
      <div className="flex md:flex-row flex-col justify-center items-center gap-5 md:my-20 my-12">
        <div
          style={{ backgroundImage: gradient }}
          className={`flex justify-center items-center xl:w-6/12 xl:h-[339px] lg:w-7/12 lg:h-[310px] md:w-8/12 md:h-72 w-11/12 h-64 p-1 rounded
        hover:drop-shadow-2xl cursor-pointer`}
          onDoubleClick={() => {
            copyToClipboard();
          }}
        ></div>
        <div className="md:w-3/12 w-10/12 flex flex-col items-center gap-5">
          <div className="w-10/12 flex md:flex-col flex-row justify-around items-center gap-5">
            <input
              type="color"
              name="color01"
              className="w-32 h-12 rounded cursor-pointer"
              value={colors.color01}
              onChange={handleChange}
            />
            <input
              type="color"
              name="color02"
              className="w-32 h-12 rounded cursor-pointer"
              value={colors.color02}
              onChange={handleChange}
            />
          </div>
          <div className="w-12/12 flex flex-row items-center gap-5">
            <Button
              text={<AiOutlineRotateRight size={20} />}
              handleClick={changeDirection}
            />
            <Button text={"SWAP COLORS"} handleClick={swapColors} />
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Generator;
