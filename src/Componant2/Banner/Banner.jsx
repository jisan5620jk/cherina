import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProjectNavigation from "./BannerNavigation";
import bannerShape from "/public/images/Componant2/banner/heart2.png";
import { Link } from "react-router-dom";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const Banner = () => {
  const settings = {
    loop: true,
    modules: [Navigation],
    speed: 1000,
    slidesPerVeiw: 1,
    autoplay: true,
  };

  return (
    <Swiper {...settings}>
      <SwiperSlide>
        <section className="bg-[url('/public/images/Componant2/banner/hero-bg3.png')] bg-center bg-cover h-[920px] w-full flex items-center justify-center">
          <div className="Container flex flex-col items-center justify-center">
            <div>
              <img src={bannerShape} className="animate-zoomInOut" />
            </div>
            <h1 className="text-white text-7xl text-center font-Manrope font-bold mt-10 mb-[58px]">
              Let’s Give Them Your <br /> Helping
              <span className="text-PrimaryColor-0 font-medium font-Lobster pl-8">
                Hands
              </span>
            </h1>
            <ul className="flex gap-6">
              <li>
                <Link to={"/"}>
                  <button className="primary-btn">
                    Discover More
                    <RiArrowRightDoubleFill />
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="primary-btn">
                    Join Volunteer
                    <RiArrowRightDoubleFill />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="bg-[url('../../../public/images/Componant2/banner/hero-bg4.png')] bg-center bg-cover h-[920px] w-full flex items-center justify-center">
          <div className="Container flex flex-col items-center justify-center">
            <div>
              <img src={bannerShape} className="animate-zoomInOut" />
            </div>
            <h1 className="text-white text-7xl text-center font-Manrope font-bold mt-10 mb-[58px]">
              Giving a Helpline <br /> hand for
              <span className="text-PrimaryColor-0 font-medium font-Lobster pl-8">
                Childrens
              </span>
            </h1>
            <ul className="flex gap-6">
              <li>
                <Link to={"/"}>
                  <button className="primary-btn">
                    Discover More
                    <RiArrowRightDoubleFill />
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="primary-btn">
                    Join Volunteer
                    <RiArrowRightDoubleFill />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </SwiperSlide>
      <ProjectNavigation />
    </Swiper>
  );
};

export default Banner;
