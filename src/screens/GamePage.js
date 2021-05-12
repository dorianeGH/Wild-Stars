import React from "react";
import Puzzle from "../components/Puzzle";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./GamePage.css";
import VictoryContext from "../contexts/VictoryContext";
import ChronoContext from "../contexts/ChronoContext";
import Modal from "../components/Modal";
import Timer from "../components/Timer";
import { Link } from "react-router-dom";

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
        {victory ? <Modal /> : null}

        <div>
          <div>
            <Link
              to='/'
              className='text-gray-200 text-center text-3xl p-5 font-semibold'
            >
              Home
            </Link>
            <div className='bg-image w-full min-h-screen flex flex-wrap justify-center items-center gap-3 py-5'>
              <div className='backdrop mt-40 bg-white bg-opacity-10 rounded p-3 text-white border border-gray-300 shadow-lg'>
                {/* header */}
                <div className='w-full mb-3 pb-3 border-b border-1 border-white flex justify-around items-center'>
                  <h3 className='text-xl font-semibold text-shadow'>
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
                  <button className='w-full mb-0 tracking-wide text-base text-shadow text-center'>
                    Need help ?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ChronoContext.Provider>
    </VictoryContext.Provider>
  );
};

export default GamePage;
