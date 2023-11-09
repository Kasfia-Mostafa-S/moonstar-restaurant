import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";

const OrderItems = () => {
  const orderFood = useLoaderData();
  const { Count, Food_Name, Price, Food_Image, Food_Category } =
    orderFood || [];
  console.log(Count);

  const { user } = useContext(AuthContext);

  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const food_name = form.food_name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const date = form.date.value;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const count = form.count.value;
    const food_category = form.food_category.value;

    const orderInfo = {
      food_category,
      date,
      food_name,
      price,
      quantity,
      name,
      email,
      image,
      count
    };

    // const newCount = { count };

    if (parseInt(quantity) > parseInt(20)) {
      swal("Sorry!", "Doesn't have enough quantity ");
    } else {
      swal("Thank You!", "Hope you love the taste", "success");
    }

    fetch("https://moonstar-restaurant-server.vercel.app/orderFood", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal("Confirm!", "Food has been ordered!", "success");
      });

    fetch(`https://moonstar-restaurant-server.vercel.app/foods/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ Count: orderInfo }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          swal("Updated!", "Order information has been updated!", "success");
        }
      });
  };

  return (
    <div className="bg-black">
      <form onSubmit={handleOrder} className="max-w-7xl mx-auto p-40 h-[100vh]">
        <div className="flex justify-end">
          <img className="w-40 rounded-3xl" src={Food_Image} alt="" />
        </div>
        <input
          hidden
          type="number"
          name="count"
          placeholder=""
          required
          defaultValue={Count}
        />
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="food_category"
            id="food_category"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
            defaultValue={Food_Category}
          />
          <label
            for="food_category"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Food Category
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="food_name"
            id="food_name"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
            defaultValue={Food_Name}
          />
          <label
            for="food_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Food Name
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            name="price"
            id="price"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            defaultValue={Price}
          />
          <label
            for="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Price
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="quantity"
              id="quantity"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Quantity
            </label>
          </div>
          <div>
            <input
              className="bg-slate-800 text-white border-none"
              name="date"
              id="datepicker"
              type="date"
              required
              placeholder="mm/dd/yyyy"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              defaultValue={user.displayName}
            />
            <label
              for="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Customer Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              defaultValue={user.email}
            />
            <label
              for="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Customer Email
            </label>
          </div>
          <div hidden className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="image"
              id="image"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              defaultValue={Food_Image}
            />
            <label
              for="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Picture
            </label>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Order Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderItems;
