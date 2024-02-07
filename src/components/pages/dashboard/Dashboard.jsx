import React, { useEffect, useState } from "react";
import "../../styles/Dashboard.css"; // Import your CSS file for styling
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
// import { useNavigate } from "react-router-dom";
import Header from "../../header&footer/Header";
import { useDispatch } from "react-redux";
import { employerDetails } from '../../../redux/action/employers.action'
// import { trainerDetails } from '../../../redux/action/trainer.action'
import {trainerDetails} from '../../../redux/action/trainer.action'
import { IoIosArrowUp } from "react-icons/io";
import { option } from './Data'
const DashboardApp = () => {

  const [selectedOption, setSelectedOption] = useState("dashboard");
  const [openIndex, setOpenIndex] = useState(null);
  const [postIndex, setPostIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const style = {
    rotate: "180deg",
  };
  const validsytle = open ? { ...style } : null;
  const validsytlePost = openPost ? { ...style } : null;

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const handlePostToggle = (indexp) => {
    setPostIndex((prevIndex) => (prevIndex === indexp ? null : indexp));
  };
  // const navigate = useNavigate();
  const dispatch = useDispatch()
  const role=localStorage.getItem('role')
  console.log(role)
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };


  useEffect(() => {
      dispatch(employerDetails())
  }, [dispatch])



  return (
 
    <>
      <div className="w-full">
      <div className="w-full">
          <Header />
        </div>
        <div className="Reactangle-dash w-full flex mt-[100px]">
          <div className="Rectangle-side w-3/12 bg-white mt-[2px] shadow">
              {option.map(({ name, icon }) => {
                return (
                  <div
                    className={`sidebar-option ${
                      selectedOption === name && "active"
                    }`}
                    onClick={() => handleOptionClick(name)}
                  >
                    <ArrowForwardIosOutlinedIcon className="arrow-icon" />
                    {icon}
                    {name}
                  </div>
                );
              })}
            {/* </div> */}
          </div>
 
          <div className="Reactangle-right w-9/12 ml-[20px]">
            <div className="dash_head z-10 h-[60px] pr-[20px] bg-white flex items-center justify-between">
              <div className="Dashboard flex items-center text-zinc-500 text-base font-normal font-['Poppins'] space-x-3   ">
                <span> Dashboard</span>
                <span className="ml-[10px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="#2676C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
 
                <span className=" text-[#2676C2] text-base font-normal font-['Poppins']  ml-[10px]">
                  {selectedOption}
                </span>
 
                <div
                  className={`${
                    selectedOption === "Post a Requirements" ? "" : "hidden"
                  }`}
                >
                  <div className=" flex items-center  ">
                    <span className=" ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                      >
                        <path
                          d="M1 1L7 7L1 13"
                          stroke="#2676C2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className=" text-[#2676C2] text-base font-normal font-['Poppins']  ml-[10px]">
                      PostTraining
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={` ${
                    selectedOption === "TrainerList" ? "relative" : "hidden"
                  }`}
                >
                  <div className="dropdown-buttons">
                    <div
                      className="accordion"
                      style={{
                        backgroundColor: open ? "#fff" : "#f9f9f9",
                        borderBottom: open ? "none" : "1px solid #dadada",
                      }}
                    >
                      <ul className="accordion-list">
                        <li className={openIndex === 0 ? "open" : ""}>
                          <div
                            className="link"
                            onClick={() => {
                              handleToggle(0);
                              setOpen(!open);
                            }}
                          >
                            <div>Search by location</div>
                            <div>
                              <IoIosArrowUp size={20} style={validsytle} />
                            </div>
                          </div>
                          <ul
                            className="submenu"
                            style={{
                              display: openIndex === 0 ? "block" : "none",
                            }}
                          >
                            <li>
                              <a href="/#">Photoshop</a>
                            </li>
                            <li>
                              <a href="/#">HTML</a>
                            </li>
                            <li>
                              <a href="/#">CSS</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="accordionPost"
                      style={{
                        backgroundColor: openPost ? "#fff" : "#f9f9f9",
                        borderBottom: openPost ? "none" : "1px solid #dadada",
                      }}
                    >
                      <ul className="accordion-list">
                        <li className={postIndex === 0 ? "open" : ""}>
                          <div
                            className="link"
                            onClick={() => {
                              handlePostToggle(0);
                              setOpenPost(!openPost);
                            }}
                          >
                            <div>Search by post</div>
                            <div>
                              <IoIosArrowUp size={20} style={validsytlePost} />
                            </div>
                          </div>
                          <ul
                            className="submenuPost"
                            style={{
                              display: postIndex === 0 ? "block" : "none",
                            }}
                          >
                            <li>
                              <a href="/#" >Photoshop</a>
                            </li>
                            <li>
                              <a href="/#">HTML</a>
                            </li>
                            <li>
                              <a href="/#">CSS</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content mt-[20px] pr-[20px]">
              {option.map(({ name, show }) => {
                if (name === selectedOption) {
                  return show;
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardApp;

