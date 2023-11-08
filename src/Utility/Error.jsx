import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-black">
      <div className="p-40">
        <div>
          <h2 className="text-6xl font-San text-white font-semibold text-center h-[20vh] flex justify-center items-center">
            404
            <br />
            No data found
          </h2>
          <div className=" flex justify-center items-center mt-10 md:mt-0 lg:mt-0">
            <Link to="/">
            <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Go Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;