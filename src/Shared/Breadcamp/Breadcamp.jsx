/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const Breadcamp = ({breadCampTitle,url,breadCampLink}) => {
  return (
    <div className="bg-[url('/public/images/Componant2/breadcamp/breadcamp-bg.png')] bg-no-repeat bg-cover bg-center flex items-center h-[350px] sm:h-[500px]">
      <div className="Container">
        <h1 className="font-Yantramanav font-bold text-4xl sm:text-[56px] text-white uppercase mb-2 sm:mb-5">
          {breadCampTitle}
        </h1>
        <ul className="flex gap-5 items-center">
          <li>
            <Link to={"/"}>
              <button className="font-Yantramanav font-medium text-white flex gap-2 transition-all duration-500 hover:text-SecondaryColor-0">
                <IoHome /> HOME
              </button>
            </Link>
          </li>
          <li>
            <FaArrowRightLong className="text-white" />
          </li>
          <li>
            <Link to={url}>
              <button className="font-Yantramanav uppercase font-medium text-white flex gap-2 transition-all duration-500 hover:text-SecondaryColor-0">
                {breadCampLink}
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcamp;
