import React from "react";
import Button from "./Button";
import copy from "copy-to-clipboard";
import { VscChromeClose } from "react-icons/vsc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ gradient, handleClose }) => {
  const notify = () =>
    toast.success("Gradient copied to clipboard", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const copyToClipboard = () => {
    copy(gradient);
    notify();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="relative bg-white text-black font-bold text-lg rounded md:p-24 py-20 px-12 flex flex-col gap-5">
        <span
          className="absolute right-3 top-3 cursor-pointer"
          onClick={() => handleClose()}
        >
          <VscChromeClose size={25} />
        </span>
        {gradient}
        <Button text={"Copy to clipboard"} handleClick={copyToClipboard} />
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

export default Modal;
