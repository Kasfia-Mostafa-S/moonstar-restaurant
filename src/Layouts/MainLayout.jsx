import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Pages/HomePage/Navbar";
import Styles from "../Styles/Scroll.css";
import Footer from "../Pages/HomePage/Footer";
import Loader from "../Utility/Loader";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar></Navbar>
      {navigation.state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
