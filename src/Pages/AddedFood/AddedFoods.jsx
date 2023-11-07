import { useLoaderData } from "react-router-dom";

const AddedFoods = () => {

  
const addFoods = useLoaderData()
console.log(addFoods)

  return (
    <div>
      <h2>hello</h2>
    </div>
  );
};

export default AddedFoods;