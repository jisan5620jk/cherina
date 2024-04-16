// import volunteer from "/public/images/Componant1/volunteer-bg.jpg";
// import donate from "/public/images/Componant1/donate-bg.jpg";

import donating from "/public/images/Componant1/donating.png";
import helpingHand from "/public/images/Componant1/helping-hand.png";

import { ButtonSwipe } from "../Button/Button";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const VolunteerAndDonate = () => {
  return (
    <section
      className={`bg-[url('/public/images/Componant1/VolunteerAndDonate.jpg')] bg-no-repeat bg-center bg-cover `}
    >
      <div className="Container py-20 2xl:py-[110px] flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row items-center justify-between 2xl:justify-around lg:gap-x-5">
        <div className=" xl:w-[475px]">
          <div className="flex items-center ">
            <img src={helpingHand} alt="" />
            <h1 className="text-[19px] sm:text-3xl md:text-[32px] leading-8 md:leading-10 text-white font-extrabold font-Manrope pl-[26px] lg:pr-[40px]">
              Join Us and Become A Volunteer
            </h1>
          </div>
          <p className="text-sm sm:text-base leading-7 text-white font-Manrope pt-6 pb-9">
            Phosfluorescently cultivate enabled relationships without sticky
            distinctively empower next-generation
          </p>
          <ButtonSwipe
            bgColor="bg-white"
            beforeBgColor="before:bg-aquamarine"
            textColor="text-darkSlate"
            hoverTextColor="text-white"
          >
            Become Volunteer
            <MdKeyboardDoubleArrowRight
              className="ml-2 text-PrimaryColor-0 group-hover:text-white transition-all duration-500"
              size={16}
            />
          </ButtonSwipe>
        </div>
        <div className=" xl:w-[475px]">
          <div className="flex items-center">
            <img src={donating} alt="" />
            <h1 className="text-[19px] sm:text-3xl md:text-[32px] leading-8 md:leading-10 text-white font-extrabold font-Manrope pl-[26px] lg:pr-[40px]">
              Start Donating For the Childreens
            </h1>
          </div>
          <p className="text-sm sm:text-base leading-7 text-white font-Manrope pt-6 pb-9">
            Phosfluorescently cultivate enabled relationships without sticky
            distinctively empower next-generation
          </p>
          <ButtonSwipe
            bgColor="bg-white"
            beforeBgColor="before:bg-coral"
            textColor="text-darkSlate"
            hoverTextColor="text-white"
          >
            Donate Now
            <MdKeyboardDoubleArrowRight
              className="ml-2 text-aquamarine group-hover:text-white transition-all duration-500"
              size={16}
            />
          </ButtonSwipe>
        </div>
      </div>
    </section>
  );
};

export default VolunteerAndDonate;
