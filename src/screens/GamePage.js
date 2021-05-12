import React from "react";
import Puzzle from "../components/Puzzle";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./GamePage.css";
import VictoryContext from "../contexts/VictoryContext";
import ChronoContext from "../contexts/ChronoContext";
import Modal from "../components/Modal";
import Timer from "../components/Timer";

const GamePage = () => {
  const [victory, setVictory] = useState(false);
  const [chronoStarted, setChronoStarted] = useState(false);
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
      <ChronoContext.Provider value={{ chronoStarted, setChronoStarted }}>
        {victory ? (
          <div className="justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <Modal />
          </div>
        ) : null}
        <div>
          <div className="video-container absolute">
            <video
              autoPlay
              loop
              muted
              className="w-auto min-w-full min-h-full max-w-none"
            >
              <source
                src="https://live.staticflickr.com/video/16037006602/402e4e26a3/288p.mp4?s=eyJpIjoxNjAzNzAwNjYwMiwiZSI6MTYyMDc3NjIwNSwicyI6ImMyMWRmNDFkYzVlYjBmZDllZTI3ZGNiYzVkZWVkMWQ2YzhlZTU1NTYiLCJ2IjoxfQ"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="pt-40 flex flex-wrap justify-center items-center">
            <div className="backdrop rounded p-3 text-white border border-gray-300 shadow-lg bg-gray-900 bg-opacity-60 ">
              {/* header */}
              <div className="w-full mb-3 pb-3 border-b border-1 border-white flex justify-around items-center">
                <h3 className="text-xl font-semibold text-shadow">
                  Play Now !
                </h3>
                <Timer />
              </div>
              {/* body */}
              <div>
                <Puzzle
                  imgSrc={imgSrc}
                  imageHeight={imageHeight}
                  imageWidth={imageWidth}
                />
                <p className="mb-3 tracking-wide text-base text-shadow text-center">
                  It's your turn jigsaw guys!
                </p>
              </div>
            </div>
          </div>
        </div>
      </ChronoContext.Provider>
    </VictoryContext.Provider>
  );
};

export default GamePage;
