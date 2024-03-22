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
        <h1 className="text-HeadingColor-0 xl:text-[39px] 2xl:text-[42px] font-Manrope font-extrabold leading-[52px] mt-6 -mb-12">
          Join Our Latest
          <span className="text-PrimaryColor-0"> Events</span>
        </h1>
      </div>
      <div className="xl:px-12">
        <Swiper {...settings}>
          <SwiperSlide>
            <div className="bg-[url('/public/images/Componant2/event/events1.jpg')] rounded-md bg-center bg-cover mt-28 group relative z-10 before:absolute before:rounded-md before:w-full before:h-full before:bg-[#1cc5ee] before:opacity-80 before:-z-10">
              <div className="xl:px-[20px] px-[42px] pt-[42px] pb-9">
                <div className="flex gap-5 items-center">
                  <h3 className="w-[66px] h-[66px] font-Lobster text-[38px] font-normal bg-white rounded-md flex justify-center items-center text-[#1cc5ee]">
                    01
                  </h3>
                  <h5 className="font-Manrope text-[22px] text-white font-normal uppercase">
                    October
                  </h5>
                </div>
                <Link to={"/"}>
                  <button
                    className="font-Manrope text-2xl 2xl:text-[26px] text-left mt-7 pb-8 text-white leading-9 font-bold border-b-2 border-[#ffffee4d] relative before:absolute before:bottom-[-2px] before:left-0 before:transition-all
               before:duration-500 before:h-[2px] before:w-[70px] before:bg-white group-hover:before:w-full"
                  >
                    Learn Exactly how we Arrange a Event
                  </button>
                </Link>
                <div className="flex xl:gap-4 gap-7 mt-7">
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
            <div className="bg-[url('/public/images/Componant2/event/events2.png')] rounded-md bg-center bg-cover mt-28 group relative z-10 before:absolute before:rounded-md before:w-full before:h-full before:bg-PrimaryColor-0 before:opacity-80 before:-z-10">
              <div className="xl:px-[20px] px-[42px] pt-[42px] pb-9">
                <div className="flex gap-5 items-center">
                  <h3 className="w-[66px] h-[66px] font-Lobster text-[38px] font-normal bg-white rounded-md flex justify-center items-center text-PrimaryColor-0">
                    02
                  </h3>
                  <h5 className="font-Manrope text-[22px] text-white font-normal uppercase">
                    November
                  </h5>
                </div>
                <Link to={"/"}>
                  <button
                    className="font-Manrope text-2xl 2xl:text-[26px] text-left mt-7 pb-8 text-white leading-9 font-bold border-b-2 border-[#ffffee4d] relative before:absolute before:bottom-[-2px] before:left-0 before:transition-all
               before:duration-500 before:h-[2px] before:w-[70px] before:bg-white group-hover:before:w-full"
                  >
                    100+ Orphan Childreens Bootcampaigns
                  </button>
                </Link>
                <div className="flex xl:gap-4 gap-7 mt-7">
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
            <div className="bg-[url('/public/images/Componant2/event/events3.png')] rounded-md bg-center bg-cover mt-28 group relative z-10 before:absolute before:rounded-md before:w-full before:h-full before:bg-SecondaryColor-0 before:opacity-80 before:-z-10">
              <div className="xl:px-[20px] px-[42px] pt-[42px] pb-9">
                <div className="flex gap-5 items-center">
                  <h3 className="w-[66px] h-[66px] font-Lobster text-[38px] font-normal bg-white rounded-md flex justify-center items-center text-SecondaryColor-0">
                    03
                  </h3>
                  <h5 className="font-Manrope text-[22px] text-white font-normal">
                    December
                  </h5>
                </div>
                <Link to={"/"}>
                  <button
                    className="font-Manrope text-2xl 2xl:text-[26px] text-left mt-7 pb-8 text-white leading-9 font-bold border-b-2 border-[#ffffee4d] relative before:absolute before:bottom-[-2px] before:left-0 before:transition-all
               before:duration-500 before:h-[2px] before:w-[70px] before:bg-white group-hover:before:w-full"
                  >
                    Learn Exactly how we Arrange a Event
                  </button>
                </Link>
                <div className="flex xl:gap-4 gap-7 mt-7">
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
            <div className="bg-[url('/public/images/Componant2/event/events1.jpg')] rounded-md bg-center bg-cover mt-28 group relative z-10 before:absolute before:rounded-md before:w-full before:h-full before:bg-[#1cc5ee] before:opacity-80 before:-z-10">
              <div className="xl:px-[20px] px-[42px] pt-[42px] pb-9">
                <div className="flex gap-5 items-center">
                  <h3 className="w-[66px] h-[66px] font-Lobster text-[38px] font-normal bg-white rounded-md flex justify-center items-center text-[#1cc5ee]">
                    01
                  </h3>
                  <h5 className="font-Manrope text-[22px] text-white font-normal uppercase">
                    October
                  </h5>
                </div>
                <Link to={"/"}>
                  <button
                    className="font-Manrope text-2xl 2xl:text-[26px] text-left mt-7 pb-8 text-white leading-9 font-bold border-b-2 border-[#ffffee4d] relative before:absolute before:bottom-[-2px] before:left-0 before:transition-all
               before:duration-500 before:h-[2px] before:w-[70px] before:bg-white group-hover:before:w-full"
                  >
                    Learn Exactly how we Arrange a Event
                  </button>
                </Link>
                <div className="flex xl:gap-4 gap-7 mt-7">
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
