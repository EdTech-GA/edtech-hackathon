import { useState } from "react";
import "./ButtonToggle.css";

export default function ButtonToggle() {
  const [isActive, setIsActive] = useState(false);

  function toggleClass() {
    setIsActive(!isActive);
  }
  return (
    <>
      <div className="container">
        <div className={`text${isActive ? "active" : "null"}`}>
          <button onClick={toggleClass}>FONT SIZE</button>
        </div>
        <br></br>
        <div className={`color${isActive ? "colorblind" : "null"}`}>
          <button onClick={toggleClass}>COLOR</button>
        </div>
        <br></br>
        <div className={`day${isActive ? "night" : "null"}`}>
          <button onClick={toggleClass}>NIGHT VERSION</button>
        </div>
      </div>
    </>
  );
}