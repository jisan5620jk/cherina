import featureIcon from "/public/images/Componant2/feature/feature1.png";
import featureIcon2 from "/public/images/Componant2/feature/feature2.png";
import featureIcon3 from "/public/images/Componant2/feature/feature3.png";
import FeatureMain from "./FeatureMain";

const Feature = () => {
    return (
      <section className="relative -mt-14 z-10">
        <div className="Container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <FeatureMain
              featureIcon={featureIcon}
              featureTitle={"Send Donations"}
              featureDesc={
                "Leveraged best practices and B2B edge productivate cutting solution"
              }
              featureBtn={"Read More"}
            />
            <FeatureMain
              featureIcon={featureIcon2}
              featureTitle={"Become A Volunteer"}
              featureDesc={
                "Leveraged best practices and B2B edge productivate cutting solution"
              }
              featureBtn={"Read More"}
            />
            <FeatureMain
              featureIcon={featureIcon3}
              featureTitle={"Latest Events"}
              featureDesc={
                "Leveraged best practices and B2B edge productivate cutting solution"
              }
              featureBtn={"Read More"}
            />
          </div>
        </div>
      </section>
    );
};

export default Feature;