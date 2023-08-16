import reactIcon from "../../assets/reactjs-icon.png"
import "./navbar.css"

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={reactIcon} alt="" className="icon" />
        <h1>ReactFacts</h1>
      </div>
      <div>
        <h2>React Course - Project 1</h2>
      </div>
    </nav>
  );
}

export default Navbar