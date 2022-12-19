import "./projects.css";

// import "./Project.css";
const projects = [
  {
    title: "Project-1",
    name: "Monday.com",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfKD3ZYZVoLGRWpFksBMkf0vuE1rMH6RfW6aUJEplk0w&s",
    glink: "https://github.com/avdhut9/robust-pen-8778",
    llink: "https://tranquil-salmiakki-7bf43f.netlify.app",
    tech: "React | CSS | HTML | Mongoose | MongoDB",
    para: "Monday.com is the Work OS that provides you with all of the no-code building blocks so you can shape your workflows, your way. Here, you can run every aspect of your work by layering industry-specific products on top of the Work OS. Combine building blocks, like apps and integrations, to customize anything you need to improve the way your business runs. Let's take a look at what makes monday.com Work OS so unique",
  },
  {
    title: "Project-2",
    name: "Happyfox.com",
    img: "https://assets.www.happyfox.com/brand/happyfox-logo-white.png",
    glink: "https://github.com/NAYANKUMAR21/closed-mask-38",
    llink: "https://cheerful-duckanoo-d5d1ea.netlify.app/",
    tech: "HTML | CSS | JavaScript",
    para: "HappyFox is a cloud-based customer relationship management solution that provides help desk and ticketing solutions to businesses across various industries, including computer and software, education, travel and leisure, media and publishing, energy, retail, and more.",
  },
  {
    title: "Project-3",
    name: "ayoa.com ",
    img: "https://www.ayoa.com/wp-content/uploads/2022/07/canvas-laptop.png",
    glink:
      "https://github.com/NAYANKUMAR21/habitual-harbor-2140/tree/master/ayoa_clone",
    llink: "https://stunning-starship-732553.netlify.app",
    tech: "ReactJs | CSS | ChakraUI | JavaScript",
    para: " Ayoa is the original mind mapping app, pushing the boundaries of brainstorming to new levels. Get started with Ayoa and its powerful AI to fuel your productiveness .",
  },
];
const Project = () => {
  return (
    <section id="projects">
      <h1
        style={{
          textAlign: "center",
          marginBottom: "0px",
          fontSize: "55px",
        }}
      >
        Projects
      </h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "70px",
          color: "teal",
        }}
      >
        My recent Works
      </p>
      <div className="project-container">
        {projects.map((el) => (
          <div id="project-container">
            <div className="ProjectImage">
              <img src={el.img} alt="" />
            </div>
            <div className="ProjectDescription">
              <div>
                <h2>{el.name}</h2>
                <p style={{ marginTop: "10px" }}>{el.para}</p>
              </div>

              <div className="stackName">
                <span>
                  <h3>{el.tech}</h3>
                </span>
              </div>
              <div style={{ marginTop: "20px", display: "flex", gap: "20px" }} className="ProjectLinks">
                <div>
                  <a href={el.glink}>
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
                  <a href={el.llink}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      fill="currentColor"
                      class="bi bi-link-45deg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                      <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Project;
