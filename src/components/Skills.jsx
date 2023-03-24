import { formToJSON } from 'axios';
import './Skill.css';
// const frontend = ["JavaScript", "React", "HTML", "Chakra UI", "CSS"];
// const backend = ["Node", "express", "MongoDB"];
// const tools = ["VS Code", "Git", "Postman"];
const frontend = [
  {
    name: 'HTML',
    image: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
  },
  {
    name: 'CSS',
    image: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
  },
  {
    name: 'Javascript',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
  },
  {
    name: 'TypeScript',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png',
  },
  {
    name: 'React',
    image: 'https://cdn-icons-png.flaticon.com/512/1260/1260667.png',
  },
  {
    name: 'NextJs',
    image: 'https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png',
  },
  {
    name: 'ChakraUI',
    image: 'https://cdn-icons-png.flaticon.com/512/2214/2214046.png',
  },
  {
    name: 'Material',
    image: 'https://cdn.worldvectorlogo.com/logos/material-ui.svg',
  },
  {
    name: 'Redux',
    image:
      'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
  },
  {
    name: 'Npm',
    image: 'https://cdn.iconscout.com/icon/free/png-256/npm-3-1175132.png',
  },
  {
    name: 'Python',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
  },
];
const backend = [
  {
    name: 'Node',
    image:
      'https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-256.png',
  },
  {
    name: 'Express',
    image: 'https://img.icons8.com/office/480/express-js.png',
  },
  {
    name: 'MongoDb',
    image: 'https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png',
  },
  {
    name: 'Jwt',
    image:
      'https://seeklogo.com/images/J/json-web-tokens-jwt-io-logo-C003DEC47A-seeklogo.com.png',
  },
  {
    name: 'Heroku',
    image: 'https://cdn-icons-png.flaticon.com/512/873/873120.png',
  },
  {
    name: 'Netlify',
    image:
      'https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png',
  },
  {
    name: 'Redis',
    image:
      'https://www.bigroomstudios.com/wp-content/uploads/2017/08/redis-logo-big-room-studios.png',
  },
  {
    name: 'Socket.io',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/600px-Socket-io.svg.png?20200308235956',
  },
  {
    name: 'Aws',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png',
  },
];
const Skills = () => {
  return (
    <section className="skillcontainer" id="skills">
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '0px',
          fontSize: '55px',
          marginTop: '200px',
        }}
      >
        Skills
      </h1>
      <p
        style={{
          textAlign: 'center',
          marginBottom: '70px',
          color: 'teal',
        }}
      >
        Technical Skills
      </p>
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '0px',
          fontSize: '30px',
        }}
      >
        Frontend
      </h2>
      <div className="skillcontainer1">
        {frontend?.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '0px',
          fontSize: '30px',
        }}
      >
        Backend
      </h2>
      <div className="skillcontainer2">
        {backend?.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <h2>Tools</h2>
      <div className="skillcontainer3">
        <div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            role="img"
            viewBox="0 0 24 24"
            height="4em"
            width="4em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title></title>
            <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"></path>
          </svg>
          VS Code
        </div>
        <div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            version="1.1"
            viewBox="0 0 32 32"
            height="4em"
            width="4em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M26.852 15.281l-9.848-9.848c-0.567-0.567-1.487-0.567-2.054 0l-2.045 2.045 2.594 2.594c0.603-0.204 1.294-0.067 1.775 0.413 0.483 0.483 0.619 1.181 0.41 1.786l2.5 2.5c0.605-0.209 1.303-0.074 1.786 0.41 0.675 0.675 0.675 1.769 0 2.444s-1.769 0.675-2.445 0c-0.508-0.508-0.633-1.254-0.376-1.88l-2.332-2.332v6.136c0.164 0.082 0.32 0.19 0.457 0.327 0.675 0.675 0.675 1.769 0 2.445-0.675 0.675-1.77 0.675-2.444 0-0.675-0.676-0.675-1.77 0-2.445 0.167-0.167 0.36-0.293 0.566-0.377v-6.193c-0.206-0.084-0.399-0.209-0.566-0.377-0.511-0.511-0.634-1.262-0.372-1.889l-2.557-2.558-6.753 6.752c-0.567 0.568-0.567 1.488 0 2.055l9.849 9.848c0.567 0.567 1.486 0.567 2.054 0l9.802-9.802c0.567-0.567 0.567-1.488 0-2.055z"></path>
          </svg>
          Git
        </div>
        <div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            role="img"
            viewBox="0 0 24 24"
            height="4em"
            width="4em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title></title>
            <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"></path>
          </svg>
          Postman
        </div>
      </div>
    </section>
  );
};
export default Skills;
