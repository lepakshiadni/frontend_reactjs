// EmployerPosted.js
import React, { useState } from "react";
import PeofilePic from "../../../assets/profileTrainer.png";
import { Stack, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const EmployerPosted = () => {
  const trainingData = {
    programName: "Full Stack Developer",
    topics: "Java, Js, Python, React Native",
    trainingType: "Corporate",
    duration: "10 Days",
    startDate: "01-12-2023",
    endDate: "01-01-2024",
    programStatus: "Applied",
    appliedDate: "20/12/2024",
    totalApplications: 20,
    mode: "Offline",
    location: "Bangalore",
    // ... Add more fields as needed
  };
  const [activeSteps] = useState([1]);
  // const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const calculateProgressBarWidth = () => {
    const totalSteps = 3; // Update this based on the total number of steps
    const width = ((activeSteps.length - 1) / (totalSteps - 1)) * 100;
    return `${width}%`;
  };
  const togglePopup = () => {
    setIsVisible(!isVisible);
  };
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="Training_Programs">
      <div className="Training_Programm">
        <div className="Trainer_Infoo">
          <div className="TTTDD">
            <p>Training Program Name</p>
            <h3 className="Blue_H22">{trainingData.programName}</h3>
            <p>Training Topics & Subjects</p>
            <h2>{trainingData.topics}</h2>
            <p>Type Of Training</p>
            <h2>{trainingData.trainingType}</h2>
            <p>Duration Of Training</p>
            <h2>{trainingData.duration}</h2>
            <div className="SDEDD">
              <div className="SDD">
                <p>Start Date</p>
                <h2>{trainingData.startDate}</h2>
              </div>
              <div className="EDD">
                <p>End Date</p>
                <h2>{trainingData.endDate}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="Program_Info">
          <div
            className="Stepper"
            style={{ height: "2.5rem", marginTop: "1.5rem" }}
          >
            <div className="steps">
              {[1, 2, 3].map((step) => (
                <span
                  key={step}
                  className={`circle ${
                    activeSteps.includes(step) ? "active" : ""
                  }`}
                >
                  {step}
                </span>
              ))}
              <div className="progress-bar">
                <span
                  className="indicator"
                  style={{
                    width: calculateProgressBarWidth(),
                  }}
                ></span>
              </div>
            </div>
          </div>
          <div className="Step1PS">
            <h4>Program Status</h4>
            <p>Applied Date: {trainingData.appliedDate}</p>
          </div>
          <div className="Program_Status">
            <div className="Total_Part">
              <p
                style={{
                  whiteSpace: "nowrap",
                  marginBottom: "1rem",
                  margin: "0%",
                }}
              >
                Total Application
              </p>
              <div className="P205">
                <h1>{trainingData.totalApplications}</h1>
              </div>
              <p>Mode</p>
              <h2>{trainingData.mode}</h2>
              <p>Location</p>
              <h2>{trainingData.location}</h2>
              <div className="DELDIT">
                <button className="Del" onClick={togglePopup}>
                  Delete
                </button>
                {isVisible && (
                  <div
                    style={{
                      position: "fixed",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(10, 10, 10, 0.64)",
                      zIndex: "9998",
                    }}
                  >
                    <div
                      style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        height: "25rem",
                        width: "45rem",
                        backgroundColor: "white",
                        border: "1px solid #ccc",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                        borderRadius: "10px",
                        padding: "20px",
                        zIndex: 9999,
                        display: "flex",
                        justifyContent: "space-evenly",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "90%",
                          margin: "auto",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "Poppins",
                            fontSize: "20px",
                            fontWeight: "500",
                            lineHeight: "30px",
                            letterSpacing: "0",
                            textAlign: "left",
                            color: "#263238",
                          }}
                        >
                          Are you sure you want to delete this post?
                        </h3>
                        <div
                          className={`svg-container ${
                            isHovered ? "hovered" : ""
                          }`}
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                          cursor="pointer"
                          onClick={togglePopup}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                            cursor="pointer"
                            onClick={togglePopup}
                          >
                            <path
                              d="M8.48347 8.48528L16.9688 16.9706M16.9688 16.9706L25.454 25.4558M16.9688 16.9706L8.48347 25.4558M16.9688 16.9706L25.454 8.48528"
                              stroke="#2676C2"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <svg
                            className={`background-circle ${
                              isHovered ? "hovered" : ""
                            }`}
                            viewBox="0 0 34 34"
                          >
                            {/* <circle cx="17" cy="17" r="16" /> */}
                          </svg>
                        </div>
                      </div>
                      <div className="Stepper" style={{ width: "90%" }}>
                        <div className="steps">
                          {[1, 2, 3].map((step) => (
                            <span
                              key={step}
                              className={`circle ${
                                activeSteps.includes(step) ? "active" : ""
                              }`}
                            >
                              {step}
                            </span>
                          ))}
                          <div className="progress-bar">
                            <span
                              className="indicator"
                              style={{
                                width: calculateProgressBarWidth(),
                              }}
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div style={{ width: "92%", margin: "auto" }}>
                        <h3
                          style={{
                            color: "#888",
                            fontFamily: "Poppins",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            fontHeight: "500",
                            lineHeight: "normal",
                          }}
                        >
                          Perfect trainers
                        </h3>
                      </div>
                      <div
                        className="PB"
                        style={{ width: "92%", margin: "auto" }}
                      >
                        <img
                          src={PeofilePic}
                          alt=""
                          style={{
                            borderRadius: "10px 0 0 10px",
                            width: "5.8rem",
                            height: "6.55rem",
                          }}
                        />
                        <div className="Trainer_Details">
                          <h2>Kowshik</h2>
                          <h3>UI/UX Developer</h3>
                          <Stack
                            spacing={1}
                            sx={{
                              width: "3rem",
                              height: "0.95363rem",
                              marginTop: "0.31rem",
                            }}
                            direction="row"
                            alignItems="center"
                          >
                            <Rating
                              name="half-rating-read"
                              max={5}
                              icon={
                                <StarIcon
                                  sx={{ color: "#FFDE30", fontSize: 20 }}
                                />
                              }
                              emptyIcon={
                                <StarBorderIcon
                                  sx={{ fontSize: 20, color: "#FFDE30" }}
                                />
                              }
                              precision={0.1}
                              readOnly
                            />
                          </Stack>
                        </div>
                        <div
                          className="DELDIT"
                          style={{ marginTop: "68px", marginLeft: "35%" }}
                        >
                          <button className="Del">Delete</button>
                          <button className="Edt" onClick={togglePopup}>
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="Notes">
              <p>Notes</p>
              <input type="text" placeholder="Taking Some Notes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerPosted;
