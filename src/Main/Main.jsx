import About from "../Componant2/About/About";
import Banner from "../Componant2/Banner/Banner";
import Donate from "../Componant2/Donate/Donate";
import Feature from "../Componant2/Feature/Feature";
import Project from "../Componant2/Project/Project";
import Navbar from "../Shared/Navbar/Navbar";


const Main = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Feature />
      <About />
      <Project />
      <Donate />
    </>
  );
};
export default Main;
