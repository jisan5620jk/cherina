import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import gallaryImg from "/public/images/Componant2/gallary/galary1.jpg"

const Gallary = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 400,
    centeredSlides: true,
    initialSlide: 1,
    autoplay: true,
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
    <section className="py-28 relative">
      <h3 className="bg-SecondaryColor-0 py-9 text-[30px] text-white text-center font-Manrope font-bold relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bg-SecondaryColor-0 before:w-10 before:h-10 before:rounded-sm before:-bottom-3 before:rotate-45">
        Our Galary
      </h3>
      <div className="pt-10">
        <Swiper {...settings}>
          <SwiperSlide>
            <div className="relative overflow-hidden z-10 rounded-md before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:rounded-md before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:opacity-85 hover:before:h-full">
              <img src={gallaryImg} />
              <Link to={"/"} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <button className="font-Manrope w-[272px] inline-block font-bold bg-white rounded-md py-[22px] z-10 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bg-white before:w-10 before:h-10 before:rounded-sm before:-top-3 before:rotate-45 before:-z-10">
                  Education For Childreen
                </button>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Gallary;
