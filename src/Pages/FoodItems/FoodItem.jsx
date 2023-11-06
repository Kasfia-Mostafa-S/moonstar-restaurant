import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const FoodItem = ({ food }) => {
  const { Food_Name, Food_Image, Food_Category, Price, Quantity, _id } =
    food || [];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
    
      <div className="bg-black" data-aos="fade-up">
        <div className="max-w-sm font-San bg-emerald-600 rounded-tr-full rounded-bl-full shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            className="ml-8 rounded-full h-80 w-80 object-cover p-10"
            src={Food_Image}
            alt=""
          />
          <div className="p-5 flex justify-center items-center gap-3 text-white">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
              Name: {Food_Name}
            </h5>
            <p className="mb-3 font-normal text-white">
              Category: {Food_Category}
            </p>
            <p className="mb-3 font-normal text-white">Price: ${Price}</p>
            <p className="mb-3 font-normal text-white">Quantity: {Quantity}</p>
          </div>
          <Link to={`/foodItems/${_id}`}>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
