import React, { useState } from "react";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DoneIcon from "@mui/icons-material/Done";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import flag from "./icons/flag.jpg";
import question from "./icons/question.png";
import dots from "./icons/dots.png";
// Lists
// TBD Functionality: Lists should be filled from backend
var specialization = "Back-end developer";

var skillsList = [
  "Python +2y",
  "C++ +6m",
  "Python",
  "Electronics",
  "Management",
];
var skillsDisplayNumber = 2;

var pteList = ["Hackathon", "Student"];
var pteDisplayNumber = 2;

var gratificationAcceptList = ["Money", "Shares", "Learning"];
var gratificationForList = ["Time", "Milestone"];

var sectorExperienceList = ["Finance", "Banking", "FMCG", "Consulting"];
var sectorExperienceDisplayNumber = 2;

var personalAssetsList = ["Public Speaking", "Creativity"];
var personalAssetsDisplayNumber = 2;

var acceptedDeadline = [20, 26];

var location = ["Japan", ""];

var bizOrTech = [20, 80];

var availability = [8, 16];

const Finapp = ({ title, project }) => {
  const [showSkills, setShowSkills] = useState(false);
  const navigate = useNavigate();

  const handleShowSkills = () => {
    if (showSkills === false) {
      setShowSkills(true);
    } else {
      setShowSkills(false);
    }
  };

  return (
    <div className="container projects__body__container__left__card">
      <div className="projects__body__container__left__card__top">
        <h4>Finapp</h4>
        <div className="projects__body__container__left__card__top__iconsBox">
          {title === "My Projects" ? (
            <></>
          ) : (
            <Button
              className="projects__body__container__left__card__top__iconsBox__write"
              onClick={() => navigate("/conversations")}
            >
              Message
              <ModeEditOutlineOutlinedIcon className="projects__body__container__left__card__top__iconsBox__write__icon" />
            </Button>
          )}
          {/* {title === "Projects" && ( */}
          <Button className="projects__body__container__left__card__top__iconsBox__add">
            Save
            <AddOutlinedIcon className="projects__body__container__left__card__top__iconsBox__add__icon" />
          </Button>
          {/* //   )} */}
          {title === "My Projects" && (
            <>
              <Button className="projects__body__container__left__card__top__iconsBox__edit">
                Edit
                <BorderColorIcon className="projects__body__container__left__card__top__iconsBox__add__icon" />
              </Button>
              <Button className="projects__body__container__left__card__top__iconsBox__delete">
                Delete
              </Button>
            </>
          )}
          {title === "Found Projects" && (
            <Button className="projects__body__container__left__card__top__iconsBox__add">
              Added
              <DoneIcon className="projects__body__container__left__card__top__iconsBox__add__icon" />
            </Button>
          )}
          {title === "Skillers" && (
            <Button className="projects__body__container__left__card__top__iconsBox__add">
              Add
              <AddOutlinedIcon className="projects__body__container__left__card__top__iconsBox__add__icon" />
            </Button>
          )}
          {title === "Found Skillers" && (
            <Button className="projects__body__container__left__card__top__iconsBox__add">
              Added
              <DoneIcon className="projects__body__container__left__card__top__iconsBox__add__icon" />
            </Button>
          )}
        </div>
      </div>

      {/* TOP FEATURES ROW */}

      <div className="projects__body__container__left__card__body">
        <div className="projects__body__container__left__card__body__specs">
          <div className="red_text_parent">
            <p className="header_p">sought area of expErience</p>
          </div>
          <div className="projects__body__container__left__card__body__specs__desc">
            <div className="flag_design">
              <small>{specialization}</small>
              <div className="border_right"></div>
              <div className="red_hover_tool">
                <img className="backend-developer" src={flag} alt="" />
                <small className="hover_red_text ">
                  Report Area of Experience
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="projects__body__container__left__card__body__specs yellow_parent">
          <div className="question_parent">
            <p className="header_p"> sought tools and mep</p>
            <div className="question_hover">
              <img className="question_image" src={question} alt="" />
              <div className="yellow_text">
                <p>Minimum Experience Period</p>
              </div>
            </div>
          </div>
          <div className="projects__body__container__left__card__body__specs__desc">
            {skillsList.slice(0, skillsDisplayNumber).map((i, index) => (
              <div className="flag_design">
                <div>
                  <small key={index}>{i}</small>
                </div>
                <div className="border_right"></div>
                <div className="red_hover_tool">
                  <img src={flag} alt="" />
                  <small className="hover_red_text">Report Tool</small>
                </div>
              </div>
            ))}
          </div>
          <div className="dot_container">
            <div className="dot_hover">
              <div className="dot_image">
                <img src={dots} alt="" />
              </div>
              <div className="dot_hover_element">
                <small>C# +3m</small>
              </div>
            </div>
          </div>
        </div>
        <div className="projects__body__container__left__card__body__specs yellow_parent small_none">
          <div className="question_parent1">
            <p className="header_p">sought PTE</p>
            <div className="question_hover">
              <img className="question_image1" src={question} alt="" />
              <div className="yellow_text1">
                <p>Project Type Experience</p>
              </div>
            </div>
          </div>
          <div className="projects__body__container__left__card__body__specs__desc">
            {pteList.slice(0, pteDisplayNumber).map((i, index) => (
              <span key={index}>{i}</span>
            ))}
          </div>
          <div className="dot_container">
            <div className="dot_hover">
              <div className="dot_image">
                <img src={dots} alt="" />
              </div>
              <div className="dot_hover_element flex_items">
                <small>Corporate</small>
                <small>Learning</small>
              </div>
            </div>
          </div>
        </div>
        <div className="projects__body__container__left__card__body__specs small_none">
          <p className="header_p">offered gratification</p>
          <div
            className="projects__body__container__left__card__body__specs__desc"
            style={{ display: "inline-block" }}
          >
            <span style={{ display: "inline-block" }}>
              {gratificationAcceptList[0]}
            </span>
            <span style={{ display: "inline-block" }}>
              {gratificationAcceptList[1]}
            </span>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "transparent",
              }}
            >
              for
            </span>
            <span style={{ display: "inline-block" }}>
              {gratificationForList[0]}
            </span>
            <span style={{ display: "inline-block" }}>
              {gratificationForList[1]}
            </span>
          </div>
          <div className="dot_container">
            <div className="dot_hover">
              <div className="dot_image">
                <img src={dots} alt="" />
              </div>
              <div className="dot_hover_element flex_items">
                <small>Sold Product</small>
                <small>For Fun</small>
              </div>
            </div>
          </div>
        </div>
        <div className="projects__body__container__left__card__body__specs small_none">
          <p className="header_p">offered Working type</p>
          <div
            className="projects__body__container__left__card__body__specs__desc"
            style={{ display: "inline-block" }}
          >
            <span style={{ display: "inline-block" }}>Office</span>
            <span style={{ display: "inline-block" }}>Remote</span>
          </div>
        </div>
        <div className="projects__body__container__left__card__body__specs small_none">
          <p className="header_p">USED Languages</p>
          <div
            className="projects__body__container__left__card__body__specs__desc"
            style={{ display: "inline-block" }}
          >
            <span style={{ display: "inline-block" }}>English</span>
            <span style={{ display: "inline-block" }}>Polish</span>
          </div>
        </div>
      </div>
      {/* EXTENDED FEATURES ROW */}
      {showSkills === true && (
        <div className="projects__body__container__left__card__body2">
         
         {/* without exted data */}
         <div className="projects__body__container__left__card__body__specs yellow_parent small_visible" style={{marginTop:"8px"}}>
          <div className="question_parent1">
            <p className="header_p">sought PTE</p>
            <div className="question_hover">
              <img className="question_image1" src={question} alt="" />
              <div className="yellow_text1">
                <p>Project Type Experience</p>
              </div>
            </div>
          </div>
          <div className="projects__body__container__left__card__body__specs__desc">
            {pteList.slice(0, pteDisplayNumber).map((i, index) => (
              <span key={index}>{i}</span>
            ))}
          </div>
          <div className="dot_container">
            <div className="dot_hover">
              <div className="dot_image">
                <img src={dots} alt="" />
              </div>
              <div className="dot_hover_element flex_items">
                <small>Corporate</small>
                <small>Learning</small>
              </div>
            </div>
          </div>
        </div>
        <div className="projects__body__container__left__card__body__specs small_visible">
          <p className="header_p">offered gratification</p>
          <div
            className="projects__body__container__left__card__body__specs__desc"
            style={{ display: "inline-block" }}
          >
            <span style={{ display: "inline-block" }}>
              {gratificationAcceptList[0]}
            </span>
            <span style={{ display: "inline-block" }}>
              {gratificationAcceptList[1]}
            </span>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "transparent",
              }}
            >
              for
            </span>
            <span style={{ display: "inline-block" }}>
              {gratificationForList[0]}
            </span>
            <span style={{ display: "inline-block" }}>
              {gratificationForList[1]}
            </span>
          </div>
          <div className="dot_container">
            <div className="dot_hover">
              <div className="dot_image">
                <img src={dots} alt="" />
              </div>
              <div className="dot_hover_element flex_items">
                <small>Sold Product</small>
                <small>For Fun</small>
              </div>
            </div>
          </div>
        </div>
        <div className="projects__body__container__left__card__body__specs small_visible">
          <p className="header_p">offered Working type</p>
          <div
            className="projects__body__container__left__card__body__specs__desc"
            style={{ display: "inline-block" }}
          >
            <span style={{ display: "inline-block" }}>Office</span>
            <span style={{ display: "inline-block" }}>Remote</span>
          </div>
        </div>
        <div className="projects__body__container__left__card__body__specs small_visible">
          <p className="header_p">USED Languages</p>
          <div
            className="projects__body__container__left__card__body__specs__desc"
            style={{ display: "inline-block" }}
          >
            <span style={{ display: "inline-block" }}>English</span>
            <span style={{ display: "inline-block" }}>Polish</span>
          </div>
        </div>
         {/* without exted data */}



          {/* main content */}
          <div className="projects__body__container__left__card__body2__specs">
            <p>Sector Experience</p>
            <div className="projects__body__container__left__card__body2__specs__desc">
              <div className="projects__body__container__left__card__body__specs__desc">
                {sectorExperienceList
                  .slice(0, sectorExperienceDisplayNumber)
                  .map((i, index) => (
                    <>
                      <span key={index}>{i}</span>
                    </>
                  ))}
              </div>
            </div>
          </div>

          <div className="projects__body__container__left__card__body2__specs">
            <p>Personal Assets</p>
            <div className="projects__body__container__left__card__body2__specs__desc">
              <div className="projects__body__container__left__card__body__specs__desc">
                {personalAssetsList
                  .slice(0, personalAssetsDisplayNumber)
                  .map((i, index) => (
                    <span key={index}>{i}</span>
                  ))}
              </div>
            </div>
          </div>

          <div className="projects__body__container__left__card__body2__specs">
            <p>Accepted Deadline</p>
            <div className="projects__body__container__left__card__body2__specs__desc">
              <span style={{ display: "inline-block" }}>
                {acceptedDeadline[0]}
              </span>
              <span
                style={{
                  backgroundColor: "transparent",
                  display: "inline-block",
                }}
              >
                to
              </span>
              <span style={{ display: "inline-block" }}>
                {acceptedDeadline[1]}
              </span>
              <span
                style={{
                  backgroundColor: "transparent",
                  display: "inline-block",
                }}
              >
                months
              </span>
            </div>
          </div>

          <div className="projects__body__container__left__card__body2__specs">
            <p>Biz or Tech</p>
            <div className="projects__body__container__left__card__body2__specs__desc">
              <span
                style={{
                  backgroundColor: "transparent",
                  display: "inline-block",
                }}
              >
                bizLike
              </span>
              <span style={{ display: "inline-block" }}>{bizOrTech[0]}%</span>
              <span
                style={{
                  backgroundColor: "transparent",
                  display: "inline-block",
                }}
              >
                techLike
              </span>
              <span style={{ display: "inline-block" }}>{bizOrTech[1]}%</span>
            </div>
          </div>

          <div className="projects__body__container__left__card__body2__specs">
            <p>Availability</p>
            <div className="projects__body__container__left__card__body2__specs__desc">
              <span style={{ display: "inline-block" }}>{availability[0]}</span>
              <span
                style={{
                  backgroundColor: "transparent",
                  display: "inline-block",
                  margin: "0 -50",
                }}
              >
                to
              </span>
              <span style={{ display: "inline-block" }}>{availability[1]}</span>
              <span
                style={{
                  backgroundColor: "transparent",
                  display: "inline-block",
                }}
              >
                h/week
              </span>
            </div>
          </div>

          <div className="projects__body__container__left__card__body2__specs">
            <p>Location</p>
            <div className="projects__body__container__left__card__body2__specs__desc">
              <span>
                {location[0]}, {location[1]}
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="projects__body__container__left__card__bottom">
        <div className="projects__body__container__left__card__bottom__left">
          {title === "Skillers" && (
            <p className="projects__body__container__left__card__bottom__left__tip">
              <Avatar
                className="projects__body__container__left__card__bottom__left__tip__iconAvatar"
                alt="Travis Howard"
                src="/static/images/avatar/2.jpg"
              />
              John
            </p>
          )}
          {title === "Found Skillers" && (
            <p className="projects__body__container__left__card__bottom__left__tip">
              <Avatar
                className="projects__body__container__left__card__bottom__left__tip__iconAvatar"
                alt="Travis Howard"
                src="/static/images/avatar/2.jpg"
              />
              John
            </p>
          )}
          {title === "Projects" && (
            <>
              <p className="projects__body__container__left__card__bottom__left__tip">
                <TipsAndUpdatesIcon className="projects__body__container__left__card__bottom__left__tip__icon" />
              </p>
              <span className="projects__body__container__left__card__bottom__left__type">
                Finance
              </span>
              <span className="projects__body__container__left__card__bottom__left__type">
                Student
              </span>
            </>
          )}
          {title === "Found Projects" && (
            <>
              <p className="projects__body__container__left__card__bottom__left__tip">
                <TipsAndUpdatesIcon className="projects__body__container__left__card__bottom__left__tip__icon" />
                Finance
              </p>
              <span className="projects__body__container__left__card__bottom__left__type">
                Student
              </span>
            </>
          )}
          <span className="projects__body__container__left__card__bottom__left__dot">
            .
          </span>
          <span className="projects__body__container__left__card__bottom__left__time">
            Posted 4 hours ago
          </span>
        </div>
        <button onClick={handleShowSkills}>
          {showSkills === false ? (
            <KeyboardArrowDownOutlinedIcon />
          ) : (
            <KeyboardArrowUpIcon />
          )}
        </button>
      </div>
    </div>
  );
};

export default Finapp;
