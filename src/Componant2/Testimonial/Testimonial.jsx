import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import testiProfile from "/public/images/Componant2/people1.png";
import testiProfile2 from "/public/images/Componant2/people2.png";
import { Link } from "react-router-dom";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { BsQuote } from "react-icons/bs";

const Testimonial = () => {
  const settings = {
    loop: true,
    modules: [Navigation],
    speed: 1000,
    slidesPerView: 1,
    autoplay: true,
  };

  return (
    <section className="py-28 bg-[url('/public/images/Componant2/testibg.jpg')] bg-center bg-cover relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#142121] before:opacity-90 before:-z-10">
      <div className="Container">
        <div className="grid grid-cols-2 items-center gap-16">
          <div>
            <Swiper {...settings}>
              <SwiperSlide>
                <div className="bg-[url('/public/images/Componant2/download.jpg')] bg-left bg-cover group p-10 rounded-md relative mb-7 mt-[50px]">
                  <div className="absolute -top-[50px]">
                    <img src={testiProfile} />
                  </div>
                  <div>
                    <div className="flex gap-1 mt-10 mb-8">
                      <BsQuote className="text-PrimaryColor-0 text-5xl" />
                      <p className="font-Manrope text-TextColor-0 flex-1 mt-4">
                        Completely create leveraged best practices and B2B
                        interfaces events productivate cutting-edge solutions
                        with go forward supply chains has Compellingly supply
                        24/7 relationships and effective human capital tha
                        Appropriately target market
                      </p>
                    </div>
                  </div>
                  <h6 className="font-Manrope text-HeadingColor-0 transition-all duration-500 text-xl font-bold group-hover:text-PrimaryColor-0 mb-2">
                    Anjelina Joli
                  </h6>
                  <p className="font-Manrope text-PrimaryColor-0 relative pl-8 before:absolute before:top-1/2 before:left-0 before:w-5 before:h-[2px] before:bg-SecondaryColor-0 before:transition-all before:duration-500 group-hover:before:bg-PrimaryColor-0">
                    Volunteer
                  </p>
                  <ul className="flex gap-1 bg-SecondaryColor-0 rounded-full py-2 px-6 absolute -bottom-4 transition-all duration-500 group-hover:bg-PrimaryColor-0">
                    <li className="text-white">
                      <FaStar />
                    </li>
                    <li className="text-white">
                      <FaStar />
                    </li>
                    <li className="text-white">
                      <FaStar />
                    </li>
                    <li className="text-white">
                      <FaStar />
                    </li>
                    <li className="text-white">
                      <FaStar />
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-[url('/public/images/Componant2/download.jpg')] bg-left bg-cover group p-10 rounded-md relative mb-7 mt-[50px]">
                  <div className="absolute -top-[50px]">
                    <img src={testiProfile2} />
                  </div>
                  <div>
                    <div className="flex gap-1 mt-10 mb-8">
                      <BsQuote className="text-PrimaryColor-0 text-5xl" />
                      <p className="font-Manrope text-TextColor-0 flex-1 mt-4">
                        Completely create leveraged best practices and B2B
                        interfaces events productivate cutting-edge solutions
                        with go forward supply chains has Compellingly supply
                        24/7 relationships and effective human capital tha
                        Appropriately target market
                      </p>
                    </div>
                  </div>
                  <h6 className="font-Manrope text-HeadingColor-0 transition-all duration-500 text-xl font-bold group-hover:text-PrimaryColor-0 mb-2">
                    Jhon Alexon
                  </h6>
                  <p className="font-Manrope text-PrimaryColor-0 relative pl-8 before:absolute before:top-1/2 before:left-0 before:w-5 before:h-[2px] before:bg-SecondaryColor-0 before:transition-all before:duration-500 group-hover:before:bg-PrimaryColor-0">
                    Volunteer
                  </p>
                  <ul className="flex gap-1 bg-SecondaryColor-0 rounded-full py-2 px-6 absolute -bottom-4 transition-all duration-500 group-hover:bg-PrimaryColor-0">
                    <li className="text-white">
                      <FaStar />
                    </li>
                    <li className="text-white">
                      <FaStar />
                    </li>
                    <li className="text-white">
                      <FaStar />
                    </li>
                    <li className="text-white">
                      <FaStar />
                    </li>
                    <li className="text-white">
                      <FaStar />
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <h5 className="sub-title">Testimonials</h5>
            <h1 className="text-white text-[22px] sm:text-4xl leading-8 md:text-[39px] 2xl:text-[42px] font-Manrope font-extrabold sm:leading-[52px] mt-6">
              What They’re Talking
              <br /> About
              <span className="text-PrimaryColor-0"> Charina</span>
            </h1>
            <p className="text-white font-Manrope mt-6 pb-11">
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
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
