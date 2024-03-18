import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const FeatureMain = ({featureIcon,featureTitle,featureDesc,featureBtn}) => {
    return (
        <div className="group flex flex-col text-center mb-7 bg-white shadow-cases rounded-md overflow-hidden pt-[52px] pb-12 relative before:absolute before:top-0 before:left-1/2 before:w-0 before:h-[5px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:rounded-t-md hover:before:w-full hover:before:left-0">
              <img src={featureIcon} className="m-auto" />
              <h4 className="font-Manrope font-bold text-2xl text-HeadingColor-0 mt-8 mb-[18px] transition-all duration-500 group-hover:text-PrimaryColor-0">
                {featureTitle}
              </h4>
              <p className="font-Manrope text-TextColor-0">
                {featureDesc}
              </p>
                <Link to={"/"} className="m-auto">
                  <button className="flex items-center gap-2 mt-6 text-HeadingColor-0 font-medium transition-all duration-500 group-hover:text-SecondaryColor-0">
                    {featureBtn}
                    <FaArrowRightLong className="text-SecondaryColor-0" />
                  </button>
                </Link>
            </div>
    );
};

export default FeatureMain;