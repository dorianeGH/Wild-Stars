import React, { useEffect } from "react";
import Puzzle from "../components/Puzzle";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./GamePage.css";
import VictoryContext from "../contexts/VictoryContext";
import ChronoContext from "../contexts/ChronoContext";
import Modal from "../components/Modal";
import Timer from "../components/Timer";
import Robot from "../components/Robot";
import { Link } from "react-router-dom";

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

const GamePage = () => {
  const [victory, setVictory] = useState(false);
  const [chronoStarted, setChronoStarted] = useState(false);
  const [cheat, setCheat] = useState(false);
  const [showRobot, setShowRobot] = useState(false);
  const location = useLocation();
  let imgSrc = "";
  let imageHeight = 0;
  let imageWidth = 0;
  if (location.state != null) {
    imgSrc = location.state.url;
    imageHeight = location.state.imageHeight;
    imageWidth = location.state.imageWidth;
  }

  function handleCheatImage() {
    setCheat(!cheat);
  }

  useEffect(() => {
    if (victory) {
      sleep(5000).then(() => {
        setShowRobot(!showRobot);
      });
    }
  }, [victory]);

  return (
    <VictoryContext.Provider value={{ victory, setVictory }}>
      <ChronoContext.Provider value={{ chronoStarted, setChronoStarted }}>
        {victory ? (
          <div className="justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-10 outline-none focus:outline-none">
            <Modal />
          </div>
        ) : null}
        <div className="bg-black">
          <div className="video-container absolute">
            <Link
              to="/"
              className="absolute text-gray-200 text-center text-3xl p-5 font-semibold z-20"
            >
              Home
            </Link>
            <video
              autoPlay
              loop
              muted
              className="absolute w-auto min-w-full min-h-full max-w-none"
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
              <div className="text-center flex flex-col justify-center items-center">
                <div
                  className={
                    cheat
                      ? "block absolute m-auto bg-white bg-opacity-90 p-3 rounded-xl"
                      : "hidden"
                  }
                >
                  <img className="w-96 m-auto" src={imgSrc} alt="cheat" />
                </div>
                <Puzzle
                  imgSrc={imgSrc}
                  imageHeight={imageHeight}
                  imageWidth={imageWidth}
                />
                <button
                  className="w-40 mb-0 tracking-wide text-base text-shadow text-center focus:outline-none"
                  onClick={handleCheatImage}
                >
                  Need help ?
                </button>
              </div>
            </div>
          </div>
        </div>
        {showRobot ? (
          <div className="inset-y-40 fixed z-20">
            <Robot />
          </div>
        ) : null}
      </ChronoContext.Provider>
    </VictoryContext.Provider>
  );
};

export default GamePage;
