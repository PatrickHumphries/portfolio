import "./Home.css";
import { useHistory } from "react-router-dom";

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
    </div>
  );
}

export default Home;
