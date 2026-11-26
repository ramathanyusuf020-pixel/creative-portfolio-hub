
function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-image">
        <div className="about-image-placeholder">
          <span>ABOUT ME</span>
        </div>
      </div>

      <div className="about-content">
        <span className="section-tag">GET TO KNOW ME</span>

        <h2>
          Passionate About Creating
          <span> Digital Solutions.</span>
        </h2>

        <p>
          I am an aspiring software developer with a passion
          for technology, creativity and problem-solving.
          I enjoy learning new programming languages and
          developing applications that solve real-world problems.
        </p>

        <p>
          My journey into web development has helped me develop
          skills in HTML, CSS, JavaScript and React. I am
          continuously improving my abilities and exploring
          new technologies.
        </p>

        <a href="#projects" className="primary-btn">
          Explore My Projects
        </a>
      </div>
    </section>
  );
}

export default About;
