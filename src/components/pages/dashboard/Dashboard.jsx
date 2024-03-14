import React, { useEffect, useState } from "react";
import "../../styles/Dashboard.css"; // Import your CSS file for styling
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Done from "../../assets/Done.png";
import DoneBackground from "../../assets/DoneBackground.png";
import { useDispatch } from "react-redux";
import { employerDetails } from "../../../redux/action/employers.action";
import { IoIosArrowUp } from "react-icons/io";
import { option } from "./Data";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import DashboardData from './trainerDashboard/DashboardData 2'
import Trainers from "../trainerlist/Trainer";
import TrainerListProfile from "./../trainerlist/TrainerListProfile";
import Requirements from "../postrequirements/Requirements";
import Chat from "../messages/Chat";
import EmployerSettings from "../settings/EmployerSettings";
import TrainingResources from "../trainingresourecs/TrainingResources";
import PostJobSection from "../postrequirements/PostRequirements/PostJob";
import PostTrainingSection from "../postrequirements/PostRequirements/PostTraining";
import EmployerMyTraining from "../mytrainings/EmployerMyTraining";
import EmployerPosted from "../mytrainings/EmployerMyTrainingChilds/EmployerPosted";
import EmployerOngoing from "../mytrainings/EmployerMyTrainingChilds/EmployerOngoing";
import EmployerCompleted from "../mytrainings/EmployerMyTrainingChilds/EmployerCompleted";
import HttpsIcon from "@mui/icons-material/Https";
import EmployerFeed from '../feed/employerfeed/EmployerFeed'
import EmployerProposalManagement from '../proposalMangement/EmployerProposalManagement'
import EmployerProposalCandidacy from '../proposalMangement/Employerproposalmanagement/EmpProposalCandidacy'
import EmployerProposalRequest from '../proposalMangement/Employerproposalmanagement/EmpProposalRequest'
import TrainerHelpSupport from "../help&support/TrainerHelpSupport";
import EmployerHeader from "../../header&footer/EmployerHeader";

