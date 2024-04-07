import { Link } from "react-router-dom";
import blogImg from "/public/images/Componant2/blog/blog1.jpg";
import blogImg2 from "/public/images/Componant2/blog/blog2.jpg";
import blogImg3 from "/public/images/Componant2/blog/blog3.jpg";
import { FaComments, FaShareAlt, FaUser } from "react-icons/fa";
import { LuMoveRight } from "react-icons/lu";

const Blog = () => {
  return (
    <section className="relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-2/3 before:bg-[#fff8f5] before:-z-10">
      <div className="Container">
        <div className="text-center">
          <h5 className="sub-title before:left-1/2 before:-translate-x-1/2">
            Read Latest Articles
          </h5>
          <h1 className="text-HeadingColor-0 text-[22px] sm:text-4xl leading-8 md:text-[39px] 2xl:text-[42px] font-Manrope font-extrabold sm:leading-[52px] mt-6">
            Directly from the Latest
            <br /> News &<span className="text-PrimaryColor-0"> Articles</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
          <div className="inline-block mb-7 bg-white">
            <div className="relative border-b-[5px] border-SecondaryColor-0 inline-block">
              <img src={blogImg} className="w-[600px]" />
              <h6 className="font-Manrope font-medium text-white bg-SecondaryColor-0 px-5 py-2 rounded-se-2xl inline-block absolute -bottom-1 left-0">
                16 Jan, 2024
              </h6>
            </div>
            <div className="shadow-cases">
              <div className="px-8">
                <div className="flex gap-[22px] items-center mt-5 mb-3">
                  <h6 className="flex items-center gap-2 font-Manrope text-[15px] text-TextColor-0">
                    <FaUser className="text-SecondaryColor-0" />
                    John Alex
                  </h6>
                  <h6 className="flex items-center gap-2 font-Manrope text-[15px] text-TextColor-0">
                    <FaComments className="text-SecondaryColor-0" />2 Comments
                  </h6>
                </div>
                <Link to={"/blogDetails"}>
                  <button className="text-left font-Manrope font-bold text-[19px] sm:text-[22px] lg:text-lg xl:text-[22px] text-HeadingColor-0 transition-all duration-500 hover:text-SecondaryColor-0">
                    Help for Kids Education Donate Money
                  </button>
                </Link>
              </div>
              <div className="flex justify-between items-center pt-5 pb-7 border-t border-[#1b34341a] px-8 mt-6">
                <Link to={"/blogDetails"}>
                  <button className="flex gap-1 items-center font-Manrope font-medium transition-all duration-500 hover:text-SecondaryColor-0">
                    Read More
                    <LuMoveRight />
                  </button>
                </Link>
                <FaShareAlt className="text-SecondaryColor-0 text-lg" />
              </div>
            </div>
          </div>
          <div className="inline-block mb-7 bg-white">
            <div className="relative border-b-[5px] border-PrimaryColor-0 inline-block">
              <img src={blogImg2} className="w-[600px]" />
              <h6 className="font-Manrope font-medium text-white bg-PrimaryColor-0 px-5 py-2 rounded-se-2xl inline-block absolute -bottom-1 left-0">
                16 Jan, 2024
              </h6>
            </div>
            <div className="shadow-cases">
              <div className="px-8">
                <div className="flex gap-[22px] items-center mt-5 mb-3">
                  <h6 className="flex items-center gap-2 font-Manrope text-[15px] text-TextColor-0">
                    <FaUser className="text-PrimaryColor-0" />
                    John Alex
                  </h6>
                  <h6 className="flex items-center gap-2 font-Manrope text-[15px] text-TextColor-0">
                    <FaComments className="text-PrimaryColor-0" />2 Comments
                  </h6>
                </div>
                <Link to={"/blogDetails"}>
                  <button className="text-left font-Manrope font-bold text-[19px] sm:text-[22px] lg:text-lg xl:text-[22px] text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0">
                    Organic Food Reserved for Childreens
                  </button>
                </Link>
              </div>
              <div className="flex justify-between items-center pt-5 pb-7 border-t border-[#1b34341a] px-8 mt-6">
                <Link to={"/blogDetails"}>
                  <button className="flex gap-1 items-center font-Manrope font-medium transition-all duration-500 hover:text-PrimaryColor-0">
                    Read More
                    <LuMoveRight />
                  </button>
                </Link>
                <FaShareAlt className="text-PrimaryColor-0 text-lg" />
              </div>
            </div>
          </div>
          <div className="inline-block mb-7 bg-white">
            <div className="relative border-b-[5px] border-[#1cc6e9] inline-block">
              <img src={blogImg3} className="w-[600px]" />
              <h6 className="font-Manrope font-medium text-white bg-[#1cc6e9] px-5 py-2 rounded-se-2xl inline-block absolute -bottom-1 left-0">
                16 Jan, 2024
              </h6>
            </div>
            <div className="shadow-cases">
              <div className="px-8">
                <div className="flex gap-[22px] items-center mt-5 mb-3">
                  <h6 className="flex items-center gap-2 font-Manrope text-[15px] text-TextColor-0">
                    <FaUser className="text-[#1cc6e9]" />
                    John Alex
                  </h6>
                  <h6 className="flex items-center gap-2 font-Manrope text-[15px] text-TextColor-0">
                    <FaComments className="text-[#1cc6e9]" />2 Comments
                  </h6>
                </div>
                <Link to={"/blogDetails"}>
                  <button className="text-left font-Manrope font-bold text-[19px] sm:text-[22px] lg:text-lg xl:text-[22px] text-HeadingColor-0 transition-all duration-500 hover:text-[#1cc6e9]">
                    How to Make good Health childreen Campaign
                  </button>
                </Link>
              </div>
              <div className="flex justify-between items-center pt-5 pb-7 border-t border-[#1b34341a] px-8 mt-6">
                <Link to={"/blogDetails"}>
                  <button className="flex gap-1 items-center font-Manrope font-medium transition-all duration-500 hover:text-[#1cc6e9]">
                    Read More
                    <LuMoveRight />
                  </button>
                </Link>
                <FaShareAlt className="text-[#1cc6e9] text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
