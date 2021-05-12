import React from "react";
import { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal ? (
        <>
          <div className="bg-gray-300 bg-opacity-80 rounded-2xl relative w-auto my-6 mx-auto max-w-3xl m-20">
            <div className="border-0 shadow-lg rounded-2xl relative flex flex-col w-full p-10 bg-gray-900 bg-opacity-60 outline-none focus:outline-none">
              <h2 className="text-gray-200 text-center text-3xl font-semibold">
                Congratulations 🚀
              </h2>

              <div className="flex items-center justify-end rounded-b">
                <button
                  className="w-44	my-2 mr-0 text-yellow-700 background-transparent font-bold uppercase text-sm outline-none focus:outline-none hover:bg-gray-800  hover:border-transparent"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Play again !
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
