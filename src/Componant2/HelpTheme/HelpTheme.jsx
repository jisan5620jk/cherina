import SectionHeading from "../SectionHeading/SectionHeading";
import iconOne from "/public/images/Componant2/theme-icon-1.png";
import iconTwo from "/public/images/Componant2/theme-icon-2.png";
import iconThree from "/public/images/Componant2/theme-icon-3.png";
import ThemeCard from "./ThemeCard";

const themeInfo = [
  {
    id: 1,
    cardIcon: iconOne,
    title: "Kids Education",
    description: "Phosfluorescently to cultivate distinctively empower",
    hoverTextColor: "coral",
    url: "#",
  },
  {
    id: 2,
    cardIcon: iconTwo,
    title: "Good Health",
    description: "Phosfluorescently to cultivate distinctively empower",
    hoverTextColor: "aquamarine",
    url: "#",
  },
  {
    id: 3,
    cardIcon: iconThree,
    title: "Healthy Food",
    description: "Phosfluorescently to cultivate distinctively empower",
    hoverTextColor: "deepSkyBlue",
    url: "#",
  },
];

const HelpTheme = () => {
  return (
    <section className="bg-[url('/public/images/Componant2/help-theme-bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="Container grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[30px] py-20 2xl:py-[120px]">
        <div className="">
          <SectionHeading title="Change Everything" />
          <h1 className="heading-main lg:text-[32px] lg:leading-9 2xl:text-[42px] text-white mt-5">
            We’re here to Help{" "}
            <span className="text-PrimaryColor-0">Theme</span>
          </h1>
        </div>
        {themeInfo.map(
          ({ id, cardIcon, title, description, url, hoverTextColor }) => {
            return (
              <ThemeCard
                key={id}
                cardIcon={cardIcon}
                title={title}
                description={description}
                hoverTextColor={hoverTextColor}
                url={url}
              />
            );
          }
        )}
      </div>
    </section>
  );
};

export default HelpTheme;
