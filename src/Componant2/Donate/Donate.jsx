import donateimg from "../../../public/images/Componant2/donate/donate2.jpg";
import donateimg2 from "../../../public/images/Componant2/donate/donate3.jpg";
import ProgressBar from "react-animated-progress-bar";
import { GoClockFill } from "react-icons/go";
import { VscHeart } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import DonateNavigation from "./DonateNavigation";


const Donate = () => {
  const settings = {
    loop: true,
    modules: [Navigation],
    speed: 1500,
    autoplay: true,
  };
  return (
    <section className="py-28">
      <div className="Container">
        <h5 className="sub-title">Start Donating Theme</h5>
        <h1 className="text-HeadingColor-0 xl:text-[39px] 2xl:text-[42px] font-Manrope font-extrabold leading-[52px] mt-6 -mb-12">
          Our Featured
          <span className="text-PrimaryColor-0"> Campaigns</span>
        </h1>
        <Swiper {...settings}>
          <SwiperSlide>
            <div className="flex items-center gap-16 bg-[#fff8f5] rounded-md mt-28">
              <div className="flex-1">
                <img src={donateimg} />
              </div>
              <div className="flex-1 pr-10">
                <h6 className="text-sm font-medium font-Manrope bg-SecondaryColor-0 text-white rounded-3xl py-2 px-6 inline-block">
                  Education
                </h6>
                <h1
                  className="font-Manrope
           text-[28px] font-extrabold leading-9 mt-6 mb-6"
                >
                  Campaign for Buy Medicine <br />
                  for Street Childreen’s
                </h1>
                <p className="font-Manrope text-TextColor-0 pb-8">
                  Phosfluorescently cultivate enabled relationships without
                  sticky empower next-generation e-commerce network
                </p>
                <div>
                  <div className="bg-SecondaryColor-0 px-[6px] py-1 rounded-2xl">
                    <ProgressBar
                      rect
                      width="100%"
                      height="8px"
                      fontColor="#fff"
                      fontSize="17px"
                      leading="10px"
                      margin="0px"
                      rectBorderRadius="10px"
                      fontWeight="600"
                      percentage="50"
                      defColor={{
                        excellent: "#ff5e14",
                        good: "white",
                        fair: "green",
                        poor: "red",
                      }}
                      trackPathColor="#transparent"
                      trackBorderColor="transparent"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <h6 className="font-Manrope text-TextColor-0">
                    Achived:
                    <span className="text-SecondaryColor-0 font-semibold">
                      $50,000
                    </span>
                  </h6>
                  <h6 className="font-Manrope text-TextColor-0">
                    Goal:
                    <span className="text-SecondaryColor-0 font-semibold">
                      $90,000
                    </span>
                  </h6>
                </div>
                <h6 className="font-Manrope flex items-center gap-2 text-HeadingColor-0 text-[15px] mt-7 mb-9">
                  <GoClockFill className="text-SecondaryColor-0 text-lg" /> 150
                  Days Ramaining
                </h6>
                <Link to={"/"}>
                  <button className="primary-btn">
                    Donate Now
                    <VscHeart />
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-16 bg-[#fff8f5] rounded-md mt-28">
              <div className="flex-1">
                <img src={donateimg2} />
              </div>
              <div className="flex-1 pr-10">
                <h6 className="text-sm font-medium font-Manrope bg-SecondaryColor-0 text-white rounded-3xl py-2 px-6 inline-block">
                  Education
                </h6>
                <h1
                  className="font-Manrope
           text-[28px] font-extrabold leading-9 mt-6 mb-6"
                >
                  Campaign for Buy Medicine <br />
                  for Street Childreen’s
                </h1>
                <p className="font-Manrope text-TextColor-0 pb-8">
                  Phosfluorescently cultivate enabled relationships without
                  sticky empower next-generation e-commerce network
                </p>
                <div>
                  <div className="bg-SecondaryColor-0 px-[6px] py-1 rounded-2xl">
                    <ProgressBar
                      rect
                      width="100%"
                      height="8px"
                      fontColor="#fff"
                      fontSize="17px"
                      leading="10px"
                      rectBorderRadius="10px"
                      fontWeight="600"
                      percentage="50"
                      margin="0px"
                      defColor={{
                        excellent: "#ff5e14",
                        good: "white",
                        fair: "green",
                        poor: "red",
                      }}
                      trackPathColor="#transparent"
                      trackBorderColor="transparent"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <h6 className="font-Manrope text-TextColor-0">
                    Achived:
                    <span className="text-SecondaryColor-0 font-semibold">
                      $50,000
                    </span>
                  </h6>
                  <h6 className="font-Manrope text-TextColor-0">
                    Goal:
                    <span className="text-SecondaryColor-0 font-semibold">
                      $90,000
                    </span>
                  </h6>
                </div>
                <h6 className="font-Manrope flex items-center gap-2 text-HeadingColor-0 text-[15px] mt-7 mb-9">
                  <GoClockFill className="text-SecondaryColor-0 text-lg" /> 150
                  Days Ramaining
                </h6>
                <Link to={"/"}>
                  <button className="primary-btn">
                    Donate Now
                    <VscHeart />
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <DonateNavigation />
        </Swiper>
      </div>{" "}
    </section>
  );
};

export default Donate;
