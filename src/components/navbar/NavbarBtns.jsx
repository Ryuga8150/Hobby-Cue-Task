import { FaChevronDown } from "react-icons/fa6";
import { CiCompass1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

function NavbarBtns() {
  return (
    <div className="d-flex align-items-center btn-box">
      <div className="d-flex align-items-center icon-remove">
        <div className="d-flex justify-content-center align-items-center icon-btn-box circular-icon">
          <CiCompass1 className="icon-btn-box--icon bg-purple" />
        </div>
        <span className="icon-btn-box--text">Explore</span>
        <div className="d-flex justify-content-center align-items-center icon-btn-box">
          <FaChevronDown className="icon-btn-box--icon" />
        </div>
      </div>

      <div className="d-flex align-items-center icon-remove">
        <div className="d-flex justify-content-center align-items-center icon-btn-box circular-icon">
          <FaStar className="icon-btn-box--icon bg-purple" />
        </div>
        <span className="icon-btn-box--text">Hobbies</span>
        <div className="d-flex justify-content-center align-items-center icon-btn-box">
          <FaChevronDown className="icon-btn-box--icon" />
        </div>
      </div>

      <FaBookmark className="icon-btn" />
      <IoNotifications className="icon-btn" />
      <FaShoppingCart className="icon-btn" />

      <button className="signin-btn icon-remove">Sign In</button>
    </div>
  );
}

export default NavbarBtns;
