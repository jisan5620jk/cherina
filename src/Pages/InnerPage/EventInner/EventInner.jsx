import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import EventInnerMain from "./EventInnerMain";
import eventImg from "/public/images/Componant2/event/events-1.jpg"

const EventInner = () => {
    return (
      <>
        <Breadcamp
          breadCampLink={"Our Events"}
          breadCampTitle={"Our Events"}
          url={"/events"}
        />

        <section className="py-28">
          <div className="Container">
            <EventInnerMain
              eventImg={eventImg}
              eventDate="10 Dec"
              eventTitle="Learn Exactly how we Arrange a Event"
              eventDesc="Completely create leveraged best practices and B2B interfaces events productivate cutting-edge solutions with go forward supply chains has supply."
              eventTime="December 10 , 12.00 PM"
              eventLocation="102/B New Road, Sandigo, USA"
              url="/events"
              eventButton="Join Events"
            />
          </div>
        </section>
      </>
    );
};

export default EventInner;