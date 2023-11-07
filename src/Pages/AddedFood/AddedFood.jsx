const AddedFood = ({ addFood }) => {
  const { food_name, price, quantity,image } = addFood;

  return (
    <tr className="bg-slate-700 dark:bg-gray-800  hover:bg-slate-800 dark:hover:bg-gray-600">
      <td className="w-4 p-4"></td>
      <th
        scope="row"
        className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img
          className="w-10 h-10 rounded-full"
          src={image}
          alt="Jese image"
        />
        <div className="pl-3">
          <div className="text-base font-semibold text-slate-400">{food_name}</div>
        </div>
      </th>
      <td className="px-6 py-4 text-base text-slate-400">{quantity}</td>
      <td className="px-6 py-4">
        <div className="flex items-center text-base text-slate-400">${price}</div>
      </td>
      <td className="px-6 py-4">
        <a
          href="#"
          type="button"
          data-modal-show="editUserModal"
          className="font-medium text-teal-400 hover:underline text-base"
        >
          Update
        </a>
      </td>
    </tr>
  );
};

export default AddedFood;
