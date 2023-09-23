import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Page1 from "./components/carousal/Page1";
import Home from "./components/carousal/Home";
import Page2 from "./components/carousal/Page2";
import Page3 from "./components/carousal/Page3";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project" element={<Page1 />}></Route>
        <Route path="/project2" element={<Page2 />}></Route>
        <Route path="/project3" element={<Page3 />}></Route>
      </Routes>

    </Router>

  );
}

export default App;
