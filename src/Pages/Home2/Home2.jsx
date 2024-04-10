import Blog from "../../Componant1/Blog/Blog";
import BannerSection from "../../Componant2/BannerSection/BannerSection";
import Brand from "../../Componant2/Brand/Brand";
import Events from "../../Componant2/Events/Events";
import Gallary from "../../Componant2/Gallary/Gallary";
import Help from "../../Componant2/Help/Help";
import HelpTheme from "../../Componant2/HelpTheme/HelpTheme";
import JoinUsSection from "../../Componant2/JoinUsSection/JoinUsSection";
import PopularCases from "../../Componant2/PopularCases/PopularCases";
import Support2 from "../../Componant2/Support2/Support2";
import Testimonial from "../../Componant2/Testimonial/Testimonial";
import Volunteer from "../../Componant2/Volunteer/Volunteer";
import VolunteerAndDonate from "../../Componant2/VolunteerAndDonate/VolunteerAndDonate";

const Home1 = () => {
    return (
      <>
        <BannerSection />
        <JoinUsSection />
        <PopularCases />
        <VolunteerAndDonate />
        <HelpTheme />
        <Events />
        <Brand />
        <Testimonial />
        <Gallary/>
        <Volunteer />
        <Support2/>
        <Blog/>
        <Help/>
      </>
    );
};

export default Home1;