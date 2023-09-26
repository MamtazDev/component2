import React from "react";
import Component from "./Componet";
import ProjectType from "./ProjectType";
import OfferedGratification from "./OfferedGratification";
import ProjectName from "./ProjectName";
import ProjectExperience from "./ProjectExperience";
import AreaOfExperties from "./AreaOfExperties";
import rightarrow from "../../icons/right.png";
import { Link } from "react-router-dom";
import {BsChevronRight} from 'react-icons/bs'
const Page1 = () => {
  return (
    <div>
      <div className="right_arrow_div page1 desktop_right_arrow">
        <button className="arrow_btn">
          <Link to="/project2">
            <i class="fa-solid fa-chevron-right right_arrow_icon"></i>
          </Link>
        </button>
      </div>
      <div className="page1_component ">
        <div>
          <ProjectName />
          <Component />
          <ProjectType />
          <OfferedGratification />
          <ProjectExperience />
          <AreaOfExperties />
        </div>
        <div className="mobile_device" style={{ textAlign: "right" }}>
          <button className="arrow_btn">
            <Link to="/project2">
              {" "}
              <img src={rightarrow} alt="" />
            </Link>
          </button>
        </div>
      </div>
      <div className="buttons_container">
        <div>
          <button className="submit_btn">Submit</button>
          <div className="circle_yellow_buttons">
            <Link to="/">
              <div type="button" className="active_yellow_circle"></div>
            </Link>
            <Link to="/project2">
              <div type="button" className="inactive_yellow_circle"></div>
            </Link>
            <Link to="/project3">
              <div type="button" className="inactive_yellow_circle"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
