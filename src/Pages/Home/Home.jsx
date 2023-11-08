import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
       <HelmetProvider>
      <Helmet>
        <title>Home | MSR</title>
      </Helmet>
      <Banner></Banner>
  </HelmetProvider>
    </div>
  );
};

export default Home;
