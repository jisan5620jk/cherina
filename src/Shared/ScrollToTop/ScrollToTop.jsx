import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="top-to-btm">
      {showScroll && (
        <div className="icon-position icon-style" onClick={scrollToTop}>
          <FaAngleUp className="text-3xl" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
