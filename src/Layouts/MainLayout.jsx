import { Outlet } from "react-router-dom";
import Navbar from "../Pages/HomePage/Navbar";
import Styles from "../Styles/Scroll.css";
import Footer from "../Pages/HomePage/Footer"

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;