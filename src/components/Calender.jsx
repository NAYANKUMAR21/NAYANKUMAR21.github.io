import GitHubCalendar from "react-github-calendar";
// import ReactTooltip from "react-tooltip";
const Calender = () => {
  return (
    <div
      style={{ textAlign: "center", marginBottom: "60px", marginTop: "100px" }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "0px",
          fontSize: "55px",
        }}
      >
        GitHub
      </h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "70px",
          color: "teal",
        }}
      >
        Calender and Stats
      </p>
      <GitHubCalendar
        username="NAYANKUMAR21"
        blockSize={15}
        fontSize={15}
        style={{
          margin: "auto",
          marginTop: "80px",
          padding: "20px",
        }}
      ></GitHubCalendar>
      {/* <ReactTooltip delayShow={20} html /> */}
    </div>
  );
};
export default Calender;
// import React from "react";

// const Calender = () => {
//   return (
//     <div>

//     </div>
//   );
// };

// export default Calender;
