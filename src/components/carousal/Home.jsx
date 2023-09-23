import React from "react";
import TeammatesDetails from '../../TeammatesDetails';
import Finapp from '../../Finapp';
import Lawai from '../../Lawai';
import Neuroni from '../../Neuroni';
const Home = () => {
  return (
    <div>
      <TeammatesDetails title={"Projects"} />
      <Finapp title={"Projects"} />
      <Neuroni title={"Projects"} />
      <Lawai title={"Projects"} />
    </div>
  );
};

export default Home;
