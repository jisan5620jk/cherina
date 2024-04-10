import CountUp from "react-countup";
import countIcon from "/public/images/Componant1/support/count1.png";
import countIcon2 from "/public/images/Componant1/support/count2.png";
import countIcon3 from "/public/images/Componant1/support/count3.png";
import countIcon4 from "/public/images/Componant1/support/count4.png";
import { Link } from "react-router-dom";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const Support = () => {
  return (
    <section className="py-28 border-b">
      <div className="Container">
        <div className="flex flex-col lg:flex-row gap-[72px] items-center">
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row gap-7">
              <div className="bg-[#edfaf5] py-10 pl-10 w-[240px] lg:w-[220px] xl:w-[240px] 2xl:w-[270px] rounded-md mt-5">
                <div className="flex items-center gap-5">
                  <img src={countIcon} />
                  <CountUp
                    start={-9}
                    end={10}
                    suffix="M"
                    className="text-[50px] font-Lobster font-normal text-SecondaryColor-0"
                  />
                </div>
                <h5 className="font-Manrope text-lg font-medium text-TextColor-0">
                  Total Donations
                </h5>
              </div>
              <div className="bg-[#fff2ec] py-10 pl-10 w-[240px] md:w-[270px] lg:w-[220px] xl:w-[240px] 2xl:w-[270px] rounded-md mb-5">
                <div className="flex items-center gap-5">
                  <img src={countIcon2} />
                  <CountUp
                    start={-11}
                    end={12}
                    suffix="K"
                    className="text-[50px] font-Lobster font-normal text-PrimaryColor-0"
                  />
                </div>
                <h5 className="font-Manrope text-lg font-medium text-TextColor-0">
                  Project Funded
                </h5>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-7">
              <div className="bg-[#edfaf5] py-10 pl-10 w-[240px] lg:w-[220px] xl:w-[240px] 2xl:w-[270px] rounded-md mt-7">
                <div className="flex items-center gap-5">
                  <img src={countIcon3} />
                  <CountUp
                    start={-300}
                    end={324}
                    suffix="+"
                    className="text-[50px] font-Lobster font-normal text-[#ffd015]"
                  />
                </div>
                <h5 className="font-Manrope text-lg font-medium text-TextColor-0">
                  Total Donations
                </h5>
              </div>
              <div className="bg-[#fff2ec] py-10 pl-10 w-[240px] md:w-[270px] lg:w-[220px] xl:w-[240px] 2xl:w-[270px] rounded-md mt-2 mb-5">
                <div className="flex items-center gap-5">
                  <img src={countIcon4} />
                  <CountUp
                    start={-500}
                    end={570}
                    suffix=""
                    className="text-[50px] font-Lobster font-normal text-[#1bc7ec]"
                  />
                </div>
                <h5 className="font-Manrope text-lg font-medium text-TextColor-0">
                  Project Funded
                </h5>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h5 className="sub-title">Suport Humanity</h5>
            <h1 className="text-HeadingColor-0 text-[22px] sm:text-4xl leading-8 md:text-[39px] lg:text-[32px] lg:leading-10 2xl:text-[42px] font-Manrope font-extrabold sm:leading-[52px] mt-6 ">
              Join your Hands with Us
              <br /> For Support
              <span className="text-PrimaryColor-0"> Them’s</span>
            </h1>
            <p className="text-TextColor-0 font-Manrope mt-7 mb-12">
              Completely create leveraged best practices and B2B interfaces
              events productivate cutting-edge solutions with go forward supply
              chains has Compellingly supply 24/7 relationships and effective
              human capital tha Appropriately target market positioning Discover
              More
            </p>
            <Link to={"/about"}>
              <button className="primary-btn">
                Discover More
                <RiArrowRightDoubleFill />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
