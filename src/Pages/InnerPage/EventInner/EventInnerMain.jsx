/* eslint-disable react/prop-types */
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const EventInnerMain = ({
  eventImg,
  eventDate,
  eventTitle,
  eventDesc,
  eventTime,
  eventLocation,
  url,
  eventButton
}) => {
  return (
        <div className="">
          <div>
            <img src={eventImg} /> <h6>{eventDate}</h6>
          </div>
          <div>
            <h2>{eventTitle}</h2>
            <p>{eventDesc}</p>
            <h6>
              <AiOutlineClockCircle />
              {eventTime}
            </h6>
            <h6>
              <MdLocationPin />
              {eventLocation}
            </h6>
          </div>
          <Link to={url}>
            <button>{eventButton}</button>
          </Link>
        </div>
  );
};

export default EventInnerMain;
