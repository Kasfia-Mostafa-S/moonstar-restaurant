import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import UserOrder from "./UserOrder";

const USerOrders = () => {

  const { user } = useContext(AuthContext);

  const [eachEmail, setEachEmail] = useState([]);

  const url = `http://localhost:5000/orderFood?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEachEmail(data));
  }, []);

  return (
     <div className="bg-black">
      <div className=" max-w-7xl mx-auto h-[100vh] font-San  p-40">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-slate-900 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4" ></th>
                <th scope="col" className="px-6 py-3 text-sm text-white">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-sm text-white">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3 text-sm text-white">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-sm text-white">
                  
                </th>
              </tr>
            </thead>
            <tbody>
              {eachEmail.map((addFood) => (
                <UserOrder key={addFood._id} addFood={addFood}></UserOrder>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default USerOrders;