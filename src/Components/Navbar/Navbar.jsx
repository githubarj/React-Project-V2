import reactIcon from "../../assets/reactjs-icon.png";
import "./navbar.css";
import PropTypes from "prop-types";

function Navbar({ handleClick, mode }) {
  return (
    <div className={`nav ${mode && "light-nav"} `}>
      <div className="logo">
        <img src={reactIcon} alt="" className="icon" />
        <h1>ReactFacts</h1>
      </div>
      <div className="toggle" onClick={handleClick}>
        <p className={`toggle-light ${mode && "active-light"} `}>Light</p>
        <div className={`toggle-slide ${mode && "light-toggle-slide "} `}>
          <div className={`toggle-circle ${mode && "light-circle "} `}></div>
        </div>
        <p className={`toggle-dark ${!mode && "active-text"} `}>Dark</p>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  handleClick: PropTypes.func,
  mode: PropTypes.bool,
};

export default Navbar;
