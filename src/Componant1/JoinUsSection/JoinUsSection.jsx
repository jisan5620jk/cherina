import { FaCheckCircle } from "react-icons/fa";

import SectionHeading from "../SectionHeading/SectionHeading";
import joinUsImg from "/public/images/Componant1/join-us.png";
import shape from "/public/images/Componant1/shape.png";
import Button from "../Button/Button";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const JoinUsSection = () => {
  return (
    <section className="bg-[url('/public/images/Componant1/join-us-bg.jpg')] bg-center bg-cover bg-no-repeat ">
      <div className=" p-5 lg:p-20 2xl:py-[100px] flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row items-center gap-6">
        <figure className="flex-1">
          <img draggable={false} src={joinUsImg} alt="" />
        </figure>
        <div className="flex-1">
          <SectionHeading title="Join Us and Start Donating" />
          <div className="mt-5 w-fit max-w-[580px] font-Manrope ">
            <h1 className="heading-main text-darkSlate">
              Make your Goals Always to Helps{" "}
              <span className="text-PrimaryColor-0">Poor People</span>
            </h1>
            <p className="text-sm sm:text-base leading-7 text-dimGray mt-6">
              Phosfluorescently cultivate enabled relationships without sticky
              practices distinctively empower next-generation e-commerce
            </p>
            <div className="bg-[#fff2ed] px-[30px] py-[25px] rounded-md border-l-[5px] border-coral my-7">
              <p className="text-base sm:text-lg leading-7 text-darkSlate font-medium">
                Helped Fund <span className="text-PrimaryColor-0">24,347</span>{" "}
                Projects in 250 Countries worldwide donated{" "}
                <span className="text-PrimaryColor-0">5 Milion </span>Peoples
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between 2xl:pr-24">
            <div className="mb-10">
              <p className="text-sm sm:text-base leading-7 text-dimGray pb-[15px] flex items-center">
                <FaCheckCircle
                  size={20}
                  className="text-aquamarine mr-[10px]"
                />
                Join Our Charity Team and Helps the People
              </p>
              <p className="text-sm sm:text-base leading-7 text-dimGray flex items-center">
                <FaCheckCircle
                  size={20}
                  className="text-PrimaryColor-0 mr-[10px]"
                />
                Donate Money for Poor Childreens help Educations
              </p>
            </div>
            <figure className="animate-zoomInOut">
              <img draggable={false} src={shape} alt="shape-image" />
            </figure>
          </div>
          <Button bgColor="bg-coral" hoverBgColor="bg-aquamarine">
            Discover More{" "}
            <MdKeyboardDoubleArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
