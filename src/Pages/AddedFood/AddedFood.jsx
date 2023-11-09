import { Button, Label, Modal } from "flowbite-react";
import { useState } from "react";
import swal from "sweetalert";

const AddedFood = ({ addFood }) => {
  const { food_name, price, quantity, image, name,_id } = addFood;
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;

    const newProducts = {
      name,
      quantity,
    };


    fetch(`https://moonstar-restaurant-server.vercel.app/newFood/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal("Updated!", "Order information has been updated!", "success");
        }
      })
  };

  return (
    <tr className="bg-slate-700 dark:bg-gray-800  hover:bg-slate-800 dark:hover:bg-gray-600">
      <td className="w-4 p-4"></td>
      <th
        scope="row"
        className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img className="w-10 h-10 rounded-full" src={image} alt="Jese image" />
        <div className="pl-3">
          <div className="text-base font-semibold text-slate-400">
            {food_name}
          </div>
        </div>
      </th>
      <td className="px-6 py-4 text-base text-slate-400">{quantity}</td>
      <td className="px-6 py-4">
        <div className="flex items-center text-base text-slate-400">
          ${price}
        </div>
      </td>
      <td className="px-6 py-4">
        <div >
          <Button className="p-1" onClick={() => setOpenModal(true)}>Update</Button>
          <Modal className="max-w-xl flex mx-auto"  show={openModal} size="md" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body className="bg-slate-400 rounded-b-lg">
              <div className="space-y-6 ">
                <h3 className="text-xl font-medium text-white text-center">
                  Update order information
                </h3>
                <form onSubmit={handleUpdate} action="">
                  <div className="flex justify-center items-center">
                    <div>
                      <div className="mb-2 block ">
                        <Label htmlFor="email" value="Name" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="name"
                        onChange={(event) => setEmail(event.target.value)}
                        required
                        defaultValue={name}
                        className="rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="email" value="Quantity" />
                      </div>
                      <input
                        type="number"
                        id="number"
                        name="quantity"
                        placeholder="quantity"
                        onChange={(event) => setEmail(event.target.value)}
                        required
                        defaultValue={quantity}
                        className="rounded-md"
                      />
                    </div>
                    
                  </div>
                  <div className="flex justify-center items-center w-full mt-4">
                      <Button className="p-1" type="submit">Update</Button>
                    </div>
                </form>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </td>
    </tr>
  );
};

export default AddedFood;
