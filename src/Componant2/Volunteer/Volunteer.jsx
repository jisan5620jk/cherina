import { Link } from "react-router-dom";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import shape from "/public/images/Componant2/volunteer/heart.png";

const Volunteer = () => {
    return (
      <section className="bg-[url('/public/images/Componant2/volunteer/call-bg2.png')] bg-center bg-cover relative py-[150px]">
        <div className="Container">
          <div className="flex items-center">
            <div className="flex-1">
              <h5 className="sub-title">Join Our Volunteers</h5>
              <h1 className="text-white xl:text-[39px] 2xl:text-[42px] font-Manrope font-extrabold leading-[52px] mt-6 ">
                Join Now Our Volunteers & Help the
                <span className="text-PrimaryColor-0"> Childreens</span>
              </h1>
            </div>
            <div className="flex-1 flex justify-end">
              <Link to={"/"}>
                <button className="primary-btn">
                  Become A Volunteer
                  <RiArrowRightDoubleFill />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <img src={shape} className="animate-zoomInOut absolute left-2/3 top-1/4"/>
      </section>
    );
};

export default Volunteer;