import { React, useState } from "react";
import profilepic from "../../../assets/profileTrainer.png";
import { Stack, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const EmployerCompleted = () => {
  const completedData = {
    programName: "Full Stack Developer",
    topics: "Java, Js, Python, React Native",
    trainingType: "Corporate",
    duration: "10 Days",
    startDate: "01-12-2023",
    endDate: "01-01-2024",
    programStatus: "Completed",
    completedDate: "20/12/2024",
    trainer: {
      name: "Kowshik",
      role: "UI/UX Developer",
      rating: 4.5,
    },
    totalApplications: 20,
    mode: "Offline",
    location: "Bangalore",
    notes:
      "One of the best trainer Perfect person to teach they know a lot of things",
    rating: 4.5,
  };
  const [activeSteps] = useState([1, 2, 3]);
  const calculateProgressBarWidth = () => {
    const totalSteps = 3; // Update this based on the total number of steps
    const width = ((activeSteps.length - 1) / (totalSteps - 1)) * 100;
    return `${width}%`;
  };

  return (
    <div className="Training_Programm">
      <div className="Trainer_Infoo">
        <div className="TTTDD">
          <p>Training Program Name</p>
          <h3 className="Blue_H22">{completedData.programName}</h3>
          <p>Training Topics & Subjects</p>
          <h2>{completedData.topics}</h2>
          <p>Type Of Training</p>
          <h2>{completedData.trainingType}</h2>
          <p>Duration Of Training</p>
          <h2>{completedData.duration}</h2>
          <div className="SDEDD">
            <div className="SDD">
              <p>Start Date</p>
              <h2>{completedData.startDate}</h2>
            </div>
            <div className="EDD">
              <p>End Date</p>
              <h2>{completedData.endDate}</h2>
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
                // onClick={() => handleStepClick(step)}
              >
                {step}
              </span>
            ))}
            <div className="progress-bar">
              <span
                className="indicator"
                style={{ width: calculateProgressBarWidth() }}
              ></span>
            </div>
          </div>
        </div>
        <div className="Step3PS">
          <h4>Program Status</h4>
          <p>Completed Date: {completedData.completedDate}</p>
        </div>
        <div className="Program_Status">
          <div className="Total_Partt">
            <p>Trainer</p>
            <div
              className="PB"
              style={{ border: "1px solid #DADADA", borderRadius: "10px" }}
            >
              <img
                src={profilepic}
                alt=""
                style={{
                  borderRadius: "10px",
                  width: "5.8rem",
                  height: "6.55rem",
                }}
              />
              <div className="Trainer_Details">
                <h2>{completedData.trainer.name}</h2>
                <h3>{completedData.trainer.role}</h3>
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
                    icon={<StarIcon sx={{ color: "#FFDE30", fontSize: 20 }} />}
                    emptyIcon={
                      <StarBorderIcon sx={{ fontSize: 20, color: "#FFDE30" }} />
                    }
                    precision={0.1}
                    value={completedData.trainer.rating}
                    readOnly
                  />
                </Stack>
              </div>
            </div>
            <p>Total Application</p>
            <div className="P205">
              <h1>{completedData.totalApplications}</h1>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p>Mode</p>
                <h2>{completedData.mode}</h2>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p>Location</p>
                <h2>{completedData.location}</h2>
              </div>
            </div>
          </div>
          <div className="Notess">
            <p>{completedData.notes}</p>
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                max={5}
                icon={<StarIcon sx={{ color: "#FFDE30", fontSize: 45 }} />}
                emptyIcon={
                  <StarBorderIcon sx={{ fontSize: 45, color: "#FFDE30" }} />
                }
                precision={0.1}
                value={completedData.rating}
                readOnly
              />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerCompleted;
