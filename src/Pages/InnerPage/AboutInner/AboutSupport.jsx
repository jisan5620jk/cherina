import CountUp from "react-countup";

const AboutSupport = () => {
  return (
    <section className="py-28 bg-[url('/public/images/Componant2/counter/counter-bg.png')] bg-bottom bg-cover bg-no-repeat">
      <div className="Container">
        <div className="flex items-center">
          <div className="flex-1">
            <h5 className="sub-title">Join Us and Start Donating</h5>
            <h1 className="text-HeadingColor-0 text-[22px] sm:text-4xl leading-8 md:text-[39px] 2xl:text-[42px] font-Manrope font-extrabold sm:leading-[52px] mt-6">
              Make your Goals Always to
              <br /> Helps
              <span className="text-PrimaryColor-0"> Poor People</span>
            </h1>
            <p className="font-Manrope text-TextColor-0">
              Completely create leveraged best practices and B2B interfaces
              productivate cutting-edge solutions with forward
            </p>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div>
                <div className="bg-[url('/public/images/Componant2/counter/counter1.png')] bg-no-repeat bg-cover w-[125px] h-[127px] flex flex-col justify-center items-center text-center">
                  <CountUp
                    start={-9}
                    end={12}
                    suffix="M"
                    className="text-[38px] font-Lobster font-normal text-white"
                  />
                </div>
                <h6 className="font-Manrope text-TextColor-0 mt-6">
                  Total Donations
                </h6>
              </div>
              <div>
                <div className="bg-[url('/public/images/Componant2/counter/counter2.png')] bg-no-repeat bg-cover w-[125px] h-[127px] flex flex-col justify-center items-center text-center">
                  <CountUp
                    start={-9}
                    end={10}
                    suffix="K+"
                    className="text-[38px] font-Lobster font-normal text-white"
                  />
                </div>
                <h6 className="font-Manrope text-TextColor-0 mt-6">
                  Project Founded
                </h6>
              </div>
              <div>
                <div className="bg-[url('/public/images/Componant2/counter/counter3.png')] bg-no-repeat bg-cover w-[125px] h-[127px] flex flex-col justify-center items-center text-center">
                  <CountUp
                    start={-9}
                    end={890}
                    suffix=""
                    className="text-[38px] font-Lobster font-normal text-white"
                  />
                </div>
                <h6 className="font-Manrope text-TextColor-0 mt-6">
                  Total Volunteers
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSupport;
