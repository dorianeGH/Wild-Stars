import "./Card.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Card({ title, url, id }) {
  return (
    <div className='backdrop w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-gray-300  shadow-lg transform hover:scale-110 motion-reduce:transform-none '>
      <Link to={`./games/${id}`}>
        <div className='w-full mb-3 pb-3 border-b border-1 border-white'>
          <h2 className='text-center font-semibold text-shadow'>{title}</h2>
        </div>
        <div>
          <img
            className='w-full h-48 object-cover mb-2'
            src={url}
            alt={title}
          />
        </div>
      </Link>
    </div>
  );
}
