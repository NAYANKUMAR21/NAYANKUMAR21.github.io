import React from "react";
import { useState, useEffect } from "react";
import Menu from "./menu";
import styles from "./Header.module.css";
function Header() {
  const [stickyClass, setStickyClass] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 1 ? setStickyClass("sticky") : setStickyClass("");
    }
  };

  return (
    <header className={`${stickyClass}`}>
      <div className="header-inner">
        <span className="logo">Nayan Kumar</span>
        <div className={styles.navbarMenu}>
          <Menu />
        </div>
        <div className="links">
          <a className="link" href="#banner">
            Home
          </a>
          <a className="link" href="#aboutme">
            About me
          </a>
          <a className="link" href="#skills">
            Skills
          </a>
          <a className="link" href="#projects">
            Projects
          </a>
          <a className="link" href="#contact">
            Contact
          </a>
          {/* <a className="link" target="_blank" href="https://drive.google.com/file/d/1-svc7URxPfzDAU9bJbR-fFCkRons7uGf/view">
            Resume
          </a> */}
          <a
            className="link"
            href="https://drive.google.com/file/d/1-svc7URxPfzDAU9bJbR-fFCkRons7uGf/view"
          >
            Resume
          </a>
        </div>
      </div>
      <div className={`mobile-links ${active ? "active" : ""}`}>
        <a className="link" onClick={() => setActive(!active)} href="#banner">
          Home
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#aboutme">
          About Me
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#skills">
          Skills
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#projects">
          Projects
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#contact">
          Contact
        </a>
        <a
          className="link"
          onClick={() => setActive(!active)}
          href="https://drive.google.com/file/d/1-svc7URxPfzDAU9bJbR-fFCkRons7uGf/view"
        >
          Resume
        </a>
      </div>
    </header>
  );
}

export default Header;
