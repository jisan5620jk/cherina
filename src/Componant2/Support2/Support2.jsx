import ProgressBar from "react-animated-progress-bar";
import { BsFillClockFill } from "react-icons/bs";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Support2 = () => {
  return (
    <section className="py-28 bg-[url('/public/images/Componant2/donate2.jpg')] bg-center bg-cover bg-no-repeat">
      <div className="Container">
        <div className="grid grid-cols-2 items-center">
          <div></div>
          <div>
            <h5 className="sub-title">Donate for Urgent Cause</h5>
            <h1 className="text-white text-[22px] sm:text-4xl leading-8 md:text-[39px] 2xl:text-[42px] font-Manrope font-extrabold sm:leading-[52px] mt-6">
              Support for Eating Funds <br />
              Hungry
              <span className="text-PrimaryColor-0"> Peoples</span>
            </h1>
            <p className="font-Manrope text-TextColor-0 font-medium">
              Completely create leveraged best practices and B2B interfaces
              events was productivate cutting-edge solutions with go
            </p>
            <div className="mt-16 border-b border-BorderColor-0">
              <div className="px-[6px] py-1 rounded-2xl">
                <ProgressBar
                  rect
                  width="100%"
                  height="9px"
                  fontColor="#fff"
                  fontSize="17px"
                  leading="10px"
                  margin="0px"
                  rectBorderRadius="10px"
                  fontWeight="600"
                  percentage="50"
                  defColor={{
                    excellent: "#ff5e14",
                    good: "#fe7f4c",
                    fair: "green",
                    poor: "red",
                  }}
                  trackPathColor="#e8e9e9"
                  trackBorderColor="transparent"
                />
              </div>
              <div className="flex justify-between mt-4">
                <h6 className="font-Manrope text-TextColor-0 text-sm">
                  Achived :
                  <span className="text-HeadingColor-0 font-semibold text-[15px]">
                    {" "}
                    $50,000
                  </span>
                </h6>
                <h6 className="font-Manrope text-TextColor-0 text-sm">
                  Goal :
                  <span className="text-HeadingColor-0 font-semibold text-[15px]">
                    {" "}
                    $90,000
                  </span>
                </h6>
              </div>
            </div>
            <div className="flex gap-7 items-center">
              <Link to={"/about"}>
                <button className="primary-btn">
                  Discover More
                  <RiArrowRightDoubleFill />
                </button>
              </Link>
              <p className="font-Manrope text-white flex items-center gap-2">
                <BsFillClockFill className="text-SecondaryColor-0"/> 150 Days Remaining
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support2;
