import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "./Banner";
import SectionTwo from "../sectionTwo/SectionTwo";
import Review from "../Sectionthree/Review";

const Home = () => {
  return (
    <div>
       <HelmetProvider>
      <Helmet>
        <title>Home | MSR</title>
      </Helmet>
      <Banner></Banner>
      <SectionTwo></SectionTwo>
      <Review></Review>
  </HelmetProvider>
    </div>
  );
};

export default Home;
