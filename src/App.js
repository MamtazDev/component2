import TeammatesDetails from "./TeammatesDetails";
import { Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Finapp from './Finapp';
import Neuroni from "./Neuroni";
import Lawai from "./Lawai";
import Page1 from "./components/carousal/Page1";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <TeammatesDetails title={"Projects"} />
        <Finapp title={"Projects"} />

        <Neuroni title={"Projects"} />
        <Lawai title={"Projects"} /> */}
        <Page1 />
      </div>
      {/* <Route element={Paf}></Route> */}
    </Router>

  );
}

export default App;
