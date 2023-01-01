import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
// import Projects from "./components/Project";
import Calender from "../components/Calender";
import Stats from "../components/stats";
import Contact from "../components/ContactMe";
import Skills from "../components/Skills";
import Project from "../components/projects";
import Aboutme from "../components/Aboutme";

const MainPags = () => {
  return (
    <div>
      <Header />

      <Banner />
      <Aboutme />

      <Skills />
      <Project />

      <Calender />
      <Stats />

      <Contact />
    </div>
  );
};

export default MainPags;
