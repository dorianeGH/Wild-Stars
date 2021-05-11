import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(true);
  return (
    <>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-900 bg-opacity-60 outline-none focus:outline-none'>
                {/*header*/}
                <h2 className='text-gray-600 text-center text-3xl p-5 font-semibold'>
                  Congratulations 🚀
                </h2>
                {/*body*/}
                <div className='relative p-4 flex-auto'>
                  <p className='text-gray-500 text-center text-blueGray-500 text-lg leading-relaxed'>
                    You won an image !
                  </p>
                  <p className='text-gray-500 text-center text-blueGray-500 text-lg leading-relaxed'>
                    Get 3 images to get a BIG ONE !!
                  </p>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Play again !
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}
