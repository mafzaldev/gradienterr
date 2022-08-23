import React, { useCallback, useEffect, useState } from "react";
import GridItem from "../components/GridItem";
import Modal from "../components/Modal";

const Grid = () => {
  const [gradients, setGradients] = useState([]);
  const [selectedGradient, setSelectedGradient] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const sendGradient = (gradient) => {
    setSelectedGradient(gradient);
    handleModal();
  };

  const handleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const fetchGradients = useCallback(async () => {
    let tempGradients = [];
    const response = await fetch(
      "https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json"
    );
    tempGradients = await response.json();
    const anotherTemp = shuffleGradients(tempGradients);
    setGradients(anotherTemp);
  }, []);

  const shuffleGradients = (array) => {
    let m = array.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  };

  useEffect(() => {
    fetchGradients();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white mt-24 md:text-4xl text-2xl font-bold">
        Gradients Library
      </h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-4 my-10">
        {gradients.map((gradient, index) => (
          <GridItem
            key={index}
            name={gradient.name}
            colors={gradient.colors}
            sendGradient={sendGradient}
          />
        ))}
      </div>
      {showModal && (
        <Modal gradient={selectedGradient} handleClose={handleModal} />
      )}
    </div>
  );
};

export default Grid;
