import "./Home.css";
import { useHistory } from "react-router-dom";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

function Home() {
  // const history = useHistory();
  // const handleClick = () => history.push( '/' );

  return (
    <div className="Home">
      <div id="intro">
        <h1>Hey,</h1>
        <h2>I'm Patrick</h2>
      </div>
      <h3>a full-stack web dev.</h3>

      <div className="socials">
        <a href="https://www.linkedin.com/in/patrickhumphries/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/PatrickHumphries" target="_blank"><BsGithub /></a>
        <a href="https://twitter.com/phumphries_" target="_blank"><BsTwitter /></a>
      </div>
    </div>
  );
}

export default Home;
