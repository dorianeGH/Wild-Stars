import React from 'react';
import { useParams } from "react-router";
import Puzzle from "../components/Puzzle";
import { useLocation } from "react-router-dom";
import './GamePage.css';

const GamePage = () => {
  //components of the page and of the game
  const { id, url } = useParams();
  console.log(id);

  const location = useLocation();
  const imgSrc = location.state != null ? location.state.url : "";
  console.log(imgSrc);
  return (
          <div>
              <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
              <source src="https://live.staticflickr.com/video/16037006602/402e4e26a3/288p.mp4?s=eyJpIjoxNjAzNzAwNjYwMiwiZSI6MTYyMDc3NjIwNSwicyI6ImMyMWRmNDFkYzVlYjBmZDllZTI3ZGNiYzVkZWVkMWQ2YzhlZTU1NTYiLCJ2IjoxfQ" type="video/mp4" />Your browser does not support the video tag.
              </video>
                <div className="w-full mb-3 pb-3 border-b border-1 border-white">
                  <h3 className="text-xl font-semibold text-shadow">Play Now !</h3>
                </div>
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
)};

export default GamePage;
