import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
