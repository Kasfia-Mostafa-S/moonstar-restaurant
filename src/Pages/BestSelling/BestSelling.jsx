import { useEffect, useState } from "react";
import Best from "./Best";

const BestSelling = () => {
  const [best, setBest] = useState([])


useEffect(()=>{
  fetch('/best.json')
  .then(res => res.json())
  .then(data => setBest(data))
})

  return (
   <div className="bg-black">
    <div className="max-w-6xl mx-auto">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        best.map(food => <Best key={food.id} food={food}></Best>)
      }
    </div>
   </div>
   </div>
  );
};

export default BestSelling;