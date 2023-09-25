import "./mainContent.css";
import reactIcon2 from "../../assets/reactjs-icon 2.png";
import lightIcon from "../../assets/light.png"
import PropTypes from "prop-types";

function MainContent({ mode }) {
  return (
    <div className="div1">
      <div className={`container ${mode && "light"} `}>
        <div className={`title ${mode && "light-text"}`}>
          <h1>Fun facts about React</h1>
        </div>

        <div className={`list ${mode && "light-text"}`}>
          <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
        </div>
      </div>

      <img src={mode ? lightIcon : reactIcon2} alt="" className="bigIcon" />
    </div>
  );
}

MainContent.propTypes = {
  mode: PropTypes.bool,
};

export default MainContent;
