import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home1 from "../Pages/Home1/Home1";
import AboutInner from "../Pages/InnerPage/AboutInner/AboutInner";
import VolunteerInner from "../Pages/InnerPage/VolunteerInner/VolunteerInner";
import VolunteerInner2 from "../Pages/InnerPage/VolunteerInner2/VolunteerInner2";
import GallaryInner from "../Pages/InnerPage/GallaryInner/GallaryInner";
import ContactInner from "../Pages/InnerPage/ContactInner/ContactInner";
import DonateInner from "../Pages/InnerPage/DonateInner/DonateInner";
import DonationGrid from "../Pages/InnerPage/DonationGrid/DonationGrid";
import DonattionDetails from "../Pages/InnerPage/DonationDetails/DonationDetails";
import EventInner from "../Pages/InnerPage/EventInner/EventInner";
import EventDetails from "../Pages/InnerPage/EventsDetails/EventDetails";
import BlogList from "../Pages/InnerPage/BlogList/BlogList";
import BlogDetails from "../Pages/InnerPage/BlogDetails/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home1 />,
      },
      {
        path: "/about",
        element: <AboutInner />,
      },
      {
        path: "/volunteer",
        element: <VolunteerInner />,
      },
      {
        path: "/volunteer2",
        element: <VolunteerInner2 />,
      },
      {
        path: "/gallary",
        element: <GallaryInner />,
      },
      {
        path: "/contact",
        element: <ContactInner />,
      },
      {
        path: "/donate",
        element: <DonateInner />,
      },
      {
        path: "/donategrid",
        element: <DonationGrid />,
      },
      {
        path: "/donationDetails",
        element: <DonattionDetails />,
      },
      {
        path: "/events",
        element: <EventInner />,
      },
      {
        path: "/eventdetails",
        element: <EventDetails />,
      },
      {
        path: "/blogList",
        element: <BlogList />,
      },
      {
        path: "/blogDetails",
        element: <BlogDetails />,
      },
    ],
  },
]);

export default router;
