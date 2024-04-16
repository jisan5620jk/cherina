import { Link } from "react-router-dom";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import shape from "/public/images/Componant2/volunteer/heart.png";

const Volunteer = () => {
  return (
    <section className="bg-[url('/public/images/Componant2/volunteer/call-bg2.png')] bg-center bg-cover relative py-[150px]">
      <div className="Container">
        <div className="flex flex-col lg:flex-row gap-7 lg:items-center">
          <div className="flex-1">
            <h5 className="sub-title">Join Our Volunteers</h5>
            <h1 className="text-white text-[22px] sm:text-4xl leading-8 md:text-[36px] 2xl:text-[42px] font-Manrope font-extrabold sm:leading-[52px] mt-6 md:w-3/4 lg:w-full">
              Join Now Our Volunteers & Help the
              <span className="text-PrimaryColor-0"> Childreens</span>
            </h1>
          </div>
          <div className="flex-1 flex lg:justify-end">
            <Link to={"/volunteer2"}>
              <button className="primary-btn">
                Become A Volunteer
                <RiArrowRightDoubleFill />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <img
        draggable={false}
        src={shape}
        className="animate-zoomInOut absolute left-2/3 top-1/4"
      />
    </section>
  );
};

export default Volunteer;
