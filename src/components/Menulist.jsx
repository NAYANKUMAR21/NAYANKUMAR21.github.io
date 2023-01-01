import React from "react";

const Menulist = () => {
  return (
    <div className="menu-list">
      <ul style={{ textDecoration: "none" }}>
        <a href="#banner">
          <p>Home</p>
        </a>
        <br />
        <a href="#skills">
          <p>Skills</p>
        </a>
        <br />
        <a href="#aboutme">
          <p>About Me</p>
        </a>
        <br />
        <a href="#projects">
          <p>Project</p>
        </a>
        <br />

        <a href="#contact">
          <p>Contact</p>
        </a>

        <br />
        <a href="https://drive.google.com/file/d/1-svc7URxPfzDAU9bJbR-fFCkRons7uGf/view">
          <p>Resume</p>
        </a>
      </ul>
    </div>
  );
};

export default Menulist;
