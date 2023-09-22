import logo from './logo.svg';
import TeammatesDetails from "./TeammatesDetails";
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <TeammatesDetails title={"Projects"} />
        
      </div>
    </Router>

  );
}

export default App;
