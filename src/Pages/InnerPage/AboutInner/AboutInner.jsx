import About from "../../../Componant1/About/About";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import AboutService from "./AboutService";
import Mission from "../../../Componant1/Mission/Mission";
import AboutVolunteer from "./AboutVolunteer";
import AboutSupport from "./AboutSupport";

const AboutInner = () => {
  return (
    <>
      <Breadcamp
        breadCampTitle={"About Us"}
        breadCampLink={"About Us"}
        url={"/about"}
      />
      <About />
      <AboutService />
      <Mission />
      <AboutVolunteer />
      <AboutSupport />
    </>
  );
};

export default AboutInner;
