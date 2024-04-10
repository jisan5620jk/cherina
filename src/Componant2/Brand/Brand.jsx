import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import brandImg from "/public/images/Componant1/brand1.png";
import brandImg2 from "/public/images/Componant1/brand2.png";
import brandImg3 from "/public/images/Componant1/brand3.png";
import brandImg4 from "/public/images/Componant1/brand4.png";

const Brand = () => {
  const settings = {
    loop: true,
    modules: [Navigation],
    speed: 1000,
    slidesPerView: 1,
    autoplay: true,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <div className="Container py-28">
      <Swiper {...settings}>
        <SwiperSlide>
          <div className="flex justify-center ">
            <img src={brandImg} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center ">
            <img src={brandImg2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center ">
            <img src={brandImg3} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center ">
            <img src={brandImg4} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center ">
            <img src={brandImg} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brand;
