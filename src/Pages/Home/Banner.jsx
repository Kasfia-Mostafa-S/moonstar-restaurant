import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <div className="min-h-[100vh] w-full bg-black pt-14">
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
          <p className="text-center">
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
      </div>
    </div>
  );
};

export default Banner;
