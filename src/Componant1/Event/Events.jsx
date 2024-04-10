import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { FiClock } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import EventsNavigation from "./EventNavigation";

const Events = () => {
  const settings = {
    loop: true,
    modules: [Navigation],
    speed: 1000,
    autoplay: true,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className="py-28">
      <div className="Container">
        <h5 className="sub-title">Start Donating Theme</h5>
        <h1 className="text-HeadingColor-0 text-[22px] sm:text-4xl leading-8 md:text-[39px] 2xl:text-[42px] font-Manrope font-extrabold sm:leading-[52px] sm:-mb-12 mt-6">
          Join Our Latest
          <span className="text-PrimaryColor-0"> Events</span>
        </h1>
      </div>
      <div className="xl:px-12">
        <Swiper {...settings}>
          <SwiperSlide>
            <div className="bg-[url('/public/images/Componant1/event/events1.jpg')] rounded-md bg-center bg-cover mt-28 group relative z-10 before:absolute before:rounded-md before:w-full before:h-full before:bg-[#1cc5ee] before:opacity-80 before:-z-10">
              <div className="px-[20px] 2xl:px-[42px] pt-[42px] pb-9">
                <div className="flex gap-5 items-center">
                  <h3 className="w-[66px] h-[66px] font-Lobster text-[38px] font-normal bg-white rounded-md flex justify-center items-center text-[#1cc5ee]">
                    01
                  </h3>
                  <h5 className="font-Manrope text-[22px] text-white font-normal uppercase">
                    October
                  </h5>
                </div>
                <Link to={"/eventdetails"}>
                  <button className="font-Manrope text-2xl lg:text-[23px] 2xl:text-[26px] 2xl:w-2/3 text-left mt-7 pb-8 text-white leading-9 font-bold relative before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-500 before:h-[2px] before:w-[70px] before:bg-white group-hover:before:w-full 2xl:group-hover:before:w-[510px] after:absolute after:bottom-0 after:left-0 after:w-full 2xl:after:w-[510px] after:h-[2px] after:bg-[#ffffee4d]">
                    Learn Exactly how we Arrange a Event
                  </button>
                </Link>
                <div className="flex flex-col sm:flex-row xl:gap-4 lg:gap-0 2xl:gap-7 mt-7">
                  <p className="font-Manrope font-400 text-white flex gap-2 items-center">
                    <FiClock />
                    8:30 am
                  </p>
                  <p className="font-Manrope font-400 text-white flex gap-2 items-center">
                    <MdLocationPin />
                    Sandigo, California - USA
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/public/images/Componant1/event/events2.png')] rounded-md bg-center bg-cover mt-28 group relative z-10 before:absolute before:rounded-md before:w-full before:h-full before:bg-PrimaryColor-0 before:opacity-80 before:-z-10">
              <div className="px-[20px] 2xl:px-[42px] pt-[42px] pb-9">
                <div className="flex gap-5 items-center">
                  <h3 className="w-[66px] h-[66px] font-Lobster text-[38px] font-normal bg-white rounded-md flex justify-center items-center text-PrimaryColor-0">
                    02
                  </h3>
                  <h5 className="font-Manrope text-[22px] text-white font-normal uppercase">
                    November
                  </h5>
                </div>
                <Link to={"/eventdetails"}>
                  <button className="font-Manrope text-2xl lg:text-[23px] 2xl:text-[26px] 2xl:w-2/3 text-left mt-7 pb-8 text-white leading-9 font-bold relative before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-500 before:h-[2px] before:w-[70px] before:bg-white group-hover:before:w-full 2xl:group-hover:before:w-[510px] after:absolute after:bottom-0 after:left-0 after:w-full 2xl:after:w-[510px] after:h-[2px] after:bg-[#ffffee4d]">
                    100+ Orphan Childreens Bootcampaigns
                  </button>
                </Link>
                <div className="flex flex-col sm:flex-row xl:gap-4 gap-7 lg:gap-0 mt-7">
                  <p className="font-Manrope font-400 text-white flex gap-2 items-center">
                    <FiClock />
                    8:30 am
                  </p>
                  <p className="font-Manrope font-400 text-white flex gap-2 items-center">
                    <MdLocationPin />
                    Sandigo, California - USA
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/public/images/Componant1/event/events3.png')] rounded-md bg-center bg-cover mt-28 group relative z-10 before:absolute before:rounded-md before:w-full before:h-full before:bg-SecondaryColor-0 before:opacity-80 before:-z-10">
              <div className="px-[20px] 2xl:px-[42px] pt-[42px] pb-9">
                <div className="flex gap-5 items-center">
                  <h3 className="w-[66px] h-[66px] font-Lobster text-[38px] font-normal bg-white rounded-md flex justify-center items-center text-SecondaryColor-0">
                    03
                  </h3>
                  <h5 className="font-Manrope text-[22px] text-white font-normal">
                    December
                  </h5>
                </div>
                <Link to={"/eventdetails"}>
                  <button className="font-Manrope text-2xl lg:text-[23px] 2xl:text-[26px] 2xl:w-2/3 text-left mt-7 pb-8 text-white leading-9 font-bold relative before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-500 before:h-[2px] before:w-[70px] before:bg-white group-hover:before:w-full 2xl:group-hover:before:w-[510px] after:absolute after:bottom-0 after:left-0 after:w-full 2xl:after:w-[510px] after:h-[2px] after:bg-[#ffffee4d]">
                    Learn Exactly how we Arrange a Event
                  </button>
                </Link>
                <div className="flex flex-col sm:flex-row xl:gap-4 gap-7 lg:gap-0 mt-7">
                  <p className="font-Manrope font-400 text-white flex gap-2 items-center">
                    <FiClock />
                    8:30 am
                  </p>
                  <p className="font-Manrope font-400 text-white flex gap-2 items-center">
                    <MdLocationPin />
                    Sandigo, California - USA
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/public/images/Componant1/event/events1.jpg')] rounded-md bg-center bg-cover mt-28 group relative z-10 before:absolute before:rounded-md before:w-full before:h-full before:bg-[#1cc5ee] before:opacity-80 before:-z-10">
              <div className="px-[20px] 2xl:px-[42px] pt-[42px] pb-9">
                <div className="flex gap-5 items-center">
                  <h3 className="w-[66px] h-[66px] font-Lobster text-[38px] font-normal bg-white rounded-md flex justify-center items-center text-[#1cc5ee]">
                    01
                  </h3>
                  <h5 className="font-Manrope text-[22px] text-white font-normal uppercase">
                    October
                  </h5>
                </div>
                <Link to={"/eventdetails"}>
                  <button className="font-Manrope text-2xl lg:text-[23px] 2xl:text-[26px] 2xl:w-2/3 text-left mt-7 pb-8 text-white leading-9 font-bold relative before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-500 before:h-[2px] before:w-[70px] before:bg-white group-hover:before:w-full 2xl:group-hover:before:w-[510px] after:absolute after:bottom-0 after:left-0 after:w-full 2xl:after:w-[510px] after:h-[2px] after:bg-[#ffffee4d]">
                    Learn Exactly how we Arrange a Event
                  </button>
                </Link>
                <div className="flex flex-col sm:flex-row xl:gap-4 gap-7 lg:gap-0 mt-7">
                  <p className="font-Manrope font-400 text-white flex gap-2 items-center">
                    <FiClock />
                    8:30 am
                  </p>
                  <p className="font-Manrope font-400 text-white flex gap-2 items-center">
                    <MdLocationPin />
                    Sandigo, California - USA
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <EventsNavigation />
        </Swiper>
      </div>
    </section>
  );
};

export default Events;
