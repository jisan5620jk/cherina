import { useState } from "react";
import FsLightbox from "fslightbox-react";
import ProgressBar from "react-animated-progress-bar";
import { BsFillClockFill } from "react-icons/bs";
import { FaCirclePlay } from "react-icons/fa6";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Support2 = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className="pt-48 pb-28 md:py-28 bg-[url('/public/images/Componant1/donate2.jpg')] bg-right md:bg-center bg-cover bg-no-repeat">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center relative">
          <div>
            <button
              className="text-7xl absolute -top-[7rem] left-0 md:-top-8 md:left-[30%] text-white"
              onClick={() => setToggler(!toggler)}
            >
              <FaCirclePlay />
            </button>
            <FsLightbox
              toggler={toggler}
              sources={[
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              ]}
            />
          </div>
          <div>
            <h5 className="sub-title">Donate for Urgent Cause</h5>
            <h1 className="text-white text-[22px] sm:text-4xl leading-8 md:text-[36px] 2xl:text-[42px] font-Manrope font-extrabold sm:leading-[52px] mt-6">
              Support for Eating Funds <br />
              Hungry
              <span className="text-PrimaryColor-0"> Peoples</span>
            </h1>
            <p className="font-Manrope text-TextColor-0 font-medium">
              Completely create leveraged best practices and B2B interfaces
              events was productivate cutting-edge solutions with go
            </p>
            <div className="mt-5 border-b border-BorderColor-0 pb-10 mb-10">
              <div className="px-[6px] py-1 rounded-2xl">
                <ProgressBar
                  rect
                  width="100%"
                  height="9px"
                  fontColor="#53c99f"
                  fontSize="20px"
                  margin="0px"
                  rectBorderRadius="0"
                  fontWeight="700"
                  percentage="50"
                  defColor={{
                    excellent: "#ff5e14",
                    good: "#fe7f4c",
                    fair: "green",
                    poor: "red",
                  }}
                  trackPathColor="#53c99f"
                  trackBorderColor="transparent"
                />
              </div>
              <div className="flex justify-between mt-4">
                <h6 className="font-Manrope text-white text-lg">
                  Achived :
                  <span className="text-SecondaryColor-0 font-semibold">
                    {" "}
                    $50,000
                  </span>
                </h6>
                <h6 className="font-Manrope text-white text-lg">
                  Goal :
                  <span className="text-PrimaryColor-0 font-semibold">
                    {" "}
                    $90,000
                  </span>
                </h6>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-7 sm:items-center">
              <Link to={"/about"}>
                <button className="primary-btn">
                  Discover More
                  <RiArrowRightDoubleFill />
                </button>
              </Link>
              <p className="font-Manrope text-white flex items-center gap-2">
                <BsFillClockFill className="text-SecondaryColor-0" /> 150 Days
                Remaining
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support2;
