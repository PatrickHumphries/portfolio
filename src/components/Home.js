import "./Home.css";
import { useHistory } from "react-router-dom";

function Home() {

    // const history = useHistory();
    // const handleClick = () => history.push( '/' );

    return (
        <div className="Home">
           <h1>Hey, I'm Patrick</h1>
           <h3>a full-stack web dev.</h3> 
        </div>
    );
}

export default Home;