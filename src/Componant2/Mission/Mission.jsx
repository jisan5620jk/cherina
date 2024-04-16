import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import tabImg from "/public/images/Componant2/mission/tab1.jpg";
import tabImg2 from "/public/images/Componant2/mission/tab2.jpg";
import tabImg3 from "/public/images/Componant2/mission/tab3.jpg";
import tabImg4 from "/public/images/Componant2/mission/tab4.jpg";
import eventShape from "/public/images/Componant2/mission/heart.png";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";

const Mission = () => (
  <section className="bg-[#fff8f5] relative z-[1] before:absolute before:top-0 before:left-0 before:w-full before:h-1/2 before:bg-[url('/public/images/Componant2/mission/mission-bg.png')] before:-z-[1] before:bg-cover before:bg-bottom py-28">
    <img
      src={eventShape}
      className="absolute top-[5%] left-[10%] lg:top-32 lg:left-40 animate-zoomInOut"
    />
    <div className="Container">
      <div className="text-center">
        <h5 className="sub-title before:left-1/2 before:-translate-x-1/2">
          Our Mission
        </h5>
        <h1 className="text-white text-[22px] sm:text-4xl leading-8 md:text-[39px] 2xl:text-[42px] font-Manrope font-extrabold sm:leading-[52px] mt-6">
          Our Mission Vission And
          <br /> Targated
          <span className="text-PrimaryColor-0"> Goals</span>
        </h1>
      </div>
      <Tabs>
        <TabList className="text-center mt-[44px]">
          <Tab className="cursor-pointer mb-8 lg:mb-0 font-Manrope py-3 px-10 rounded-full text-white bg-SecondaryColor-0 inline-block mx-[10px] relative z-[1] before:absolute before:bottom-[-9px] before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-5 before:bg-SecondaryColor-0 before:rotate-45 before:rounded-sm outline-none">
            Our Mission
          </Tab>
          <Tab className="cursor-pointer mb-8 lg:mb-0 font-Manrope py-3 px-10 rounded-full text-white bg-PrimaryColor-0 inline-block mx-[10px] relative z-[1] before:absolute before:bottom-[-9px] before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-5 before:bg-PrimaryColor-0 before:rotate-45 before:rounded-sm outline-none">
            How We Work
          </Tab>
          <Tab className="cursor-pointer mb-8 lg:mb-0 font-Manrope py-3 px-10 rounded-full text-white bg-[#1bc7ed] inline-block mx-[10px] relative z-[1] before:absolute before:bottom-[-9px] before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-5 before:bg-[#1bc7ed] before:rotate-45 before:rounded-sm outline-none">
            Our Vission
          </Tab>
          <Tab className="cursor-pointer mb-8 lg:mb-0 font-Manrope py-3 px-10 rounded-full text-white bg-[#ffd016] inline-block mx-[10px] relative z-[1] before:absolute before:bottom-[-9px] before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-5 before:bg-[#ffd016] before:rotate-45 before:rounded-sm outline-none">
            Goal Achive
          </Tab>
        </TabList>
        <TabPanel>
          <div className="flex flex-col lg:flex-row items-center lg:gap-[62px] py-10 px-10 md:py-[88px] md:px-[56px] rounded-md bg-white mt-[42px] shadow-cases">
            <div className="flex-1 mb-7 lg:mb-0">
              <img src={tabImg} />
            </div>
            <div className="flex-1">
              <h2 className="font-Manrope font-bold text-[28px] text-HeadingColor-0">
                Happily People is our Achive
              </h2>
              <p className="font-Manrope text-TextColor-0 font-normal mt-4 mb-8">
                Completely create leveraged best practices and B2B interfaces
                productivate cutting-edge solutions with go forward supply in a
                Compellingly supply 24/7 relationships
              </p>
              <ul>
                <li className="font-Manrope font-normal text-TextColor-0 flex items-center gap-2 my-4">
                  <FaCircleCheck className="text-PrimaryColor-0 text-xl" />
                  Join Our Charity Team and Helps the
                </li>
                <li className="font-Manrope font-normal text-TextColor-0 flex items-center gap-2 my-4">
                  <FaCircleCheck className="text-PrimaryColor-0 text-xl" />
                  Donate Money for Poor Childreens help
                </li>
                <li className="font-Manrope font-normal text-TextColor-0 flex items-center gap-2 my-4">
                  <FaCircleCheck className="text-PrimaryColor-0 text-xl" />
                  Help for Orphan Kids Healthy foods
                </li>
              </ul>
              <Link to={"/about"}>
                <button className="primary-btn mt-10">
                  Discover More
                  <RiArrowRightDoubleFill />
                </button>
              </Link>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex items-center gap-[62px] py-[88px] px-[56px] rounded-md bg-white mt-[42px] shadow-cases">
            <div className="flex-1">
              <img src={tabImg2} />
            </div>
            <div className="flex-1">
              <h2 className="font-Manrope font-bold text-[28px] text-HeadingColor-0">
                Street Childreen Education
              </h2>
              <p className="font-Manrope text-TextColor-0 font-normal mt-4 mb-8">
                Completely create leveraged best practices and B2B interfaces
                productivate cutting-edge solutions with go forward supply in a
                Compellingly supply 24/7 relationships
              </p>
              <ul>
                <li className="font-Manrope font-normal text-TextColor-0 flex items-center gap-2 my-4">
                  <FaCircleCheck className="text-PrimaryColor-0 text-xl" />
                  Join Our Charity Team and Helps the
                </li>
                <li className="font-Manrope font-normal text-TextColor-0 flex items-center gap-2 my-4">
                  <FaCircleCheck className="text-PrimaryColor-0 text-xl" />
                  Donate Money for Poor Childreens help
                </li>
                <li className="font-Manrope font-normal text-TextColor-0 flex items-center gap-2 my-4">
                  <FaCircleCheck className="text-PrimaryColor-0 text-xl" />
                  Help for Orphan Kids Healthy foods
                </li>
              </ul>
              <Link to={"/about"}>
                <button className="primary-btn mt-10">
                  Discover More
                  <RiArrowRightDoubleFill />
                </button>
              </Link>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex items-center gap-[62px] py-[88px] px-[56px] rounded-md bg-white mt-[42px] shadow-cases">
            <div className="flex-1">
              <img src={tabImg3} />
            </div>
            <div className="flex-1">
              <h2 className="font-Manrope font-bold text-[28px] text-HeadingColor-0">
                Donationg Process System
              </h2>
              <p className="font-Manrope text-TextColor-0 font-normal mt-4 mb-8">
                Completely create leveraged best practices and B2B interfaces
                productivate cutting-edge solutions with go forward supply in a
                Compellingly supply 24/7 relationships
              </p>
              <ul>
                <li className="font-Manrope font-normal text-TextColor-0 flex items-center gap-2 my-4">
                  <FaCircleCheck className="text-PrimaryColor-0 text-xl" />
                  Join Our Charity Team and Helps the
                </li>
                <li className="font-Manrope font-normal text-TextColor-0 flex items-center gap-2 my-4">
                  <FaCircleCheck className="text-PrimaryColor-0 text-xl" />
                  Donate Money for Poor Childreens help
                </li>
                <li className="font-Manrope font-normal text-TextColor-0 flex items-center gap-2 my-4">
                  <FaCircleCheck className="text-PrimaryColor-0 text-xl" />
                  Help for Orphan Kids Healthy foods
                </li>
              </ul>
              <Link to={"/about"}>
                <button className="primary-btn mt-10">
                  Discover More
                  <RiArrowRightDoubleFill />
                </button>
              </Link>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex items-center gap-[62px] py-[88px] px-[56px] rounded-md bg-white mt-[42px] shadow-cases">
            <div className="flex-1">
              <img src={tabImg4} />
            </div>
            <div className="flex-1">
              <h2 className="font-Manrope font-bold text-[28px] text-HeadingColor-0">
                Finished Poverty Our Mission
              </h2>
              <p className="font-Manrope text-TextColor-0 font-normal mt-4 mb-8">
                Completely create leveraged best practices and B2B interfaces
                productivate cutting-edge solutions with go forward supply in a
                Compellingly supply 24/7 relationships
              </p>
              <ul>
                <li className="font-Manrope font-normal text-TextColor-0 flex items-center gap-2 my-4">
                  <FaCircleCheck className="text-PrimaryColor-0 text-xl" />
                  Join Our Charity Team and Helps the
                </li>
                <li className="font-Manrope font-normal text-TextColor-0 flex items-center gap-2 my-4">
                  <FaCircleCheck className="text-PrimaryColor-0 text-xl" />
                  Donate Money for Poor Childreens help
                </li>
                <li className="font-Manrope font-normal text-TextColor-0 flex items-center gap-2 my-4">
                  <FaCircleCheck className="text-PrimaryColor-0 text-xl" />
                  Help for Orphan Kids Healthy foods
                </li>
              </ul>
              <Link to={"/about"}>
                <button className="primary-btn mt-10">
                  Discover More
                  <RiArrowRightDoubleFill />
                </button>
              </Link>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  </section>
);

export default Mission;
