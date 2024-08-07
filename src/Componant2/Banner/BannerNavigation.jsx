import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

const BannerNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="flex items-center">
      <div className="absolute bottom-[10%] md:bottom-[inherit] md:top-1/2 left-8 -translate-y-1/2 z-[1]">
        <button
          className="w-[60px] h-[60px] overflow-visible relative rounded-full bg-[#ffffff28] flex items-center text-white justify-center transition-all duration-500 z-[1] after:absolute after:top-0 after:left-0 after:bg-PrimaryColor-0 after:w-full after:rounded-full after:h-full after:scale-0 after:-z-[1] after:transition-all after:duration-500 hover:after:scale-100"
          onClick={() => swiper.slidePrev()}
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute bottom-[10%] md:bottom-[inherit] md:top-1/2 right-8 -translate-y-1/2 z-[1]">
        <button
          className="w-[60px] h-[60px] overflow-visible relative rounded-full bg-[#ffffff28] flex items-center text-white justify-center transition-all duration-500 z-[1] after:absolute after:top-0 after:left-0 after:bg-PrimaryColor-0 after:w-full after:rounded-full after:h-full after:scale-0 after:-z-[1] after:transition-all after:duration-500 hover:after:scale-100"
          onClick={() => swiper.slideNext()}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default BannerNavigation;
