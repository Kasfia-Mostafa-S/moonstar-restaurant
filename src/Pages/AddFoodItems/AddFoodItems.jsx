import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";

const AddFoodItems = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleAddItem = (event) => {
    event.preventDefault();
    const form = event.target;
    const Food_Name = form.Food_Name.value;
    const Food_Image = form.Food_Image.value;
    const Food_Category = form.Food_Category.value;
    const Price = form.Price.value;
    const Quantity = form.Quantity.value;
    const Made_By = form.Made_By.value;
    const Description = form.Description.value;

    const newFood = {
      Food_Name,
      Food_Image,
      Food_Category,
      Price,
      Quantity,
      Made_By,
      Description
    };
    console.log(newFood)

    fetch("http://localhost:5000/foods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal("Confirm!", "New food has added!", "success");
      });
  };

  return (
    <div className="bg-black p-20">
      <div className="max-w-3xl mx-auto p-10 font-San bg-teal-700 rounded-lg">
        <form onSubmit={handleAddItem}>
          <div className="mb-6">
            <label className="block text-white mb-2 text-sm font-medium">
              Food Name
            </label>
            <input
              name="Food_Name"
              type="text"
              id="foodName"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="food name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-white">
              Food Image
            </label>
            <input
              name="Food_Image"
              type="text"
              id="image"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="image link"
              required
            />
          </div>
         <div className="flex gap-3">
         <div className="mb-6 w-1/2">
            <label className="block mb-2 text-sm font-medium text-white">
              Food Category
            </label>
            <input
              name="Food_Category"
              type="text"
              id="foodCategory"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="category"
              required
            />
          </div>
         <div className="mb-6 w-1/2">
            <label className="block mb-2 text-sm font-medium text-white">
              Food Origin
            </label>
            <input
              name="Food_Origin"
              type="text"
              id="origin"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="origin"
              required
            />
          </div>
         </div>
          <div className="flex gap-3">
            <div className="mb-6 w-1/2">
              <label className="block mb-2 text-sm font-medium text-white">
                Price
              </label>
              <input
                name="Price"
                type="text"
                id="price"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="price"
                required
              />
            </div>
            <div className="mb-6 w-1/2">
              <label className="block mb-2 text-sm font-medium text-white">
                Quantity
              </label>
              <input
                name="Quantity"
                type="number"
                id="quantity"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="quantity"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-white">
              Chef Name
            </label>
            <input
              name="Made_By"
              type="text"
              id="madeBy"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="chef name"
              required
            />
          </div>
          <div className="flex gap-3">
            <div className="mb-6 w-1/2">
              <label className="block mb-2 text-sm font-medium text-white">
                Item Added By
              </label>
              <input
                name="UserName"
                type="text"
                id="userName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="user name"
                required
                defaultValue={user.displayName}
              />
            </div>
            <div className="mb-6 w-1/2">
              <label className="block mb-2 text-sm font-medium text-white">
                Email Address
              </label>
              <input
                name="UserEmail"
                type="email"
                id="userEmail"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="user email"
                required
                defaultValue={user.email}
              />
            </div>
          </div>
          <div>
              <label
                className="block mb-2 text-sm font-medium text-white"
              >
                Description
              </label>
              <textarea
              name="Description"
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="description..."
              ></textarea>
            </div>
         <div className="mt-4">
         <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Add Item
            </span>
          </button>
         </div>
        </form>
      </div>
    </div>
  );
};

export default AddFoodItems;
