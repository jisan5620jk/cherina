import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import gallaryImg from "/public/images/Componant2/gallary/galary1.jpg";
import gallaryImg2 from "/public/images/Componant2/gallary/galary2.jpg";
import gallaryImg3 from "/public/images/Componant2/gallary/galary3.jpg";
import gallaryImg4 from "/public/images/Componant2/gallary/galary4.jpg";
import gallaryImg5 from "/public/images/Componant2/gallary/galary5.jpg";

const Gallary = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 400,
    centeredSlides: true,
    initialSlide: 1,
    autoplay: true,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 5,
      },
    },
  };

  return (
    <section className="py-28 relative gallary">
      <h3 className="bg-SecondaryColor-0 py-9 text-[30px] text-white text-center font-Manrope font-bold relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bg-SecondaryColor-0 before:w-10 before:h-10 before:rounded-sm before:-bottom-3 before:rotate-45">
        Our Galary
      </h3>
      <div className="pt-10 px-7">
        <Swiper {...settings}>
          <SwiperSlide>
            <div className="relative gallary-box group overflow-hidden z-10 rounded-md before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:rounded-md before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:opacity-85 hover:before:h-full">
              <img src={gallaryImg} />
              <div className="gallary-title absolute left-1/2 bottom-0 -translate-x-1/2 opacity-0 translate-y-1/2 group-hover:bottom-1/2 transition-all duration-500 group-hover:opacity-100">
                <Link to={"/"}>
                  <button className="font-Manrope w-[240px] md:w-[272px] inline-block font-bold bg-white rounded-md py-[22px] z-10 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bg-white before:w-10 before:h-10 before:rounded-sm before:-top-3 before:rotate-45 before:-z-10">
                    Education For Childreen
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative gallary-box group overflow-hidden z-10 rounded-md before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:rounded-md before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:opacity-85 hover:before:h-full">
              <img src={gallaryImg2} />
              <div className="gallary-title absolute left-1/2 bottom-0 -translate-x-1/2 opacity-0 translate-y-1/2 group-hover:bottom-1/2 transition-all duration-500 group-hover:opacity-100">
                <Link to={"/"}>
                  <button className="font-Manrope w-[240px] md:w-[272px] inline-block font-bold bg-white rounded-md py-[22px] z-10 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bg-white before:w-10 before:h-10 before:rounded-sm before:-top-3 before:rotate-45 before:-z-10">
                    Education For Childreen
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative gallary-box group overflow-hidden z-10 rounded-md before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:rounded-md before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:opacity-85 hover:before:h-full">
              <img src={gallaryImg3} />
              <div className="gallary-title absolute left-1/2 bottom-0 -translate-x-1/2 opacity-0 translate-y-1/2 group-hover:bottom-1/2 transition-all duration-500 group-hover:opacity-100">
                <Link to={"/"}>
                  <button className="font-Manrope w-[240px] md:w-[272px] inline-block font-bold bg-white rounded-md py-[22px] z-10 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bg-white before:w-10 before:h-10 before:rounded-sm before:-top-3 before:rotate-45 before:-z-10">
                    Education For Childreen
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative gallary-box group overflow-hidden z-10 rounded-md before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:rounded-md before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:opacity-85 hover:before:h-full">
              <img src={gallaryImg4} />
              <div className="gallary-title absolute left-1/2 bottom-0 -translate-x-1/2 opacity-0 translate-y-1/2 group-hover:bottom-1/2 transition-all duration-500 group-hover:opacity-100">
                <Link to={"/"}>
                  <button className="font-Manrope w-[240px] md:w-[272px] inline-block font-bold bg-white rounded-md py-[22px] z-10 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bg-white before:w-10 before:h-10 before:rounded-sm before:-top-3 before:rotate-45 before:-z-10">
                    Education For Childreen
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative gallary-box group overflow-hidden z-10 rounded-md before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:rounded-md before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:opacity-85 hover:before:h-full">
              <img src={gallaryImg5} />
              <div className="gallary-title absolute left-1/2 bottom-0 -translate-x-1/2 opacity-0 translate-y-1/2 group-hover:bottom-1/2 transition-all duration-500 group-hover:opacity-100">
                <Link to={"/"}>
                  <button className="font-Manrope w-[240px] md:w-[272px] inline-block font-bold bg-white rounded-md py-[22px] z-10 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bg-white before:w-10 before:h-10 before:rounded-sm before:-top-3 before:rotate-45 before:-z-10">
                    Education For Childreen
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative gallary-box group overflow-hidden z-10 rounded-md before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:rounded-md before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:opacity-85 hover:before:h-full">
              <img src={gallaryImg5} />
              <div className="gallary-title absolute left-1/2 bottom-0 -translate-x-1/2 opacity-0 translate-y-1/2 group-hover:bottom-1/2 transition-all duration-500 group-hover:opacity-100">
                <Link to={"/"}>
                  <button className="font-Manrope w-[240px] md:w-[272px] inline-block font-bold bg-white rounded-md py-[22px] z-10 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bg-white before:w-10 before:h-10 before:rounded-sm before:-top-3 before:rotate-45 before:-z-10">
                    Education For Childreen
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Gallary;
