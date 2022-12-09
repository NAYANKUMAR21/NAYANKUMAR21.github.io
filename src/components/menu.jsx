import "./menu.css";
import { useState, useEffect } from "react";

const Menu = () => {
  const [state, setState] = useState(false);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 2);
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className={sticky ? "container sticky" : "container"}>
      <div className="menu-icon" id="burgir">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: "red", width: "30px", height: "30px" }}
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
          onClick={() => setState(!state)}
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        <div className="menu-list">
          <ul style={{ textDecoration: "none" }}>
            <a href="#banner">Home</a>
            <br />
            <a href="#projects">Project</a>
            <br />
            <a href="#skills">Skills</a>
            <br />
            <a href="#contact">Contact</a>
            <br />
            <a href="https://drive.google.com/file/d/1cBdCxa0VSWFCFBgX80jegqT5tG0KOqjw/view">
              Resume
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Menu;
