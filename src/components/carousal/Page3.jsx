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
        <div className="left_arrow_div desktop_icons">
          <button className="arrow_btn">
            <Link to="/project2">
              <i class="fa-solid fa-chevron-left right_arrow_icon"></i>
            </Link>
          </button>
        </div>
        <div className="page3_component">
          <div className="page2_container">
            <UsedLanguages />
            <BizOrTechRole />
            <Availability />
          </div>
          <div className="page3_left_icon">
            <button className="arrow_btn">
              <Link to="/project2">
                <i class="fa-solid fa-chevron-left right_arrow_icon"></i>
              </Link>
            </button>
          </div>
        </div>
        <div className="buttons_container page3_button">
          <button className="submit_btn">Submit</button>
          <div className="circle_yellow_buttons">
            <Link to="/project">
              <div type="button" className="inactive_yellow_circle"></div>
            </Link>
            <Link to="/project2">
              <div type="button" className="inactive_yellow_circle"></div>
            </Link>
            <Link to="/project3">
              <div type="button" className="active_yellow_circle"></div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
