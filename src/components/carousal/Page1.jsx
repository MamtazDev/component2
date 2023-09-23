import React from "react";
import Component from "./Componet";
import ProjectType from "./ProjectType";
import OfferedGratification from "./OfferedGratification";
import ProjectName from "./ProjectName";
import ProjectExperience from "./ProjectExperience";
import AreaOfExperties from "./AreaOfExperties";
import rightarrow from "../../icons/right.png";
const Page1 = () => {
  return (
    <div>
      <div className="right_arrow_div">
        <button className="arrow_btn">
          <img src={rightarrow} alt="" />
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
      <button className="submit_btn">submit</button>
      <div className="circle_yellow_buttons">
        <div className="active_yellow_circle"></div>
        <div className="inactive_yellow_circle"></div>
        <div className="inactive_yellow_circle"></div>
      </div>
    </div>
  );
};

export default Page1;
