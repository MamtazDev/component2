import React from "react";
import { Link } from "react-router-dom";
import rightarrow from "../../icons/right.png";
import leftarrow from "../../icons/left.png";
import ProjectDeadline from "./ProjectDeadline";
import "./Common.css";
import ProjectBranch from "./ProjectBranch";
import OfferedWorkingType from "./OfferedWorkingType";
const Page2 = () => {
  return (
    <>
      <div>
        <div className="left_right_container_page2">
          <div className="right_arrow_div2">
            <button className="arrow_btn">
              <Link to="/project3">
                <img src={rightarrow} alt="" />
              </Link>
            </button>
          </div>
          <div className="left_arrow_div2">
            <button className="arrow_btn">
              <Link to="/project">
                <img src={leftarrow} alt="" />
              </Link>
            </button>
          </div>
        </div>
        <div className="page2_component">
          <div className="page2_container">
            <ProjectDeadline />
            <ProjectBranch />
            <ProjectDeadline />
            <OfferedWorkingType />
          </div>
        </div>
        {/*   <div className="left_right_container_page2_mobile">
          <div className="right_arrow_div2">
            <button className="arrow_btn">
              <Link to="/project3">
                <img src={rightarrow} alt="" />
              </Link>
            </button>
          </div>
          <div className="left_arrow_div2">
            <button className="arrow_btn">
              <Link to="/project">
                <img src={leftarrow} alt="" />
              </Link>
            </button>
          </div>
        </div> */}
        <div className="buttons_container">
          <button className="submit_btn1">Submit</button>
          <div className="circle_yellow_buttons">
            <div className="inactive_yellow_circle"></div>
            <div className="active_yellow_circle"></div>
            <div className="inactive_yellow_circle"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
