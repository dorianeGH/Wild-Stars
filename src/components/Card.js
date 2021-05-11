import "./Card.css";
import React from "react";

export default function Card({ title, url, id }) {
  return (
    <div className='backdrop w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-gray-300 shadow-lg'>
      <div className='w-full mb-3 pb-3 border-b border-1 border-white'>
        <h3 className='text-xl font-semibold text-shadow'>{title}</h3>
      </div>
      <div>
        <img class='w-full h-48 object-cover mb-2' src={url} alt={title} />
        <p>{id}</p>
      </div>
    </div>
  );
}
