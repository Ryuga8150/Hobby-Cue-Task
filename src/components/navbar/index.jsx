import NavbarBtns from "./NavbarBtns";
import Searchbar from "./Searchbar";
import "./navbar.css";
import "./media-queries.css";

function Navbar() {
  return (
    <div className="bg-white navbar-container d-flex align-items-center justify-content-between">
      <img src="/HobbyCue-Logo.png" alt="logo" className="company-logo" />
      <Searchbar />
      <NavbarBtns />
    </div>
  );
}

export default Navbar;
