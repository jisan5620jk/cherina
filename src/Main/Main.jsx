import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

const Main = () => {
  return (
    <>
      <Navbar />
      <ErrorPage />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Main;
