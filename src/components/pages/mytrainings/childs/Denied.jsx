import React, { useState } from 'react';
import image15 from "../../../assets/image 15.png";


const Denied = () => {
    // Dummy data for denied training
    const DeniedData = [
        {
            training: 'Full Stack Developer',
            companyName: 'Wipro Technology',
            trainingType: 'Corporate',
            duration: '10 Days',
            startDate: '01-12-2023',
            endDate: '01-01-2024',
            appliedDate: '20/12/2024',
            totalApplications: 20,
            mode: 'Offline',
            location: 'Bangalore',
            postedBy: 'Eleesa',
            companyPosted: 'Zipro',
            totalApplication: 20,
        },
        // Add more objects with data as needed
    ];

    const [activeSteps, setActiveSteps] = useState([1,2]);
    const [activeOption, setActiveOption] = useState("upComing");


    const calculateProgressBarWidth = () => {
        const totalSteps = 3; // Update this based on the total number of steps
        const width = (activeSteps.length - 1) / (totalSteps - 1) * 100;
        return `${width}%`;
    };



    return (
        <>
            {DeniedData.map((training, index) => (
                <div key={index} className="Training_Programs" style={{ marginTop: "20px" }}>
                    <div className="Training_Programm">
                        <div className="Trainer_Infoo">
                            <div className="TTTDD">
                                <p>Training Program Name</p>
                                <h3 className="Blue_H22">{training.training}</h3>
                                <p>Company Name</p>
                                <h3 className="Blue_H22">{training.companyName}</h3>
                                <p>Type Of Training</p>
                                <h2>{training.trainingType}</h2>
                                <p>Duration Of Training</p>
                                <h2>{training.duration}</h2>
                                <div className="SDEDD">
                                    <div className="SDD">
                                        <p>Start Date</p>
                                        <h2>{training.startDate}</h2>
                                    </div>
                                    <div className="EDD">
                                        <p>End Date</p>
                                        <h2>{training.endDate}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Program_Info">
                            <div className="Stepper" style={{ height: '2.5rem', marginTop: '1.5rem' }}>
                                <div className="steps">
                                    {[1, 2, 3].map((step) => (
                                        <span
                                            key={step}
                                            className={`circlered ${activeSteps.includes(step) ? "active" : ""} ${activeOption === "deNied" && step === 2 ? "denied" : ""}`}
                                        >
                                            {step}
                                        </span>
                                    ))}
                                    <div className="progress-bar">
                                        <span
                                            className="indicatorred"
                                            style={{
                                                width: calculateProgressBarWidth(),
                                            }}
                                        ></span>
                                    </div>
                                </div>
                            </div>
                            <div className="Step4PS">
                                <h4>Program Status</h4>
                                <p>Denied</p>
                            </div>
                            <div className="Program_Status">
                                <div className="Total_Parttt">
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
                                        <div className='PBB'>
                                            <img src={image15} alt="" style={{ borderRadius: '100%', width: '4rem', height: '4rem' }} />
                                            <span><h2>{training.postedBy}</h2><p>{training.companyPosted}</p></span>
                                        </div>
                                    </>
                                    <p style={{
                                        whiteSpace: "nowrap",
                                        marginBottom: "1rem",
                                        margin: "0%",
                                    }}>
                                        Total Application
                                    </p>
                                    <div className="P205">
                                        <h1>{training.totalApplication}</h1>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <p>Mode</p>
                                            <h2>{training.mode}</h2>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <p>Location</p>
                                            <h2>{training.location}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="Notesss">
                                    {/* Add any additional content specific to Denied section */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Denied;
