// EmployerProposalCandidacy.js
import React from "react";
import Profilepic from '../../../assets/profileTrainer.png'
import { Stack, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const EmployerProposalCandidacy = ({ activeStep, handleStepClick }) => {
  // Replace this with your actual dynamic data
  const candidacyData = {
    programName: "Full Stack Developer",
    topics: "Java, Js, Python, React Native",
    trainingType: "Corporate",
    duration: "10 Days",
    startDate: "01-12-2023",
    endDate: "01-01-2024",
    trainer: {
      name: "Kowshik",
      role: "UI/UX Developer",
      rating: 4.5, // 
    },
    budget: "$1000-$2000",
    modeOfTraining: "Online",
    status: "You're interested in this trainer profile, and the request has been successfully submitted! Now, we're awaiting the outcome.",
    steps: [
      {
        number: 1,
        label: "Applied",
        description: "You Just Sent a Request for Trainer",
      },
      {
        number: 2,
        label: "Accepted",
        description: "Trainer Accepted Your Request",
      },
      // Add more steps as needed
    ],
    // ... Add more fields as needed
  };

  return (
    <div className='allaround' style={{ marginTop: '2rem' }}>
      <div className="Trainer_Info">
        <div className="TTTD">
          <p>Training Program Name</p>
          <h3 className="Blue_H2">{candidacyData.programName}</h3>
          <p>Training Topics & Subjects</p>
          <h2>{candidacyData.topics}</h2>
          <p>Type Of Training</p>
          <h2>{candidacyData.trainingType}</h2>
          <p>Duration Of Training</p>
          <h2>{candidacyData.duration}</h2>
          <div className="SDED">
            <div className="SD">
              <p>Start Date</p>
              <h2>{candidacyData.startDate}</h2>
            </div>
            <div className="ED">
              <p>End Date</p>
              <h2>{candidacyData.endDate}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='ProposalStatus'>
        <div className='Proposall'>
          <div style={{ display: 'flex', flexDirection: "column", alignItems: '', gap: '0.5rem' }}>
            <h1 style={{
              color: '#333',
              fontFamily: 'Poppins',
              fontSize: '1.125rem',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'normal',
            }}>Trainer Profile</h1>

            <div className='PB'>
              <img src={Profilepic} alt="" style={{ borderRadius: "10px", width: '5.8rem', height: '6.55rem' }} />
              <div className='Trainer_Details'>
                <h2>{candidacyData.trainer.name}</h2>
                <h3>{candidacyData.trainer.role}</h3>
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
                    value={candidacyData.trainer.rating}
                    readOnly
                  />
                </Stack>
              </div>
            </div>

            <div className='B'><h2>Budget</h2><h1>{candidacyData.budget}</h1></div>

            <div className='B'><h2>Mode Of Training</h2><h1>{candidacyData.modeOfTraining}</h1></div>

          </div>
        </div>
        <div className='Statuss'>
          <h3>{candidacyData.status}</h3>
          <br />
          <div className="stepper">
            {candidacyData.steps.map((step) => (
              <div key={step.number} className={`step ${activeStep === step.number ? 'active' : ''}`} onClick={() => handleStepClick(step.number)}>
                <div className="step-label">
                  <h2>{step.label}</h2>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerProposalCandidacy;