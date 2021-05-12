import React from "react";
import Puzzle from "../components/Puzzle";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./GamePage.css";
import VictoryContext from "../contexts/VictoryContext";
import Modal from "../components/Modal";

const GamePage = () => {
  const [victory, setVictory] = useState(false);
  const location = useLocation();
  let imgSrc = "";
  let imageHeight = 0;
  let imageWidth = 0;
  if (location.state != null) {
    imgSrc = location.state.url;
    imageHeight = location.state.imageHeight;
    imageWidth = location.state.imageWidth;
  }
  return (
    <VictoryContext.Provider value={{ victory, setVictory }}>
      {victory ? <Modal /> : null}
      <div>
        <div>
          <div className="bg-image w-full min-h-screen flex flex-wrap justify-center items-center gap-3 py-5">
            <div className="backdrop mt-40 bg-white bg-opacity-10 rounded p-3 text-white border border-gray-300 shadow-lg">
              {/* header */}
              <div className="w-full mb-3 pb-3 border-b border-1 border-white">
                <h3 className="text-xl font-semibold text-shadow">
                  Play Now !
                </h3>
              </div>
              {/* body */}
              <div>
                <Puzzle
                  imgSrc={imgSrc}
                  imageHeight={imageHeight}
                  imageWidth={imageWidth}
                />
                <p className="mb-3 tracking-wide text-base text-shadow">
                  It's your turn jigsaw guys!
                </p>
                {/* <button className="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
                Back
              </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </VictoryContext.Provider>
  );
};

export default GamePage;
