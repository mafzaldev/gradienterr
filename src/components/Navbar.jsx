import React, { useState } from "react";
import Button from "./Button";

import { AiOutlineClose, AiOutlineMenu, AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-20">
      <div className="md:flex items-center justify-between bg-[#131414] py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
          <Link to="/">Gradienter</Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
        >
          {open ? (
            <AiOutlineClose size={25} color={"white"} />
          ) : (
            <AiOutlineMenu size={25} color={"white"} />
          )}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute bg-[#131414] text-white md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9
          transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-md md:my-0 my-7">
            <Link to="/">Home</Link>
          </li>
          <Link to="/library" className="md:ml-8 text-md md:my-0 my-7">
            <Button text={"Explore gradients"} />
          </Link>
          <a href={"https://github.com/mafzaldev"}>
            <AiOutlineGithub
              size={30}
              color={"white"}
              className="md:mx-5 sm:mt-0 mt-5"
            />
          </a>
        </ul>
      </div>
    </div>
  );
}
