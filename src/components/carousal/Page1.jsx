import React from "react";
import Component from "./Componet";
import ProjectType from "./ProjectType";
import OfferedGratification from "./OfferedGratification";
import ProjectName from "./ProjectName";
import ProjectExperience from "./ProjectExperience";
import AreaOfExperties from "./AreaOfExperties";
import rightarrow from "../../icons/right.png";
import { Link } from "react-router-dom";
const Page1 = () => {
  return (
    <div>
      <div className="right_arrow_div page1">
        <button className="arrow_btn">
          <Link to="/project2">
            {" "}
            <img src={rightarrow} alt="" />
          </Link>
        </button>
      </div>
      <div className="page1_component">
        <div>
          <ProjectName />
          <Component />
          <ProjectType />
          <OfferedGratification />
          <ProjectExperience />
          <AreaOfExperties />
        </div>
      </div>
      <div className="buttons_container1">
        <div>
          <button className="submit_btn">Submit</button>
          <div className="circle_yellow_buttons">
            <div className="active_yellow_circle"></div>
            <div className="inactive_yellow_circle"></div>
            <div className="inactive_yellow_circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
