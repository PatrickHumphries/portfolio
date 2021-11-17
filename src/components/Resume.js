import "./Resume.css";

function Resume() {
  const linkedin = process.env.LINKEDIN;

  return (
    <div className="Resume">
      <div id="top">
        <h1>Patrick Humphries</h1>
        <h2>Full-stack Web Developer</h2>
        <p>Brunswick, ME</p>
        <p>(517) 442-2835</p>
        <p>patrickhumphries.dev@gmail.com</p>
        <a href="https://www.linkedin.com/in/patrickhumphries/" target="_blank">
          LinkedIn
        </a>
        <a href="https://github.com/PatrickHumphries" target="_blank">
          GitHub
        </a>
      </div>
      <hr></hr>
      <div className="summary">
        <h2>Summary</h2>
        <p>
          I'm a full stack software developer from a non-traditional background.
          Formerly, I was a kayak guide, computer technician, and hospital
          technician. My desire to create and build led me towards software
          development, which I have passionately pursued since 2019. My bootcamp
          education provided me with a fast track in a variety of
          technologies, frameworks, and test driven development.
        </p>
      </div>
      <hr></hr>
      <div className="education">
        <h2>Education</h2>
        <p>
          <span className="school">Grand Circus</span> - Full-stack JavaScript
          Certificate
        </p>
        <p>
          <span className="school"> Northern Michigan University</span> -
          Bachelor's of Science - Environmental Studies & Sustainability
        </p>
      </div>
      <hr></hr>
      <div className="relevant-experience">
        <h2>Relevant Experience</h2>
        <ul>
          <p>
            <span className="employer">Grand Circus, Detroit, MI</span> -
            Teaching Assistant,{" "}
            <span className="dates">September 2021 - Present</span>
          </p>
          <li>
            Teach introductory coding classes as a teaching assistant entirely
            remotely.
          </li>
          <li>HTML, CSS, and JavaScript.</li>
        </ul>
        <ul>
          <p>
            <span className="employer">Northern Michigan University, Marquette, MI</span> -
            Computer Technician,{" "}
            <span className="dates">August 2018 - May 2020</span>
          </p>
          <li>Provided tech support for all software or network related issues for approximately 7,600 different users. </li>
          <li> Provided solutions in person/remotely (via teamviewer as necessary)</li>
          <li>Maintained up-to-date documentation on all steps of the troubleshooting and solution process</li>
        </ul>
      </div>
      <hr></hr>
      <div className="technologies">
        <h2>Technologies</h2>
        <span>HTML, CSS, JavaScript, TypeScript, React, Express, NodeJS, Git.</span>
      </div>
      <hr></hr>
      <div className="interests">
        <h2>Interests</h2>
        <span>Coding, climbing, cycling, cryptocurrency, cooking, comedy, and alliteration.</span>
      </div>
    </div>
  );
}

export default Resume;
