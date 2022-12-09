import "./Project.css";
const projects = [
  {
    title: "Project-1",
    name: "Monday.com clone",
    img: "https://monday.com/p/wp-content/uploads/2021/11/meet-monday.png",
    glink: "https://github.com/sanju682295/dark-van-7997/tree/master/HTML",
    llink: "https://resplendent-mermaid-59b026.netlify.app/index.html",
    tech: "React | Mongoose | JavaScript |MongoDB ",
    para: "Nayan is an online shopping destination for children's, men's, and women's luxury fashion and lifestyle design.",
  },
  {
    title: "Project-2",
    name: "LoseIt.com clone",
    img: "data:image/png;base64,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",
    glink: "https://github.com/ranjanpalai69/malicious-thrill-8470",
    llink:
      "https://brilliant-moxie-01b056.netlify.app/landing%20page2.2/landing.html",
    tech: "HTML | CSS | JavaScript",
    para: "Lose It! is a calorie counter & food diary diet app that helps you stick to your diet and achieve weight loss that fits!",
  },
  {
    title: "Project-3",
    name: "StyleCraze.com clone",
    img: "data:image/jpeg;base64,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",
    glink: "https://github.com/sanju682295/gutsy-sheet-7629",
    llink: "https://crazystyle.vercel.app/",
    tech: "ReactJs | CSS | ChakraUI | JavaScript",
    para: " Women's Fashion, Beauty And Wellness Community to get solutions to all your Beauty queries and stay upto on the latest Beauty Trends.",
  },
];
const Projects = () => {
  return (
    <section id="projects">
      <h1>My Projects</h1>
      <div className="project-container">
        {projects.map((pro) => (
          <div className="project-card">
            <div className="image">
              <img src={pro.img} alt="" />
            </div>
            <div style={{ textAlign: "center" }} className="project-details">
              <h3 style={{ color: "black", marginBottom: "20px" }}>
                {pro.name}
              </h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "3px",
                  width: "98%",
                }}
              >
                <h3 style={{ color: "black" }}>Tech stack:- {pro.tech}</h3>
              </div>
              <br />
              <p
                style={{
                  color: "black",
                  marginTop: "0px",
                  marginLeft: "20px",
                  marginRight: "20px",
                  textAlign: "justify",
                }}
              >
                {pro.para}
              </p>
            </div>
            <div
              className="links"
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "space-around",
                paddingTop: "15%",
                width: "50%",
                margin: "auto",
              }}
            >
              <a href={pro.glink}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                  color="black"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a href={pro.llink} target="blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-link"
                  viewBox="0 0 16 16"
                  color="black"
                >
                  <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                  <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
