import { FaSearch } from "react-icons/fa";
function Searchbar() {
  return (
    <div className="search-box">
      {/* <div className="d-flex w-30 h-4"></div> */}
      <input type="text" className="search-input" />
      <div className="icon-box">
        <FaSearch className="icon" />
      </div>
    </div>
  );
}

export default Searchbar;
