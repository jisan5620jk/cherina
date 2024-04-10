import About from "../../Componant1/About/About";
import Banner from "../../Componant1/Banner/Banner";
import Blog from "../../Componant1/Blog/Blog";
import Donate from "../../Componant1/Donate/Donate";
import Events from "../../Componant1/Event/Events";
import Feature from "../../Componant1/Feature/Feature";
import Gallary from "../../Componant1/Gallary/Gallary";
import Mission from "../../Componant1/Mission/Mission";
import Project from "../../Componant1/Project/Project";
import Support from "../../Componant1/Support/Support";
import Volunteer from "../../Componant1/Volunteer/Volunteer";

const Home1 = () => {
  return (
    <>
      <Banner />
      <Feature />
      <About />
      <Project />
      <Donate />
      <Volunteer />
      <Support />
      <Events />
      <Mission />
      <Blog />
      <Gallary />
    </>
  );
};

export default Home1;
