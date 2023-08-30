import React from 'react';
import './Aboutme.css';
const Aboutme = () => {
  return (
    <section id="aboutme">
      <h1
        style={{
          marginTop: '200px',
          textAlign: 'center',
          marginBottom: '0px',
          fontSize: '55px',
        }}
      >
        About Me
      </h1>
      <p
        style={{
          textAlign: 'center',
          marginBottom: '70px',
          color: 'teal',
        }}
      >
        My Self
      </p>
      <div className="AboutVideo">
        <div>
          <video
            src="https://www.meesho.io/img/home/banner.mp4"
            autoPlay="loop"
            on
            muted
          ></video>
        </div>
        <div>
          <p style={{ marginBottom: '30px', textAlign: 'justify' }}>
            {/* Analytical and detail-oriented aspiring Full Stack Web
              Developer capable of writing production-ready code using
              MERN stack.Passionate about coding and intensely
              interested in working in a product-based company. */}
            Full stack web developer with specialisation in JavaScript, HTML,
            CSS , REACT , REST API , Git/GITHUB Object-Oriented design. Offering
            excellence in analytical decision making and articulate presenter
            with ability to communicate technical information with clear and
            concise manner. 450+ hours of coding and hands-on experience in
            developing website features
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
