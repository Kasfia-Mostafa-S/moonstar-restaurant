import { useEffect, useState } from "react";
import Best from "./Best";

const BestSelling = () => {
  
  const [best, setBest] = useState([])


  const url = `http://localhost:5000/orderFood`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBest(data));
  }, [url]);

  return (
   <div className="bg-black p-40">
    <div className="max-w-6xl mx-auto">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        best.map(food => <Best key={food._id} food={food}></Best>)
      }
    </div>
   </div>
   </div>
  );
};

export default BestSelling;