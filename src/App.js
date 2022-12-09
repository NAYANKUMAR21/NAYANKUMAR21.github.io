import Header from "./components/Header";
import Banner from "./components/Banner";
// import Projects from "./components/Project";
import Calender from "./components/Calender";
import Stats from "./components/stats";
import Contact from "./components/ContactMe";
import Skills from "./components/Skills";
import Project from "./components/projects";

function App() {
  return (
    <div>
      <Header />
     
      <Banner />
      {/* <div
      style={{border:"1px solid red",marginTop:"30px",marginBottom:"30px"}}
      ></div> */}
      <Project />
      {/* <div
      style={{border:"1px solid red",marginTop:"30px",marginBottom:"30px"}}
      ></div> */}
      <Calender />
      <Stats/>
      {/* <div
      style={{border:"1px solid red",marginTop:"30px",marginBottom:"30px"}}
      ></div> */}
      <Skills/>
      {/* <div
      style={{border:"1px solid red",marginTop:"30px",marginBottom:"30px"}}
      ></div> */}
      <Contact/>
    </div>
  );
}

export default App;
