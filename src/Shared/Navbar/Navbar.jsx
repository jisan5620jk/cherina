/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { PiUserCircleFill } from "react-icons/pi";
import { BiChevronDown } from "react-icons/bi";
import Logo from "/public/images/Componant1/logo/logo.png";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { VscHeart } from "react-icons/vsc";

const Navbar = () => {
  //sticky

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  // modal openar

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className={`w-full transition-all duration-300 bg-transparent absolute z-10 text-[#7d7f8c]`}
    >
      {/* top Navbar */}
      <header className="border-b border-BorderColor-0 overflow-hidden hidden py-[14px] md:block">
        <div className="Container flex items-center justify-between">
          <div>
            <p className="font-Manrope text-sm text-white font-semibold">
              Welcome! Charina Non-Profit Program 2024
            </p>
          </div>
          <div className="flex items-center gap-14">
            <div className="flex items-center gap-2 font-Manrope text-sm text-white font-semibold ">
              <PiUserCircleFill className="text-xl text-PrimaryColor-0" />
              <Link to={"/"}>
                <button>Login</button>
              </Link>
              <h6>/</h6>
              <Link to={"/"}>
                <button>Register</button>
              </Link>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                <li>
                  <Link to={"/"}>
                    <FaFacebookF className="text-sm transition-all duration-500 text-white hover:text-PrimaryColor-0" />
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <FaLinkedinIn className="text-sm transition-all duration-500 text-white hover:text-PrimaryColor-0" />
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <FaPinterestP className="text-sm transition-all duration-500 text-white hover:text-PrimaryColor-0" />
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <FaXTwitter className="text-sm transition-all duration-500 text-white hover:text-PrimaryColor-0" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* top Navbar */}
      <header
        className="header-section"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="Container">
          {/* main Navbar */}
          <div className="flex flex-col lg:flex-row items-center justify-between lg:h-[100px]">
            {/* website Logo */}
            <div className=" w-48 lg:w-52 lg:p-4 ">
              <Link to="/">
                <img
                  src={Logo}
                  className="hidden lg:block w-full"
                  alt="website_logo"
                />
              </Link>
            </div>
            {/* small screen size */}
            <div className="px-3 w-full lg:hidden flex justify-between bg-khaki h-[70px] items-center p-3">
              <div className=" w-28 ">
                <Link to="/">
                  <img
                    src={Logo}
                    className="block lg:hidden "
                    alt="constre_website_logo"
                  />
                </Link>
              </div>
              {/* toggle bar mode. */}
              <button
                className="lg:hidden block focus:outline-none "
                onClick={toggleNavbar}
              >
                {/* modal open and close */}
                {isOpen ? (
                  <IoMdClose className="w-6 h-6 text-white" />
                ) : (
                  <FaBars className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
            {/* All navLink are hear with active */}
            <div className="flex gap-6 items-center">
              <ul
                className={`${
                  isOpen ? "block" : "hidden"
                } text-right w-full lg:w-fit ease-in-out lg:flex space-y-2 lg:space-y-0 space-x-0  flex flex-col lg:flex-row text-sm uppercase lg:bg-transparent py-3 lg:py-0 font-Yantramanav font-medium sm:text-base text-white transition-all duration-500
                `}
              >
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-1 py-2 w-full block transition-all duration-300 group relative`}
                  to="/"
                >
                  <span className="flex items-center">
                    Home
                    <BiChevronDown className="ml-1" />
                  </span>
                  <div
                    className="absolute pt-5 lg:pt-8 z-[1]"
                    data-aos="zoom-in-left"
                    data-aos-duration="1000"
                  >
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-PrimaryColor-0 ">
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <NavLink to="/" className="py-2 block">
                            Home One
                          </NavLink>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <NavLink to="/home2" className="py-2 block">
                            Home Two
                          </NavLink>
                        </li>
                      </div>
                    </ul>
                  </div>
                </NavLink>
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-1 py-2 w-full block transition-all duration-300 group relative `}
                  to="#"
                >
                  <span className="flex items-center">
                    Pages
                    <BiChevronDown className="ml-1" />
                  </span>
                  <div className="absolute pt-5 lg:pt-8 z-20">
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-[#171717] ">
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <NavLink to="/about" className="py-2 block">
                            About
                          </NavLink>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <NavLink to="/volunteer" className="py-2 block">
                            Volunteer
                          </NavLink>
                        </li>
                      </div>

                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <NavLink to="/volunteer2" className="py-2 block">
                            Become Volunteer
                          </NavLink>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <NavLink to="/gallary" className="py-2 block">
                            Gallary
                          </NavLink>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <NavLink to="/contact" className="py-2 block">
                            Contact
                          </NavLink>
                        </li>
                      </div>
                    </ul>
                  </div>
                </NavLink>
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-1 py-2 w-full block transition-all duration-300 group relative `}
                  to="#"
                >
                  <span className="flex items-center">
                    Donations
                    <BiChevronDown className="ml-1" />
                  </span>
                  <div className="absolute pt-5 lg:pt-8 z-20">
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-[#171717] ">
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <NavLink to="/donate" className="py-2 block">
                            Donations
                          </NavLink>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <NavLink to="/donategrid" className="py-2 block">
                            Donation Grid
                          </NavLink>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <NavLink to="/donationDetails" className="py-2 block">
                            Donation Details
                          </NavLink>
                        </li>
                      </div>
                    </ul>
                  </div>
                </NavLink>
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-1 py-2 w-full block transition-all duration-300 group relative `}
                  to="#"
                >
                  <span className="flex items-center">
                    Events
                    <BiChevronDown className="ml-1" />
                  </span>
                  <div className="absolute pt-5 lg:pt-8 z-20">
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-[#171717] ">
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <NavLink to="/events" className="py-2 block">
                            Our Events
                          </NavLink>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <NavLink to="/eventdetails" className="py-2 block">
                            Event Details
                          </NavLink>
                        </li>
                      </div>
                    </ul>
                  </div>
                </NavLink>
                {/* blog sub menu link */}
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-1 py-2 w-full block transition-all duration-300 group relative `}
                  to="#"
                >
                  <span className="flex items-center">
                    BLOG
                    <BiChevronDown className="ml-1" />
                  </span>
                  <div className="absolute pt-5 lg:pt-8 z-20">
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-[#171717] ">
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <NavLink to="/blogList" className="py-2 block">
                            Blog List
                          </NavLink>
                        </li>
                      </div>
                      <div className=" px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <NavLink to="/blogDetails" className="py-2 block">
                            Blog Details
                          </NavLink>
                        </li>
                      </div>
                    </ul>
                  </div>
                </NavLink>
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} lg:border-b-0 px-3 lg:px-1 py-2 w-full block transition-all duration-300`}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </ul>
              <div className="hidden lg:flex items-center">
                <Link to={"/donate"} className="primary-btn">
                  <button className="flex gap-2 items-center">
                    Donate Now
                    <VscHeart />
                  </button>
                </Link>
              </div>
            </div>

            {/* large device visible button and search icon */}
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
