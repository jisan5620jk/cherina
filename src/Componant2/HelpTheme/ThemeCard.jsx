import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ThemeCard = ({ cardIcon, title, description, url, hoverTextColor }) => {
  const hoverTextClasses = {
    coral: "text-Manrope",
    deepSkyBlue: "text-deepSkyBlue",
    aquamarine: "text-aquamarine",
  };
  const hoverTextClass = hoverTextClasses[hoverTextColor];

  return (
    <div className="bg-white  pt-[25px] 2xl:w-[272px] pb-5 rounded font-Manrope group ">
      <figure className="mt-5 mb-6">
        <img
          src={cardIcon}
          alt="cardIcon"
          className="mx-auto group-hover:transform group-hover:-scale-x-100 transition-all ease-in-out duration-500"
        />
      </figure>
      <div className="text-center  mb-9 px-[30px]">
        <h3
          className={`text-lg sm:text-xl leading-[30px] text-darkSlate hover:${hoverTextClass} transition-all ease-in-out duration-300 font-bold cursor-grabbing`}
        >
          {title}
        </h3>
        <p className="text-[15px] leading-[26px] text-dimGray mt-4 font-normal">
          {description}
        </p>
      </div>
      <Link
        to={url}
        className="flex items-center justify-between pt-5 border-t-[1px] border-[#1b34341a]"
      >
        <span
          className={`text-sm text-darkSlate font-medium hover:${hoverTextClass} transition-all ease-in-out duration-300 pl-[30px]`}
        >
          Read More
        </span>
        <span className="pr-[30px]">
          <FaArrowRightLong size={18} className={`${hoverTextClass}  `} />
        </span>
      </Link>
    </div>
  );
};

export default ThemeCard;
