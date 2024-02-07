import React, { useState } from 'react';
import '../../styles/TrainerProposalManagement.css'
import image15 from '../../assets/image 15.png'



const TrainerProposalManagement = () => {
  const [activeOption, setActiveOption] = useState("Applied");

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  return (
    <div className='ProposalManagement'>
      <div className="Post_Buttons">
        <button
          onClick={() => handleOptionClick("Applied")}
          style={{ marginRight: "10px" }}
          className="Post_T"
        >
          Applied
        </button>
        <button onClick={() => handleOptionClick("Proposal")} className="Post_J">
          Proposal
        </button>
      </div>

      {activeOption === "Applied" && (
        <div className='allaround' style={{ marginTop: '2rem' }}>
          <div className="Trainer_Info">
            <div className="TTTD">
              <p>Training Program Name</p>
              <h3 className="Blue_H2">Full Stack Developer</h3>
              <p>Training Topics & Subjects</p>
              <h2>Java, Js, Python, React Native</h2>
              <p>Type Of Training</p>
              <h2>Corporate</h2>
              <p>Duration Of Training</p>
              <h2>10 Days</h2>
              <div className="SDED">
                <div className="SD">
                  <p>Start Date</p>
                  <h2>01-12-2023</h2>
                </div>
                <div className="ED">
                  <p>End Date</p>
                  <h2>01-01-2024</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='ProposalStatus'>
            <div className='Proposall'>
              <div style={{ display: 'flex', flexDirection: "column", alignItems: '', gap: '0.5rem' }}>
                <>
                  <h1 style={{
                    color: '#333',
                    fontFamily: 'Poppins',
                    fontSize: '1.125rem',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: 'normal',
                    margin: '0'
                  }}>Posted By</h1>
                  <div className='PBB' style={{ background: '#FFF', width: '' }} >
                    <img src={image15} alt="" style={{ borderRadius: '100%', width: '4rem', height: '4rem' }} />
                    <span><h2>Eleesa</h2><p>Zipro</p></span>
                  </div>
                </>
                <div className='B'><h2>Budget</h2><h1>$1000-$2000</h1></div>
                <div className='B'><h2>Mode Of Training</h2><h1>Online</h1></div>
              </div>
            </div>
            <div className='Statuss'>
              <h3>You're interested in this trainer profile, and
                the request has been successfully
                submitted! Now, we're awaiting the
                outcome.</h3>
              <br />
              <div className="stepper">
                <div className={`step ${activeStep === 1 ? 'active' : ''}`} onClick={() => handleStepClick(1)}>
                  <div className="step-label">
                    <h2>Applied</h2>
                    <p>You Just Sent a Request for Trainer</p>
                  </div>
                </div>
                <div className={`step ${activeStep === 2 ? 'active' : ''}`} onClick={() => handleStepClick(2)}>
                  <div className="step-label">
                    <h2>Accepted</h2>
                    <p>Trainer Accepted Your Request</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeOption === "Proposal" && (
        <div className='allaround' style={{ marginTop: '2rem' }}>
          <div className="Trainer_Info">
            <div className="TTTD">
              <p>Training Program Name</p>
              <h3 className="Blue_H2">Full Stack Developer</h3>
              <p>Training Topics & Subjects</p>
              <h2>Java, Js, Python, React Native</h2>
              <p>Type Of Training</p>
              <h2>Corporate</h2>
              <p>Duration Of Training</p>
              <h2>10 Days</h2>
              <div className="SDED">
                <div className="SD">
                  <p>Start Date</p>
                  <h2>01-12-2023</h2>
                </div>
                <div className="ED">
                  <p>End Date</p>
                  <h2>01-01-2024</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='ProposalStatus'>
            <div className='Proposall'>
              <div style={{ display: 'flex', flexDirection: "column", alignItems: '', gap: '0.5rem' }}>
                <>
                  <h1 style={{
                    color: '#333',
                    fontFamily: 'Poppins',
                    fontSize: '1.125rem',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: 'normal',
                    margin: '0'
                  }}>Posted By</h1>
                  <div className='PBB' style={{ background: '#FFF' }}>
                    <img src={image15} alt="" style={{ borderRadius: '100%', width: '4rem', height: '4rem' }} />
                    <span><h2>Eleesa</h2><p>Zipro</p></span>
                  </div>
                </>
                <div className='B'><h2>Budget</h2><h1>$1000-$2000</h1></div>
                <div className='B'><h2>Mode Of Training</h2><h1>Online</h1></div>
              </div>
            </div>
            <div className='Statusss'>
              <h3>Kowshik Proposed For Your Post a Requirement</h3>
              <br />
              <div className='Statuss_Buttonss'>
                <button>Denied</button>
                <button>Accept</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TrainerProposalManagement;
