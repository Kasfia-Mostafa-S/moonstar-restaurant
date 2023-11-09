import { useLoaderData } from "react-router-dom";
import FoodItem from "./FoodItem";
import { useEffect, useState } from "react";
import ButtonStyle from "../../Styles/Button.css";

const FoodItems = () => {
  const { count } = useLoaderData();
  const [foods, setFoods] = useState([]);
  const [filteredItems, setFilteredItems] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    fetch("https://moonstar-restaurant-server.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  useEffect(() => {
    fetch(
      `https://moonstar-restaurant-server.vercel.app/foods?page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [currentPage, itemsPerPage]);

  return (
    <div className="bg-black">
      <div className="max-w-max mx-auto pt-20 pb-10 ">
        <div className="m-20">
          <form>
            <label
              for="default-search"
              className="mb-2 text-San font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Food name..."
                required
                onChange={(event) => {
                  setFilteredItems(event.target.value);
                }}
              />
              <button
                type="submit"
                className="text-white absolute w-20 h-9 rounded-lg right-2.5 bottom-2.5 bg-emerald-600 hover:bg-emerald-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {foods
            .filter((food) => {
              if (filteredItems == "") {
                return food;
              } else if (food.Food_Name.toLowerCase().includes(filteredItems)) {
                return food;
              }
            })
            .map((food) => (
              <FoodItem key={food._id} food={food}></FoodItem>
            ))}
        </div>

        <div className="pagination ">
          <button onClick={handlePreviousPage}>Previous</button>
          {pages.map((page) => (
            <button
              className={currentPage === page ? "selected" : undefined}
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {page}
            </button>
          ))}
          <button onClick={handleNextPage}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
