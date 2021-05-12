import React from "react";
// import { useParams } from "react-router";
import Puzzle from "../components/Puzzle";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./GamePage.css";

const GamePage = () => {
  //components of the page and of the game
  // const { id, url } = useParams();
  // console.log(id);

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
    <div>
        <div>
              <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
              <source src="https://live.staticflickr.com/video/16037006602/402e4e26a3/288p.mp4?s=eyJpIjoxNjAzNzAwNjYwMiwiZSI6MTYyMDc3NjIwNSwicyI6ImMyMWRmNDFkYzVlYjBmZDllZTI3ZGNiYzVkZWVkMWQ2YzhlZTU1NTYiLCJ2IjoxfQ" type="video/mp4" />Your browser does not support the video tag.
              </video>
            <div className="w-full mb-3 pb-3 border-b border-1 border-white">
              <h3 className="text-xl font-semibold text-shadow">Play Now !</h3>
            </div>
            <div>
              <Puzzle
                imgSrc={imgSrc}
                imageHeight={imageHeight}
                imageWidth={imageWidth}
              />
              <p className="mb-3 tracking-wide text-base text-shadow">
                It's your turn jigsaw guys!
              </p>
            </div>
        </div>
    </div>
  );
};

export default GamePage;
