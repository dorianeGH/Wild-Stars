import './Card.css'

export default function Card()  {
    return (

        <div className="bg-image w-full min-h-screen flex flex-wrap justify-center items-center gap-3 py-5">
    <div className="backdrop w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-gray-300 shadow-lg">
 
      <div className="w-full mb-3 pb-3 border-b border-1 border-white">
        <h3 className="text-xl font-semibold text-shadow">Something Good</h3>
      </div>

      <div>
        <img src="https://i.postimg.cc/SxLx0fHV/bg01.jpg" alt="image1" class="w-full h-48 object-cover mb-2"></img>
        <p className="mb-3 tracking-wide text-base text-shadow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, omnis.
        </p>
        <button className="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
          Detail
        </button>
      </div>
    </div>
    <div className="backdrop w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-white shadow-lg">

      <div cclassName="w-full mb-3 pb-3 border-b border-1 border-white">
        <h3 className="text-xl font-semibold text-shadow">Something Good</h3>
      </div>

      <div>
        <img src="https://i.postimg.cc/J4khxLqf/bg02.jpg" alt="image2" class="w-full h-48 object-cover mb-2"></img>
        <p className="mb-3 tracking-wide text-base text-shadow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, omnis.
        </p>
        <button className="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
          Detail
        </button>
      </div>
    </div>
    <div className="backdrop w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-white shadow-lg">

      <div className="w-full mb-3 pb-3 border-b border-1 border-white">
        <h3 className="text-xl font-semibold text-shadow">Something Good</h3>
      </div>
      <div>
        <img src="https://i.postimg.cc/VNYLzb8w/bg03.jpg" alt="image3" class="w-full h-48 object-cover mb-2"></img>
        <p className="mb-3 tracking-wide text-base text-shadow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, omnis.
        </p>
        <button className="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
          Detail
        </button>
      </div>
    </div>
  </div>

        
    );
    
}