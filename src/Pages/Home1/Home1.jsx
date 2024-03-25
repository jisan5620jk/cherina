import About from "../../Componant2/About/About";
import Banner from "../../Componant2/Banner/Banner";
import Blog from "../../Componant2/Blog/Blog";
import Donate from "../../Componant2/Donate/Donate";
import Events from "../../Componant2/Event/Events";
import Feature from "../../Componant2/Feature/Feature";
import Gallary from "../../Componant2/Gallary/Gallary";
import Mission from "../../Componant2/Mission/Mission";
import Project from "../../Componant2/Project/Project";
import Support from "../../Componant2/Support/Support";
import Volunteer from "../../Componant2/Volunteer/Volunteer";

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
