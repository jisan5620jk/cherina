import { FaAnglesRight } from "react-icons/fa6";
import { VscHeart } from "react-icons/vsc";
import footerLogo from "/public/images/Componant2/logo/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[url('/public/images/Componant2/footer/footer-bg.jpg')] bg-cover bg-bottom">
      <div className="Container">
        <div>
          <div>
            <img src={footerLogo} />
            <p>
              Distinctively foster optimal manufactured without real-time
              e-markets. Energistically productize compelling
            </p>
            <Link to={"/"}>
              <button className="primary-btn mt-6">
                Donate Now
                <VscHeart />
              </button>
            </Link>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to={"/"}>
                  <button><FaAnglesRight />About</button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button><FaAnglesRight />Contact</button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button><FaAnglesRight />Events</button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button><FaAnglesRight />Latest Blog</button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button><FaAnglesRight />Donations</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
