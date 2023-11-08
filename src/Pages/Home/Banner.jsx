import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="pt-20 bg-black">
      <div className="min-h-[100vh] w-full  pt-14">
        <div data-aos="fade-left">
          <h1 className="text-white text-9xl font-medium font-DM ml-96">
            Moon Star
          </h1>
        </div>
        <div data-aos="fade-right">
          <h1 className="text-white text-9xl font-medium font-DM ml-[700px]">
            Restaurant
          </h1>
        </div>
        <div
          data-aos="fade-zoom-in"
          className="text-white max-w-7xl mx-auto pt-8"
        >
          <p className="text-center font-San">
            Welcome to our charming restaurant, where culinary delight meets a
            warm and inviting ambiance. <br />
            Our menu boasts a tantalizing array of dishes crafted with the
            finest, locally-sourced ingredients, prepared by our talented chefs.
          </p>
        </div>
        <div data-aos="zoom-in" className="flex justify-center mt-16">
          <video
            className="w-3/4"
            autoPlay
            muted
            loop
            src="/src/assets/vecteezy_knead-the-dough-ingredients-for-the-dough-the-best_14705753_962.mov"
          ></video>
        </div>
        <div className="flex justify-center pt-20">
         <Link to='/foodItems'>
         <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            All Foods Are Here ...
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
