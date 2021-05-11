import React from 'react';
import './GamePage.css';

const GamePage = () => {
  //components of the page and of the game
  return (
          <div>
             <div className="bg-image w-full min-h-screen flex flex-wrap justify-center items-center gap-3 py-5">
              <div className="backdrop w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-gray-300 shadow-lg">
                {/* header */}
                <div className="w-full mb-3 pb-3 border-b border-1 border-white">
                  <h3 className="text-xl font-semibold text-shadow">Play Now !</h3>
                </div>
                {/* body */}
                <div>
                  <img src="https://media.giphy.com/media/WTuPi9GCylyNZ6Wr56/giphy.gif" alt="jigsaw" className="w-full h-48 object-cover mb-2"/>
                  <p className="mb-3 tracking-wide text-base text-shadow">
                    It's your turn jigsaw guys!
                  </p>
                  <button className="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
)};


export default GamePage