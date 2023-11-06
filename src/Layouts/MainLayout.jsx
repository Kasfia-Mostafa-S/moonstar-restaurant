import { Outlet } from "react-router-dom";
import Navbar from "../Pages/HomePage/Navbar";
import Styles from "../Styles/Scroll.css";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;