import { RiArrowRightDoubleFill } from "react-icons/ri";
import featureImg from "/public/images/Componant2/about/about2.png";
import itemImg from "/public/images/Componant2/about/item1.png";
import itemImg2 from "/public/images/Componant2/about/item2.png";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const About = () => {
    return (
      <section className="pt-24 pb-28">
        <div className="Container">
          <div className="flex gap-20">
            <div className="flex-1 relative">
              <img src={featureImg} />
              <div className="bg-[url('/public/images/Componant2/about/about-cuntr.png')] h-[176px] w-[176px] flex flex-col justify-center items-center text-center absolute top-9 left-9">
                <CountUp
                  start={-9}
                  end={10}
                  suffix="K+"
                  className="text-[40px] font-Lobster font-normal text-white"
                />
                <h6 className="font-Manrope font-semibold text-white">
                  Volunteers
                </h6>
              </div>
            </div>
            <div className="flex-1">
              <h5 className="sub-title">Join Us and Start Donating</h5>
              <h1 className="text-HeadingColor-0 xl:text-[39px] 2xl:text-[42px] font-Manrope font-extrabold leading-[52px] mt-6">
                Make your Goals Always to
                <br /> Helps
                <span className="text-PrimaryColor-0"> Poor People</span>
              </h1>
              <p className="text-TextColor-0 font-Manrope mt-6">
                Phosfluorescently cultivate enabled relationships without sticky
                practices distinctively empower next-generation e-commerce
                network
              </p>
              <div className="flex gap-7 mt-8 mb-8">
                <div>
                  <img src={itemImg2} />
                </div>
                <div className="flex-1">
                  <h6 className="font-Manrope text-xl font-bold text-HeadingColor-0">
                    Quick Fundraising
                  </h6>
                  <p className="font-Manrope text-[15px] text-TextColor-0 w-3/4">
                    Distinctively empower next-generation charity and
                    idea-sharing and extensible
                  </p>
                </div>
              </div>
              <div className="flex gap-7">
                <div>
                  <img src={itemImg} />
                </div>
                <div className="flex-1">
                  <h6 className="font-Manrope text-xl font-bold text-HeadingColor-0">
                    Join Our Team
                  </h6>
                  <p className="font-Manrope text-[15px] text-TextColor-0 w-3/4">
                    Distinctively empower next-generation charity and
                    idea-sharing and extensible
                  </p>
                </div>
              </div>
              <Link to={"/"}>
                <button className="primary-btn mt-9">
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

export default About;