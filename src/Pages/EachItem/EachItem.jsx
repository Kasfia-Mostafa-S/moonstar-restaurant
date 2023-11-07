import { Link, useLoaderData } from "react-router-dom";

const EachItem = () => {
  const eachItem = useLoaderData();
  const {
    Food_Name,
    Food_Image,
    Food_Category,
    Price,
    Made_By,
    Food_Origin,
    Description,
    _id
  } = eachItem || [];
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto flex justify-center items-center h-[100vh] bg-black">
      <div className="flex flex-col w-3/5 font-San items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover m-5 rounded-full h-96 md:h-auto w-60 "
          src={Food_Image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {Food_Name}
          </h5>
          <p>Category:  {Food_Category}</p>
          <p>Price:  ${Price}</p>
          <p>Made By:  {Made_By}</p>
          <p>Origin:  {Food_Origin}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {Description}
          </p>
       <div className="flex">
      <div>
      <Link to={`/order/${_id}`}>
         <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Add
          </button>
         </Link>
      </div>
        <div>
        <Link to={`/orderItems/${_id}`}>
         <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Order
          </button>
         </Link>
        </div>
       </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EachItem;
