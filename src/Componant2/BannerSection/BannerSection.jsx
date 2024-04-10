/* eslint-disable react/prop-types */
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./banner.css";
import Button from "../Button/Button";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import videoLayer from "/public/images/Componant2/video-outline.png";
import FsLightbox from "fslightbox-react";

const BannerSection = () => {
  const [toggler, setToggler] = useState(false);
  const [togglerTwo, setTogglerTwo] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="">
      <div className="relative overflow-hidden">
        <div className="keen-slider relative " ref={sliderRef}>
          <div className="keen-slider__slide number-slide1 h-[800px] bg-[url('/public/images/Componant2/slider-1.jpg')] bg-no-repeat bg-cover bg-right-top md:bg-center">
            <div className="Container flex items-center justify-start h-full">
              <div className="w-[500px]  ">
                <p className="font-Lobster text-Manrope text-base md:text-lg lg:text-xl leading-8 mb-5">
                  Helping Today, Helping Tomorrow
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-Manrope leading-8 sm:leading-10 md:leading-[50px] lg:leading-[60px] 2xl:leading-[75px] text-white font-extrabold">
                  Giving a Helpline hand for{" "}
                  <span className="text-Manrope font-Lobster">Childrens</span>{" "}
                  In Needs.
                </h1>
                <div className="flex items-center gap-x-10 mt-9">
                  <Button bgColor="bg-aquamarine" hoverBgColor="bg-coral">
                    Discover More{" "}
                    <MdKeyboardDoubleArrowRight className="ml-2" size={16} />
                  </Button>

                  <div className="relative w-[107px] h-[107px] ">
                    <figure className="relative">
                      <img
                        src={videoLayer}
                        alt="video outline img"
                        className="animate-rotational"
                      />
                    </figure>
                    <div
                      className="w-[50px] h-[50px] bg-coral hover:bg-aquamarine transition-all duration-300 rounded-full grid items-center justify-center absolute top-[24%] right-[26%] cursor-pointer"
                      onClick={() => setToggler(!toggler)}
                    >
                      <FaPlay className="text-white" size={16} />
                    </div>
                  </div>
                  <FsLightbox
                    toggler={toggler}
                    sources={[
                      "https://youtu.be/E1xkXZs0cAQ?si=s_srBes789Qmq5Rz",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1 h-[800px] bg-[url('/public/images/Componant2/slider-2.jpg')] bg-no-repeat bg-cover bg-right-top md:bg-center">
            <div className="Container flex items-center justify-start h-full">
              <div className="w-[500px]  ">
                <p className="font-Lobster text-Manrope text-base md:text-lg lg:text-xl leading-8 mb-5">
                  Helping Today, Helping Tomorrow
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-Manrope leading-8 sm:leading-10 md:leading-[50px] lg:leading-[60px] 2xl:leading-[75px] text-white font-extrabold">
                  Giving a Helpline hand for{" "}
                  <span className="text-Manrope font-Lobster">Childrens</span>{" "}
                  In Needs.
                </h1>
                <div className="flex items-center gap-x-10 mt-9">
                  <Button bgColor="bg-aquamarine" hoverBgColor="bg-coral">
                    Discover More{" "}
                    <MdKeyboardDoubleArrowRight className="ml-2" size={16} />
                  </Button>

                  <div className="relative w-[107px] h-[107px] ">
                    <figure className="relative">
                      <img
                        src={videoLayer}
                        alt="video outline img"
                        className="animate-rotational"
                      />
                    </figure>
                    <div
                      className="w-[50px] h-[50px] bg-coral hover:bg-aquamarine transition-all duration-300 rounded-full grid items-center justify-center absolute top-[24%] right-[26%] cursor-pointer"
                      onClick={() => setTogglerTwo(!togglerTwo)}
                    >
                      <FaPlay className="text-white" size={16} />
                    </div>
                  </div>
                  <FsLightbox
                    toggler={togglerTwo}
                    sources={[
                      "https://youtu.be/E1xkXZs0cAQ?si=s_srBes789Qmq5Rz",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute space-y-6">
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";

  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled} text-base `}
    >
      {props.left && (
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"></path>
      )}
      {!props.left && (
        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
      )}
    </svg>
  );
}

export default BannerSection;
