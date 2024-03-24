import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

const EventsNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="flex">
      <div className="absolute top-0 right-14 xl:right-32">
        <button
          className="w-[52px] h-[52px] overflow-visible relative bg-[#fff2ed] flex items-center text-HeadingColor-0 justify-center rounded-full transition-all duration-500 z-10 after:rounded-full after:absolute after:top-[0] after:left-[0] after:bg-SecondaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
          onClick={() => swiper.slidePrev()}
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute top-0 right-0 xl:right-12">
        <button
          className="w-[52px] h-[52px] overflow-visible relative bg-[#fff2ed] flex items-center text-HeadingColor-0 justify-center rounded-full transition-all duration-500 z-10 after:rounded-full after:absolute after:top-[0] after:left-[0] after:bg-SecondaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
          onClick={() => swiper.slideNext()}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default EventsNavigation;
