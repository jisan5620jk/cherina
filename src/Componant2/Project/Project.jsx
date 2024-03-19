import projectImg from "../../../public/images/Componant2/project/project1.png";
import projectImg2 from "../../../public/images/Componant2/project/project2.png";
import projectImg3 from "../../../public/images/Componant2/project/project3.png";
import projectImg4 from "../../../public/images/Componant2/project/project4.png";

const Project = () => {
  return (
    <section className="bg-[url('../../../public/images/Componant2/project/project-bg.png')] bg-no-repeat bg-cover bg-center py-28 text-center">
      <div className="Container">
        <h5 className="sub-title before:left-1/2 before:-translate-x-1/2">
          Start Donating Theme
        </h5>
        <h1 className="text-white xl:text-[42px] font-Manrope font-extrabold leading-[52px] mt-6">
          Our Ongoing
          <span className="text-PrimaryColor-0"> Projects</span>
        </h1>
        <div className="grid grid-cols-4 justify-between mt-[70px]">
          <div>
            <img src={projectImg} className="m-auto" />
            <h5 className="font-Manrope text-white text-2xl font-bold mt-6">
              Free Medicals
            </h5>
          </div>
          <div>
            <img src={projectImg2} className="m-auto" />
            <h5 className="font-Manrope text-white text-2xl font-bold mt-6">
              Foods and Water
            </h5>
          </div>
          <div>
            <img src={projectImg3} className="m-auto" />
            <h5 className="font-Manrope text-white text-2xl font-bold mt-6">
              Emergency Aids
            </h5>
          </div>
          <div>
            <img src={projectImg4} className="m-auto" />
            <h5 className="font-Manrope text-white text-2xl font-bold mt-6">
              Zero Proverty
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
