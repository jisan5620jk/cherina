import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import donateImg from "/public/images/Componant2/donate/donations2.png";
import donateProfile from "/public/images/Componant2/donate/organiz.png";
import itemthumb from "/public/images/Componant2/blog/post1.png";
import itemthumb2 from "/public/images/Componant2/blog/post2.png";
import itemthumb3 from "/public/images/Componant2/blog/post3.png";
import logo from "/public/images/Componant2/logo/logo-icon.png";
import donarImg from "/public/images/Componant2/donar/donar1.png";
import donarImg2 from "/public/images/Componant2/donar/donar2.png";
import donarImg3 from "/public/images/Componant2/donar/donar3.png";
import donarImg4 from "/public/images/Componant2/donar/donar4.png";
import donarImg5 from "/public/images/Componant2/donar/donar5.png";
import ProgressBar from "react-animated-progress-bar";
import { VscHeart } from "react-icons/vsc";
import { Link } from "react-router-dom";
import {
  FaCircleCheck,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const DonationDetails = () => {
  return (
    <>
      <Breadcamp
        breadCampLink={"Donation Details"}
        breadCampTitle={"Donations Details"}
        url={"/donationDetails"}
      />
      <section className="p-28 donate">
        <div className="Container">
          <div className="grid grid-cols-3 gap-7">
            <div className="col-span-2">
              <div
                className="border rounded-md
               pb-8"
              >
                <img src={donateImg} />
                <div className="grid grid-cols-3 items-center mt-8">
                  <div className="mt-8 px-9 col-span-2">
                    <div className="px-[6px] py-1 rounded-2xl">
                      <ProgressBar
                        rect
                        width="100%"
                        height="9px"
                        fontColor="#fff"
                        fontSize="17px"
                        leading="10px"
                        margin="0px"
                        rectBorderRadius="10px"
                        fontWeight="600"
                        percentage="50"
                        defColor={{
                          excellent: "#ff5e14",
                          good: "#fe7f4c",
                          fair: "green",
                          poor: "red",
                        }}
                        trackPathColor="#e8e9e9"
                        trackBorderColor="transparent"
                      />
                    </div>
                    <div className="flex justify-between mt-4">
                      <h6 className="font-Manrope text-TextColor-0 text-sm">
                        Achived :
                        <span className="text-HeadingColor-0 font-semibold text-[15px]">
                          {" "}
                          $50,000
                        </span>
                      </h6>
                      <h6 className="font-Manrope text-TextColor-0 text-sm">
                        Goal :
                        <span className="text-HeadingColor-0 font-semibold text-[15px]">
                          {" "}
                          $90,000
                        </span>
                      </h6>
                    </div>
                  </div>
                  <Link to={"/"} className="col-span-1">
                    <button className="primary-btn">
                      Donate Now
                      <VscHeart />
                    </button>
                  </Link>
                </div>
              </div>
              <Link to={"/"}>
                <h2 className="font-Manrope font-bold text-3xl text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 mt-10 mb-4">
                  Give a good education orphan childreen
                </h2>
              </Link>
              <p className="font-Manrope text-TextColor-0">
                Assertively harness ethical networks and business networks.
                Monotonectally integrate highly effic initiatives vis-a-vis
                strategic markets. Proactively matrix enterprise functionalities
                rather extensive benefits. Energistically pontificate
                cutting-edge paradigms with 2.0 e-tailers. Uniquely syndicate
                installed base web services whereas enabled
              </p>
              <Link to={"/"}>
                <h2 className="font-Manrope font-bold text-3xl text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 mt-10 mb-4">
                  Give a good education orphan childreen
                </h2>
              </Link>
              <p className="font-Manrope text-TextColor-0">
                Credibly deliver empowered leadership skills with go forward
                materials. Synergistically parallel task empowered mindshare
                after leading-edge results.
              </p>
              <ul className="mt-9">
                <li className="text-HeadingColor-0 font-medium flex items-center gap-2 font-Manrope">
                  <FaCircleCheck className="text-PrimaryColor-0 text-xl" />{" "}
                  Completely architect competitive information
                </li>
                <li className="text-HeadingColor-0 font-medium flex items-center gap-2 font-Manrope my-4">
                  <FaCircleCheck className="text-PrimaryColor-0 text-xl" /> Must
                  be Maintain Every Rules & Regulations
                </li>
                <li className="text-HeadingColor-0 font-medium flex items-center gap-2 font-Manrope">
                  <FaCircleCheck className="text-PrimaryColor-0 text-xl" /> You
                  should be a honest & powerful
                </li>
              </ul>
              <h5 className="font-Manrope font-bold text-HeadingColor-0 text-2xl mb-8 mt-14">
                Recent Donars
              </h5>
              <div className="bg-[#1b2b2b] py-7 flex justify-around rounded-md">
                <div className="text-center">
                  <img src={donarImg} className="m-auto" />
                  <h6 className="font-Manrope font-semibold text-white mt-3">
                    David Meza
                  </h6>
                  <h6 className="font-Manrope font-semibold text-PrimaryColor-0">
                    $25
                  </h6>
                </div>
                <div className="text-center">
                  <img src={donarImg2} className="m-auto" />
                  <h6 className="font-Manrope font-semibold text-white mt-3">
                    John Alexon
                  </h6>
                  <h6 className="font-Manrope font-semibold text-PrimaryColor-0">
                    $25
                  </h6>
                </div>
                <div className="text-center">
                  <img src={donarImg3} className="m-auto" />
                  <h6 className="font-Manrope font-semibold text-white mt-3">
                    Louse Kerin
                  </h6>
                  <h6 className="font-Manrope font-semibold text-PrimaryColor-0">
                    $25
                  </h6>
                </div>
                <div className="text-center">
                  <img src={donarImg4} className="m-auto" />
                  <h6 className="font-Manrope font-semibold text-white mt-3">
                    Amy D. Vida
                  </h6>
                  <h6 className="font-Manrope font-semibold text-PrimaryColor-0">
                    $25
                  </h6>
                </div>
                <div className="text-center">
                  <img src={donarImg5} className="m-auto" />
                  <h6 className="font-Manrope font-semibold text-white mt-3">
                    Sonia Sara
                  </h6>
                  <h6 className="font-Manrope font-semibold text-PrimaryColor-0">
                    $25
                  </h6>
                </div>
              </div>
              <h3 className="font-Manrope font-bold text-[28px] mt-[72px] mb-10">
                Comments (2)
              </h3>
              <div className="flex gap-6 border-b pb-8">
                <div>
                  <FaUserCircle className="text-[#e0e0e0] text-7xl" />
                </div>
                <div className="flex-1 relative">
                  <h5 className="font-Manrope font-semibold text-HeadingColor-0 text-xl">
                    David Alexon
                  </h5>
                  <p className="font-Manrope text-PrimaryColor-0 mt-[6px] mb-2">
                    March 01, 2024
                  </p>
                  <p className="font-Manrope text-TextColor-0">
                    Dramatically reinvent adaptive bandwidth vis reliable
                    infrastructures to the progressively iterate distributed
                    interfaces nice day with our fundraising donation
                  </p>
                  <Link to={"/"}>
                    <button
                      className="px-4 py-1 bg-PrimaryColor-0 text-white text-sm rounded-full
                     font-Manrope absolute top-2 right-0"
                    >
                      Reply
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex gap-6 pt-8">
                <div>
                  <FaUserCircle className="text-[#e0e0e0] text-7xl" />
                </div>
                <div className="flex-1 relative">
                  <h5 className="font-Manrope font-semibold text-HeadingColor-0 text-xl">
                    Louse Kerin
                  </h5>
                  <p className="font-Manrope text-PrimaryColor-0 mt-[6px] mb-2">
                    October 01, 2024
                  </p>
                  <p className="font-Manrope text-TextColor-0">
                    Dramatically reinvent adaptive bandwidth vis reliable
                    infrastructures to the progressively iterate distributed
                    interfaces nice day with our fundraising donation
                  </p>
                  <Link to={"/"}>
                    <button
                      className="px-4 py-1 bg-PrimaryColor-0 text-white text-sm rounded-full
                     font-Manrope absolute top-2 right-0"
                    >
                      Reply
                    </button>
                  </Link>
                </div>
              </div>
              <h3 className="font-Manrope font-bold text-[28px] mt-20 mb-10">
                Add New Comments
              </h3>
              <form action="#" method="post">
                <div className="grid grid-cols-2 gap-7 mb-5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name*"
                    required
                    className="outline-none rounded-3xl font-Manrope text-sm bg-[#fff5f1] w-full px-6 py-2 h-[60px]"
                  />
                  <input
                    type="email"
                    name="email"
                    id="eamil"
                    placeholder="Enter Your E-Mail*"
                    required
                    className="outline-none rounded-3xl font-Manrope text-sm bg-[#fff5f1] w-full px-6 py-2 h-[60px]"
                  />
                </div>
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Write A Comment..."
                  required
                  className="outline-none resize-none rounded-3xl font-Manrope text-sm bg-[#fff5f1] w-full px-6 py-3 h-[160px]  mb-9"
                ></textarea>
                <button type="submit" className="primary-btn">
                  Submit Comment
                  <IoIosSend />
                </button>
              </form>
            </div>
            <div className="col-span-1">
              <div className="bg-PrimaryColor-0 rounded-md text-center py-10 mb-7">
                <img src={donateProfile} className="m-auto" />
                <h5 className="font-Manrope font-bold text-2xl text-white mt-5 mb-3">
                  Louise A. Kelly
                </h5>
                <h6 className="font-Lobster text-white">Organizer</h6>
                <p className="font-Manrope text-white text-[15px] mt-2 mb-5">
                  Created : Nov 28, 2022
                </p>
                <ul className="flex items-center justify-center gap-2 ">
                  <li>
                    <Link to={"/"}>
                      <button
                        className="text-white transition-all duration-500 border text-sm flex justify-center items-center hover:text-PrimaryColor-0 w-10 h-10 rounded-full relative z-10 before:absolute before:top-0 before:left-0 before:-z-10 before:w-full before:h-full before:bg-white before:rounded-full before:scale-0 before:transition-all
                       before:duration-500 hover:before:scale-100"
                      >
                        <FaFacebookF />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button
                        className="text-white transition-all duration-500 border text-sm flex justify-center items-center hover:text-PrimaryColor-0 w-10 h-10 rounded-full relative z-10 before:absolute before:top-0 before:left-0 before:-z-10 before:w-full before:h-full before:bg-white before:rounded-full before:scale-0 before:transition-all
                       before:duration-500 hover:before:scale-100"
                      >
                        <FaXTwitter />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button
                        className="text-white transition-all duration-500 border text-sm flex justify-center items-center hover:text-PrimaryColor-0 w-10 h-10 rounded-full relative z-10 before:absolute before:top-0 before:left-0 before:rounded-full before:-z-10 before:w-full before:h-full before:bg-white before:scale-0 before:transition-all
                       before:duration-500 hover:before:scale-100"
                      >
                        <FaLinkedinIn />
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="px-8 bg-[#fff4f1] rounded-md pt-7 pb-4 mb-7">
                <h4 className="font-Manrope font-bold text-[22px] text-HeadingColor-0 mb-8">
                  Category
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
              <div className="bg-[#fff4f1] rounded-md px-8 pt-7 pb-10">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DonationDetails;
