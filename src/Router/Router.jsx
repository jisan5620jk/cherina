import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home1 from "../Pages/Home1/Home1";
import AboutInner from "../Pages/InnerPage/AboutInner/AboutInner";
import Volunteer from "../Pages/InnerPage/VolunteerInner/VolunteerInner";

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
        element: <Volunteer />,
      },
    ],
  },
]);

export default router;
