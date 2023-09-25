import React from "react";
import TeammatesDetails from "../../TeammatesDetails";
import Finapp from "../../Finapp";
import Lawai from "../../Lawai";
import Neuroni from "../../Neuroni";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home_margin">
      <TeammatesDetails title={"Projects"} />
      <Finapp title={"Projects"} />
      <Neuroni title={"Projects"} />
      <Lawai title={"Projects"} />
      <div>
        <Link
          to="/project"
          style={{
            textDecoration: "none",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <h1>Project carousal</h1>
        </Link>
      </div>
    </div>
  );
};

export default Home;
