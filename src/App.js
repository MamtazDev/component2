import TeammatesDetails from "./TeammatesDetails";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Finapp from './Finapp';
import Neuroni from "./Neuroni";
import Lawai from "./Lawai";

function App() {
  return (
    <Router>
      <div className="App">
        <TeammatesDetails title={"Projects"} />
        <Finapp title={"Projects"} />

        <Neuroni title={"Projects"} />
        <Lawai title={"Projects"} />
      </div>
    </Router>

  );
}

export default App;
