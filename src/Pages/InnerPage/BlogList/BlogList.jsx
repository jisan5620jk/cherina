import { Link } from "react-router-dom";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import blogListImg from "/public/images/Componant2/blog/blog-1.jpg";
import itemthumb from "/public/images/Componant2/blog/post4.jpg";
import itemthumb2 from "/public/images/Componant2/blog/post5.jpg";
import itemthumb3 from "/public/images/Componant2/blog/post6.jpg";
import logo from "/public/images/Componant2/logo/logo-icon.png";
import { VscHeart } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaCommentsDollar, FaRegCalendarCheck } from "react-icons/fa6";
import { HiChevronDoubleRight } from "react-icons/hi2";

const BlogList = () => {
  return (
    <>
      <Breadcamp
        breadCampLink={"Blog List"}
        breadCampTitle={"Blog List"}
        url={"/blogList"}
      />
      <section className="py-28">
        <div className="Container">
          <div className="grid grid-cols-3 gap-7">
            <div className="col-span-2">
              <div
                className="border rounded-md
               pb-8"
              >
                <img src={blogListImg} />
                <div>
                  <h2></h2>
                  <div>
                    <h6>
                      <FaUserCircle />
                      Jhon Alexon
                    </h6>
                    <h6>
                      <FaRegCalendarCheck />
                      Jan 10, 2024gi
                    </h6>
                    <h6>
                      <FaCommentsDollar />
                      02 Comments
                    </h6>
                  </div>
                </div>
                <p></p>
                <Link to={"/"}>
                  <button>
                    Continue Reading
                    <HiChevronDoubleRight />
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-span-1">
              <div className="relative inline-block w-full mb-7 p-7 rounded-md bg-PrimaryColor-0">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search here..."
                  required
                  className="w-full h-[60px] p-6 rounded font-Manrope"
                />
                <button
                  type="submit"
                  className=" text-xl text-PrimaryColor-0 transition-all duration-500 flex items-center justify-center hover:hue-rotate-[360deg] absolute right-12 top-1/2 -translate-y-1/2"
                >
                  <IoSearch />
                </button>
              </div>
              <div className="px-8 bg-[#fff4f1] rounded-md pt-7 pb-4 mb-7">
                <h4 className="font-Manrope font-bold text-[22px] text-HeadingColor-0 mb-8">
                  Upcomming Events
                </h4>
                <Link to={"/"}>
                  <button className="group flex gap-4 mb-6">
                    <div>
                      <img src={itemthumb} />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Manrope font-bold text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                        Raise fund for clean & healthy foods
                      </h6>
                      <p className="font-Manrope text-TextColor-0 text-[15px] mt-1">
                        January 01, 2024
                      </p>
                    </div>
                  </button>
                </Link>
                <hr />
                <Link to={"/"}>
                  <button className="group flex gap-4 my-6">
                    <div>
                      <img src={itemthumb2} />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Manrope font-bold text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                        Collect Funds for Kids Foods & Bevarage
                      </h6>
                      <p className="font-Manrope text-TextColor-0 text-[15px] mt-1">
                        January 16, 2024
                      </p>
                    </div>
                  </button>
                </Link>
                <hr />
                <Link to={"/"}>
                  <button className="group flex gap-4 my-6">
                    <div>
                      <img src={itemthumb3} />
                    </div>
                    <div className="flex-1 text-left">
                      <h6 className="font-Manrope font-bold text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
                        Donate Money for Kids Educations
                      </h6>
                      <p className="font-Manrope text-TextColor-0 text-[15px] mt-1">
                        January 27, 2024
                      </p>
                    </div>
                  </button>
                </Link>
              </div>
              <div className="bg-[#fff4f1] rounded-md px-9 pt-7 pb-4 mb-7">
                <h4 className="font-Manrope font-bold text-[22px] text-HeadingColor-0 mb-8">
                  Categories
                </h4>
                <ul className="mt-8">
                  <li>
                    <Link to={"/"}>
                      <button className="w-full font-Manrope text-left font-medium text-HeadingColor-0 transition-all duration-500 px-5 py-3 rounded bg-white mb-3 overflow-hidden z-10 relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-10 before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        Charity
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button className="w-full font-Manrope text-left font-medium text-HeadingColor-0 transition-all duration-500 px-5 py-3 rounded bg-white mb-3 overflow-hidden z-10 relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-10 before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        Donations
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button className="w-full font-Manrope text-left font-medium text-HeadingColor-0 transition-all duration-500 px-5 py-3 rounded bg-white mb-3 overflow-hidden z-10 relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-10 before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        Healths
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button className="w-full font-Manrope text-left font-medium text-HeadingColor-0 transition-all duration-500 px-5 py-3 rounded bg-white mb-3 overflow-hidden z-10 relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-10 before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        Foods
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button className="w-full font-Manrope text-left font-medium text-HeadingColor-0 transition-all duration-500 px-5 py-3 rounded bg-white mb-3 overflow-hidden z-10 relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-10 before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        Kid Educations
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button className="w-full font-Manrope text-left font-medium text-HeadingColor-0 transition-all duration-500 px-5 py-3 rounded bg-white mb-3 overflow-hidden z-10 relative before:absolute before:top-0 before:right-0 before:w-0 before:-z-10 before:h-full before:bg-PrimaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-white">
                        Fund Raising
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-[#fff4f1] rounded-md px-8 pt-7 pb-10 mb-7">
                <h4 className="font-Manrope font-bold text-[22px] text-HeadingColor-0">
                  Tag Cloud
                </h4>
                <ul className="mt-8 inline-block">
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-full flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Manrope relative z-10 before:absolute before:top-0 before:left-0 before:rounded-full before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                        Charity
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-full flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Manrope relative z-10 before:absolute before:top-0 before:left-0 before:rounded-full before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                        Educations
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-full flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Manrope relative z-10 before:absolute before:top-0 before:left-0 before:rounded-full before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                        Water
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-full flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Manrope relative z-10 before:absolute before:top-0 before:left-0 before:rounded-full before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                        Foods
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px] mb-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-full flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Manrope relative z-10 before:absolute before:top-0 before:left-0 before:rounded-full before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                        Orphans
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block mr-[10px]">
                    <Link to={"/"}>
                      <button className="bg-white rounded-full flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Manrope relative z-10 before:absolute before:top-0 before:left-0 before:rounded-full before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                        Donations
                      </button>
                    </Link>
                  </li>
                  <li className="inline-block">
                    <Link to={"/"}>
                      <button className="bg-white rounded-full flex items-center justify-center text-HeadingColor-0 transition-all duration-500 font-medium px-5 py-2 font-Manrope relative z-10 before:absolute before:top-0 before:left-0 before:rounded-full before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 hover:before:scale-100 hover:text-white">
                        Healths
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-[url('/public/images/Componant2/others/a-1.png')] bg-right bg-cover bg-no-repeat text-center py-[75px] rounded-md mb-7">
                <Link to={"/"}>
                  <img src={logo} className="m-auto" />
                </Link>
                <h4 className="font-Manrope font-bold text-3xl text-white mt-6 mb-6">
                  Helping Orphan
                  <br />
                  People
                </h4>
                <Link to={"/"} className="flex justify-center">
                  <button type="submit" className="primary-btn">
                    Donate Now
                    <VscHeart />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogList;
