import React from "react";
import { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(true);
  //"justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
  return (
    <>
      {showModal ? (
        <>
          {/* <div className="justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"> */}
          <div className="bg-gray-900 bg-opacity-60 relative w-auto my-6 mx-auto max-w-3xl m-20">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-900 bg-opacity-60 outline-none focus:outline-none">
              {/*header*/}
              <h2 className="text-gray-400 text-center text-3xl  font-semibold">
                Congratulations 🚀
              </h2>
              {/*body*/}
              <div className="relative p-4 flex-auto">
                <p className="text-gray-400 text-center text-blueGray-500 text-lg leading-relaxed">
                  You won an image !
                </p>
                <p className="text-gray-400 text-center text-blueGray-500 text-lg leading-relaxed">
                  Get 3 images to get a BIG ONE !!
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end border-t border-solid border-blueGray-200 rounded-b">
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
          {/* </div> */}
          {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
        </>
      ) : null}
    </>
  );
}
