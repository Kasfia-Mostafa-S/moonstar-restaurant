import { useEffect, useState } from "react";
import Best from "./Best";

const BestSelling = () => {
  const [best, setBest] = useState([]);

  const url = `http://localhost:5000/foods`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBest(data));
  }, [url]);

  return (
    <div className="bg-black p-40">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {best.slice(0, 6).map((food) => (
            <Best key={food._id} food={food}></Best>
          ))}
        </div>
      </div>
     <div className='flex justify-center item-center mt-14'>
     <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Show all ...
          </button>
     </div>
    </div>
  );
};

export default BestSelling;
