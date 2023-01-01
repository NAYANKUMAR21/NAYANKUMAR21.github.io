import React from "react";
import photo from "../Assets/IMG_6192.jpg";
import myresume from "../Assets/Nayan_Kumar_Resume.pdf";
import Typewriter from "typewriter-effect";
function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img
              style={{ width: "300px", borderRadius: "2%" }}
              // src="/profile_Pic.jpg"
              src={photo}
              alt=""
            />
          </div>
          <div className="banner-content">
            <h6
              style={{
                fontSize: "30px",
                marginBottom: "20px",
                marginTop: "50px",
                color: "#e54c4c",
              }}
            >
              Hello, I'm Nayan kumar
            </h6>
            <div
              style={{ marginTop: "50px", fontSize: "25px" }}
              className="AspiringBox"
            >
              <h1>
                Aspiring <span style={{ color: "#e54c4c" }}>MERN</span> stack
                Developer
              </h1>
            </div>
            {/* {
              <p align="center">
                <a href="https://github.com/The-Young-Programmer">
                  <img src="https://readme-typing-svg.herokuapp.com/?lines=👨‍💻%20Fullstack%20Web%20Developer;💬%20Ask%20me%20about%20HTML,%20CSS,%20Javascript;🔰%20Always%20learning%20new%20tech&font=Pacifico&center=true&width=850&height=120&color=58a6ff&vCenter=true&size=45%22" alt="selftyping letters"></img>
                </a>
              </p>
            } */}
            <div
              className="TypeCode"
              style={{ marginTop: "50px", fontSize: "23px" }}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("FULL STACK WEB DEVELOPER !")
                    .start()
                    .pauseFor(2000)
                    .deleteAll();
                  typewriter
                    .typeString("A Tech Fanatic !")
                    .pauseFor(2000)
                    .deleteAll()
                    .start()
                    .pauseFor();
                  typewriter
                    .typeString("A technology enthusiast !")
                    .pauseFor(50000)
                    .deleteAll()
                    .start()
                    .pauseFor();
                  //https://sufi.vercel.app/static/media/stackbox.216e1ead7c8acd95f868.gif
                  //   .deleteAll()
                  //   .start()
                  //   .deleteAll();
                  // typewriter
                  //   .typeString("A FULL STACK DEVELOPER")
                  //   .deleteAll()
                  //   .start();
                }}
              />
            </div>
            {/* <p style={{ marginBottom: "30px", lineHeight: "2" }}> */}
            {/* Analytical and detail-oriented aspiring Full Stack Web
              Developer capable of writing production-ready code using
              MERN stack.Passionate about coding and intensely
              interested in working in a product-based company. */}
            {/* Full stack web developer with specialisation in JavaScript, HTML,
              CSS , REACT , REST API , Git/GITHUB Object-Oriented design.
              Offering excellence in analytical decision making and articulate
              presenter with ability to communicate technical information with
              clear and concise manner. 450+ hours of coding and hands-on
              experience in developing website features */}
            {/* </p> */}
            <div className="BannerAllLinks" style={{ marginTop: "50px" }}>
              <div>
                <a href="https://github.com/NAYANKUMAR21">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/nayan-kumar-/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
              <div>
                <a href="mailto:naayaankumar@gmail.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    fill="currentColor"
                    class="bi bi-envelope-at"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                    <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div
            // style={{
            //   border: "1px solid white",
            // }}
            >
              <button
                className="BannerButton"
                style={{
                  backgroundColor: "#e54c4c",
                  borderRadius: "5px",
                  // width: "40%",
                  // border: "1px solid white",
                  border: "none",
                  textAlign: "center",
                  padding: "14px 20px 14px 20px",
                  marginTop: "50px",
                  fontSize: "20px",
                }}
              >
                <a
                  // href="https://drive.google.com/file/d/1-svc7URxPfzDAU9bJbR-fFCkRons7uGf/view"
                  href={myresume}
                  target="Nayan_Kumar_Resume.pdf"
                  download="Nayan_Kumar_Resume.pdf"
                >
                  Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
