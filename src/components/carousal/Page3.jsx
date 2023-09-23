import React from "react";
import { Link } from "react-router-dom";
import leftarrow from "../../icons/left.png";
import "./Common.css";
import UsedLanguages from "./UsedLanguages";
import BizOrTechRole from "./BizOrTechRole";
import Availability from "./Availability";
const Page2 = () => {
  return (
    <>
      <div>
        <div className="left_arrow_div">
          <button className="arrow_btn">
            <Link to="/project2">
              <img src={leftarrow} alt="" />
            </Link>
          </button>
        </div>
        <div className="page3_component">
          <div className="page2_container">
            <UsedLanguages />
            <BizOrTechRole />
            <Availability />
          </div>
        </div>
        <button className="submit_btn">Submit</button>
        <div className="circle_yellow_buttons">
          <div className="inactive_yellow_circle"></div>
          <div className="active_yellow_circle"></div>
          <div className="inactive_yellow_circle"></div>
        </div>
      </div>
    </>
  );
};

export default Page2;
