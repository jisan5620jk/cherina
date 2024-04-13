/* eslint-disable react/prop-types */
import { useState } from "react";

import SectionHeading from "../SectionHeading/SectionHeading";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./ProgressBar/app.css";

import styles from "./styleArrow.module.css";
import cases1 from "/public/images/Componant2/cases-1.jpg";
import cases2 from "/public/images/Componant2/cases-2.jpg";
import cases3 from "/public/images/Componant2/cases-3.jpg";
import cases4 from "/public/images/Componant2/cases-4.jpg";
import CausesCard from "./CausesCard";

const causesData = [
  {
    id: 1,
    image: cases1,
    category: `Foods`,
    title: `Raise fund for clean & healthy foods`,
    remainingDays: `150 Days Remaining`,
    color: `aquamarine`,
    percentage: `72.5`,
    goal: `$50,000`,
    achive: `$30,050`,
  },
  {
    id: 2,
    image: cases2,
    category: `Education`,
    title: `Give a good education orphan childreen`,
    remainingDays: `140 Days Remaining`,
    color: `coral`,
    percentage: `61.5`,
    goal: `$50,000`,
    achive: `$30,050`,
  },
  {
    id: 3,
    image: cases3,
    category: `Medical`,
    title: `Build home for African poor womens`,
    remainingDays: `160 Days Remaining`,
    color: `deepSkyBlue`,
    percentage: `67.5`,
    goal: `$50,000`,
    achive: `$30,050`,
  },
  {
    id: 4,
    image: cases4,
    category: `Education`,
    title: `Donate Money for Kids Educations`,
    remainingDays: `150 Days Remaining`,
    color: `aquamarine`,
    percentage: `70.00`,
    goal: `$50,000`,
    achive: `$39,050`,
  },
];

const PopularCases = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 12 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 12 },
      },
      "(min-width:992px)": {
        slides: { perView: 3, spacing: 12 },
      },
    },
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
    <section className="py-20 2xl:py-[120px] ">
      <div className="Container">
        <div className="flex items-center justify-between">
          <div>
            <SectionHeading title="Start Donating Theme" />
            <h1 className="heading-main text-darkSlate mt-5">
              Find the Popular{" "}
              <span className="text-PrimaryColor-0">Cases</span>
            </h1>
          </div>
          <div className="relative">
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

        {/* PopularCases Content section */}
        <div className="mt-14">
          <div className="keen-slider" ref={sliderRef}>
            {causesData.map(
              ({
                id,
                image,
                category,
                title,
                remainingDays,
                color,
                percentage,
                goal,
                achive,
              }) => {
                return (
                  <div
                    key={id}
                    className="keen-slider__slide number-slide1 p-2"
                  >
                    <CausesCard
                      image={image}
                      category={category}
                      title={title}
                      remainingDays={remainingDays}
                      color={color}
                      percentage={percentage}
                      goal={goal}
                      achive={achive}
                    />
                  </div>
                );
              }
            )}
          </div>
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      className={`arrownew ${styles.arrownew} ${
        props.left ? styles["arrowN--left"] : styles["arrowN--right"]
      } ${disabled} `}
    >
      {props.left && (
        <path d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
      )}
      {!props.left && (
        <path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path>
      )}
    </svg>
  );
}
export default PopularCases;
