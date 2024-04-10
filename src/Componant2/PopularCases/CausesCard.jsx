import { HiOutlineClock } from "react-icons/hi";
import ProgressBar from "react-animated-progress-bar";
import { Link } from "react-router-dom";

const CausesCard = ({
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
    <div className="rounded-md group">
      <figure className="overflow-x-hidden relative">
        <img
          src={image}
          alt="cause-card-image"
          draggable={false}
          className={`w-full ${
            color === "gold" ? "border-b-4 border-gold" : ""
          }`}
        />
        <span
          className={`absolute bottom-0 left-0 ${
            color === "aquamarine"
              ? `bg-aquamarine`
              : color === "coral"
              ? `bg-coral`
              : color === "deepSkyBlue"
              ? `bg-deepSkyBlue`
              : `bg-gold`
          } px-5 py-2 text-sm leading-[26px] text-white font-medium  z-[1] overflow-hidden rounded-tr`}
        >
          {category}
        </span>
      </figure>
      <div className="p-7 font-Manrope  shadow-cases rounded-b-[4px]">
        <Link to="#">
          <h3 className="text-[22px] leading-[30px] text-darkSlate font-bold hover:text-Manrope transition-all duration-300">
            {title}
          </h3>
        </Link>
        <p className="flex items-center text-[15px] leading-[26px] text-dimGray font-normal mt-5">
          <span
            className={`w-[22px] h-[22px] rounded-full ${
              color === "aquamarine"
                ? `bg-aquamarine`
                : color === "coral"
                ? `bg-coral`
                : color === "deepSkyBlue"
                ? `bg-deepSkyBlue`
                : `bg-gold`
            } grid items-center justify-center mr-3`}
          >
            <HiOutlineClock size={18} className="bg-transparent text-white" />
          </span>
          {remainingDays}
        </p>

        <div
          className={`${
            color === "aquamarine"
              ? `bg-aquamarine`
              : color === "coral"
              ? `bg-coral`
              : color === "deepSkyBlue"
              ? `bg-deepSkyBlue`
              : `bg-gold`
          } bg-opacity-15 p-4 sm:p-5 mt-7 rounded-[4px]`}
        >
          <ProgressBar
            rect
            width="100%"
            height="5px"
            fontColor={color === "aquamarine" ? "#53c99f" : color}
            fontSize="16px"
            percentage={percentage}
            defColor={{
              excellent: `${color === "aquamarine" ? "#53c99f" : color}`,
              good: `${color === "aquamarine" ? "#53c99f" : color}`,
              fair: "green",
              poor: "red",
            }}
            rectBorderRadius="2px"
            trackPathColor="white"
            trackBorderColor="transparent"
          />
          <div className="flex items-center justify-between pt-3">
            <div>
              <span className="text-sm leading-[26px] text-dimGray font-normal mr-2">
                Achived :
              </span>
              <span className="text-[15px] leading-[26px] text-darkSlate font-semibold ">
                {achive}
              </span>
            </div>
            <div>
              <span className="text-sm leading-[26px] text-dimGray font-normal mr-2">
                Goal :
              </span>
              <span className="text-[15px] leading-[26px] text-darkSlate font-semibold ">
                {goal}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CausesCard;