const DashboardApp = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [prevSelectedOption, setPrevSelectedOption] = useState("");
  const [selectedOption, setSelectedOption] = useState("dashboard");
  const [openIndex, setOpenIndex] = useState(null);
  const [postIndex, setPostIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  // console.log("locaa", location.pathname);
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

  const role = localStorage.getItem("role");


  const handleOptionClick = (option) => {
    if (selectedOption !== option) {
      setPrevSelectedOption(selectedOption);
    }
    setSelectedOption(option);
  };

  useEffect(() => {
    dispatch(employerDetails());
  }, [dispatch]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);
  useEffect(() => {
    // Update the selectedOption based on the current location
    const currentOption = option.find((opt) => {
      if (
        location.pathname.startsWith("/employerDashboard/postarequirements") ||
        location.pathname.startsWith(
          "/employerDashboard/postarequirements/post-training"
        ) ||
        location.pathname.startsWith(
          "/employerDashboard/postarequirements/post-job"
        )
      ) {
        return opt.name === "Post a Requirements";
      }
      if (
        location.pathname.startsWith("/employerDashboard/proposalmanagement") ||
        location.pathname.startsWith(
          "/employerDashboard/proposalmanagement/candidacy"
        ) ||
        location.pathname.startsWith(
          "/employerDashboard/proposalmanagement/proposal"
        )
      ) {
        return opt.name === "Proposal Management";
      }
      if (
        location.pathname.startsWith("/employerDashboard/trainingmanagement")
      ) {
        if (
          location.pathname.startsWith(
            "/employerDashboard/trainingmanagement/posted"
          ) ||
          location.pathname.startsWith(
            "/employerDashboard/trainingmanagement/ongoing"
          ) ||
          location.pathname.startsWith(
            "/employerDashboard/trainingmanagement/completed"
          )
        ) {
          return opt.name === "Training Management";
        }
        return location.pathname.includes(
          opt.name.replace(/\s/g, "").toLowerCase()
        );
      }
      if (location.pathname.startsWith("/employerDashboard/trainerlist")) {
        // Check if the current path starts with the parent route or its child routes
        if (
          location.pathname.startsWith("/employerDashboard/trainerlist") ||
          location.pathname.startsWith(
            "/employerDashboard/trainerlist/trainerlistprofile"
          )
        ) {
          return opt.name === "TrainerList"; // Set the active state for the parent route
        }
        return location.pathname.includes(
          opt.name.replace(/\s/g, "").toLowerCase()
        );
      } else {
        return location.pathname.includes(
          opt.name.replace(/\s/g, "").toLowerCase()
        );
      }
    });
    if (currentOption) {
      setSelectedOption(currentOption.name);
    }
  }, [location.pathname]);

  return (
    <>
      <div className="relative w-full">
        <div className="w-full">
          <EmployerHeader />
        </div>
        <div className="Reactangle-dash w-full flex">
          <div className="Rectangle-side w-[290px] bg-white mt-[2px] shadow">
            {option.map(({ name, icon }) => {
              let toPath = `/employerDashboard/${name
                .replace(/\s/g, "")
                .toLowerCase()}`;
              if (name === "Post a Requirements") {
                toPath = "/employerDashboard/postarequirements/post-training";
              }
              if (name === "Training Management") {
                toPath = "/employerDashboard/trainingmanagement/posted";
              }
              if (name === "Proposal Management") {
                toPath = "/employerDashboard/proposalmanagement/candidacy";
              }
              return (
                <NavLink
                  key={name}
                  to={toPath}
                  className={`sidebar-option  ${
                    selectedOption === name ? "active" : ""
                  } ${prevSelectedOption === name ? "reverse" : ""}`}
                  activeClassName="active"
                  onClick={() => handleOptionClick(name)}
                >
                  {/* <ArrowForwardIosOutlinedIcon className="arrow-icon" /> */}
                  {selectedOption === "Billing & Payments" ? (
                    <HttpsIcon className="arrow-icon" />
                  ) : (
                    <ArrowForwardIosOutlinedIcon className="arrow-icon" />
                  )}
                  {icon}
                  {name}
                </NavLink>
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
                      {location.pathname ===
                      "/employerDashboard/postarequirements/post-training"
                        ? "Post Training"
                        : ""}
                      {location.pathname ===
                      "/employerDashboard/postarequirements/post-job"
                        ? "Post Job"
                        : ""}
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
                  </div>
                </div>
              </div>
            </div>
            <div className="content p-[10px]">
              <Routes>
                <Route path="dashboard" element={<DashboardData />} />
                <Route path="trainerlist/*" element={<Trainers />} />
                <Route
                  path="trainerlist/trainerlistprofile/:id"
                  element={<TrainerListProfile />}
                />

                <Route
                  path="trainingmanagement/*"
                  element={<EmployerMyTraining />}
                >
                  <Route index element={<EmployerPosted />} />
                  <Route path="ongoing" element={<EmployerOngoing />} />
                  <Route path="completed" element={<EmployerCompleted />} />
                </Route>
                <Route path="postarequirements/" element={<Requirements />}>
                  <Route path="post-job" element={<PostJobSection />} />
                  <Route
                    path="post-training"
                    element={<PostTrainingSection />}
                  />
                </Route>
                <Route path="feed" element={<EmployerFeed />} />
                <Route path="messages" element={<Chat />} />
                <Route
                  path="proposalmanagement"
                  element={<EmployerProposalManagement />}
                >
                  <Route
                    path="candidacy"
                    element={<EmployerProposalCandidacy />}
                  />
                  <Route
                    path="proposal"
                    element={<EmployerProposalRequest />}
                  />
                </Route>
                <Route path="settings" element={<EmployerSettings />} />
                <Route
                  path="trainingresource"
                  element={<TrainingResources />}
                />
                <Route path="help&support" element={<TrainerHelpSupport />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardApp;
