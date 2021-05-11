import "./Card.css";
import React from "react";
import { Link } from "react-router-dom";
//border-b border-1 border-white
export default function Card({ title, url, id }) {
  return (
    <div className='backdrop w-10/12 md:w-1/4 bg-gray-900 bg-opacity-60 rounded p-3 text-gray-300 shadow-lg transform hover:scale-110 motion-reduce:transform-none '>
      <Link
        to={{
          pathname: `./games/${id}`,
          state: {
            url,
          },
        }}
      >
        <div className='w-full mb-3 pb-3 '>
          <h2 className='text-center font-semibold text-xl text-shadow'>
            {title}
          </h2>
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
