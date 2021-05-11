import "./Card.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Card({ title, url, id }) {
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  function handleSize(image) {
    if (image) {
      setImageWidth(image.naturalWidth);
      setImageHeight(image.naturalHeight);
      console.log(imageWidth);
      console.log(imageHeight);
    }
  }

  return (
    <div className="backdrop w-10/12 md:w-1/4 bg-gray-900 bg-opacity-60 rounded p-3 text-gray-300 shadow-lg transform hover:scale-110 motion-reduce:transform-none ">
      <Link
        to={{
          pathname: `./games/${id}`,
          state: {
            url,
            imageWidth,
            imageHeight,
          },
        }}
      >
        <div className="w-full mb-3 pb-3 ">
          <h2 className="text-center font-semibold text-xl text-shadow">
            {title}
          </h2>
        </div>
        <div>
          <img
            className="w-full h-48 object-cover mb-2"
            ref={(image) => {
              handleSize(image);
            }}
            src={url}
            alt={title}
          />
        </div>
      </Link>
    </div>
  );
}
