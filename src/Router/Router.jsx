import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home1 from "../Pages/Home1/Home1";
import AboutInner from "../Pages/InnerPage/AboutInner/AboutInner";
import VolunteerInner from "../Pages/InnerPage/VolunteerInner/VolunteerInner";
import VolunteerInner2 from "../Pages/InnerPage/VolunteerInner2/VolunteerInner2";

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
    ],
  },
]);

export default router;
