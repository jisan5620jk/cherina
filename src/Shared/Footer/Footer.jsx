import { FaAnglesRight } from "react-icons/fa6";
import { VscHeart } from "react-icons/vsc";
import footerLogo from "/public/images/Componant2/logo/logo.png";
import gallaryImg1 from "/public/images/Componant2/footer/footer1.png";
import gallaryImg2 from "/public/images/Componant2/footer/footer2.png";
import gallaryImg3 from "/public/images/Componant2/footer/footer3.png";
import gallaryImg4 from "/public/images/Componant2/footer/footer4.png";
import gallaryImg5 from "/public/images/Componant2/footer/footer5.png";
import gallaryImg6 from "/public/images/Componant2/footer/footer6.png";
import footerShape from "/public/images/Componant2/footer/footer-arrow.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[url('/public/images/Componant2/footer/footer-bg.jpg')] bg-cover bg-bottom py-28 relative">
        <img
          src={footerShape}
          className="absolute bottom-28 left-3 2xl:left-48 animate-swing"
        />
        <div className="Container">
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <img src={footerLogo} />
              <p className="font-Manrope text-white opacity-50 mt-8 w-11/12 2xl:w-10/12">
                Distinctively foster optimal manufactured without real-time
                e-markets. Energistically productize compelling
              </p>
              <Link to={"/"}>
                <button className="primary-btn mt-11">
                  Donate Now
                  <VscHeart />
                </button>
              </Link>
            </div>
            <div className="col-span-2">
              <h4 className="font-Manrope font-bold text-[22px] text-white inline-block pb-5 mb-9 relative before:absolute before:bottom-0 before:left-0 before:w-10 before:h-[2px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full">
                Quick Links
              </h4>
              <ul>
                <li>
                  <Link to={"/"}>
                    <button
                      className="flex items-center gap-2 text-white opacity-50 font-Manrope
                  text-[15px] font-medium transition-all duration-500 hover:text-PrimaryColor-0 py-2"
                    >
                      <FaAnglesRight />
                      About
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button
                      className="flex items-center gap-2 text-white opacity-50 font-Manrope
                  text-[15px] font-medium transition-all duration-500 hover:text-PrimaryColor-0 py-2"
                    >
                      <FaAnglesRight />
                      Contact
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button
                      className="flex items-center gap-2 text-white opacity-50 font-Manrope
                  text-[15px] font-medium transition-all duration-500 hover:text-PrimaryColor-0 py-2"
                    >
                      <FaAnglesRight />
                      Events
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button
                      className="flex items-center gap-2 text-white opacity-50 font-Manrope
                  text-[15px] font-medium transition-all duration-500 hover:text-PrimaryColor-0 py-2"
                    >
                      <FaAnglesRight />
                      Latest Blog
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button
                      className="flex items-center gap-2 text-white opacity-50 font-Manrope
                  text-[15px] font-medium transition-all duration-500 hover:text-PrimaryColor-0 py-2"
                    >
                      <FaAnglesRight />
                      Donations
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-3">
              <h4 className="font-Manrope font-bold text-[22px] text-white inline-block pb-5 mb-9 relative before:absolute before:bottom-0 before:left-0 before:w-10 before:h-[2px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full">
                Contact Info
              </h4>
              <h6 className="font-Manrope font-semibold text-white text-lg mb-2">
                Phone Number
              </h6>
              <Link to={"/"}>
                <button className="font-Manrope text-white text-[15px] opacity-50 block">
                  +880 392 (4560) 290
                </button>
              </Link>
              <Link to={"/"}>
                <button className="font-Manrope text-white text-[15px] opacity-50 block">
                  example@gmail.com
                </button>
              </Link>
              <h6 className="font-Manrope font-semibold text-white text-lg mt-6 mb-2">
                Address
              </h6>
              <h6 className="font-Manrope text-white text-[15px] opacity-50">
                602/B, Sandigo-USA
              </h6>
            </div>
            <div className="col-span-3">
              <h4 className="font-Manrope font-bold text-[22px] text-white inline-block pb-5 mb-9 relative before:absolute before:bottom-0 before:left-0 before:w-10 before:h-[2px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full">
                Our Galary
              </h4>
              <ul className="grid grid-cols-3 gap-3 2xl:w-[268px]">
                <li>
                  <Link to={"/"}>
                    <button>
                      <img src={gallaryImg1} />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button>
                      <img src={gallaryImg2} />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button>
                      <img src={gallaryImg3} />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button>
                      <img src={gallaryImg4} />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button>
                      <img src={gallaryImg5} />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button>
                      <img src={gallaryImg6} />
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#172526]">
        <div className="Container flex flex-col justify-between items-center py-7 md:flex-row">
          <div>
            <p className="text-[15px] text-[#ffffff86] font-Manrope mb-5 lg:mb-0">
              &copy; 2024, Cherina. All Rights Reserved. Developed By
              <span className="text-PrimaryColor-0 font-semibold">
                {" "}
                Mr. Jisan Khan
              </span>
            </p>
          </div>
          <div>
            <ul className="flex gap-12">
              <li>
                <Link to={"/"}>
                  <button className="font-Manrope text-[17px] text-[#ffffff86] transition-all duration-500 hover:text-white">
                    Terms & Condition
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-Manrope text-[17px] text-[#ffffff86] transition-all duration-500 hover:text-white">
                    Privacy Policy
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
