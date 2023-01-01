import "./menu.css";
import { useState, useEffect } from "react";
import Menulist from "./Menulist";

const Menu = () => {
  const [state, setState] = useState(false);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  console.log(state);
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
        {state && <Menulist />}
      </div>
    </div>
  );
};
export default Menu;
