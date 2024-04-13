import { RiArrowRightDoubleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import eventImg from "/public/images/Componant1/event/event1.jpg";
import eventImg2 from "/public/images/Componant1/event/event2.jpg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

const Events = () => {
  return (
    <section className="py-28 border-b border-[#d8d8d8]">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 xl:gap-16">
          <div>
            <h5 className="sub-title">Upcoming Events</h5>
            <h1 className="text-HeadingColor-0 text-[22px] sm:text-4xl leading-8 md:text-[36px] 2xl:text-[42px] font-Manrope font-extrabold sm:leading-[52px] mt-6">
              Ready to Join our Latest
              <br /> Upcoming
              <span className="text-PrimaryColor-0"> Events</span>
            </h1>
            <p className="text-TextColor-0 font-Manrope mt-6 pb-11">
              Completely create leveraged best practices and B2B interfaces
              events productivate cutting-edge solutions with go forward supply
              chains has Compellingly supply 24/7 relationships and effective
              human capital tha Appropriately target market positioning
            </p>
            <Link to={"/about"}>
              <button className="primary-btn">
                Discover More
                <RiArrowRightDoubleFill />
              </button>
            </Link>
          </div>
          <div>
            <div className="shadow-shade rounded-md  bg-[#fff2ed] flex flex-col sm:flex-row gap-7 items-center relative mb-7 pt-5 px-5 pb-20 sm:p-0">
              <div className="flex-1 md:flex-none lg:flex-1">
                <img src={eventImg} className="rounded sm:rounded-none" />
              </div>
              <div className="flex-1">
                <div className="flex">
                  <h6 className="font-Manrope text-TextColor-0 flex gap-2 items-center my-4">
                    <AiOutlineClockCircle className="text-PrimaryColor-0 text-lg" />
                    8.30 am
                  </h6>
                  <h6 className="font-Manrope text-TextColor-0 flex gap-2 items-center my-4">
                    <MdLocationPin className="text-PrimaryColor-0 text-lg" />
                    Sandigo, USA
                  </h6>
                </div>
                <Link to={"/eventdetails"}>
                  <h2 className="font-Manrope text-xl lg:text-lg xl:text-xl font-bold 2xl:w-9/12 text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0">
                    Learn Exactly how we Arrange a Event
                  </h2>
                </Link>
                <Link to={"/eventdetails"}>
                  <button className="flex items-center gap-2 text-HeadingColor-0 mt-6">
                    View Details
                    <RiArrowRightDoubleFill className="text-PrimaryColor-0" />
                  </button>
                </Link>
              </div>
              <h6 className="h-[38px] w-[116px] font-Manrope bg-PrimaryColor-0 text-sm flex justify-center items-center text-white rounded-full sm:-rotate-90 absolute bottom-5 left-6 sm:bottom-[inherit] sm:left-[inherit] sm:top-1/2 sm:-right-[59px] sm:-translate-y-1/2">
                26 Jun 2022
              </h6>
            </div>
            <div className="shadow-shade rounded-md  bg-[#edfaf5] flex flex-col sm:flex-row gap-7 items-center relative mb-7 pt-5 px-5 pb-20 sm:p-0">
              <div className="flex-1 md:flex-none lg:flex-1">
                <img src={eventImg2} className="rounded sm:rounded-none" />
              </div>
              <div className="flex-1">
                <div className="flex">
                  <h6 className="font-Manrope text-TextColor-0 flex gap-2 items-center my-4">
                    <AiOutlineClockCircle className="text-SecondaryColor-0 text-lg" />
                    8.30 am
                  </h6>
                  <h6 className="font-Manrope text-TextColor-0 flex gap-2 items-center my-4">
                    <MdLocationPin className="text-SecondaryColor-0 text-lg" />
                    Sandigo, USA
                  </h6>
                </div>
                <Link to={"/eventdetails"}>
                  <h2 className="font-Manrope text-xl lg:text-lg xl:text-xl font-bold 2xl:w-9/12 text-HeadingColor-0 transition-all duration-500 hover:text-SecondaryColor-0">
                    100+ Orphan Children Bootcampings
                  </h2>
                </Link>
                <Link to={"/eventdetails"}>
                  <button className="flex items-center gap-2 text-HeadingColor-0 mt-6">
                    View Details
                    <RiArrowRightDoubleFill className="text-SecondaryColor-0" />
                  </button>
                </Link>
              </div>
              <h6 className="h-[38px] w-[116px] font-Manrope bg-SecondaryColor-0 text-sm flex justify-center items-center text-white rounded-full sm:-rotate-90 absolute bottom-5 left-6 sm:bottom-[inherit] sm:left-[inherit] sm:top-1/2 sm:-right-[59px] sm:-translate-y-1/2">
                26 Jun 2022
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
