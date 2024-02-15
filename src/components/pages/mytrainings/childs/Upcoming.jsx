import React, { useState } from 'react';
import profilegirl from '../../../assets/image 15.png';
import download from '../../../assets/download 1.svg';
 

const Upcoming = () => {
    const [activeSteps, setActiveSteps] = useState([1]);
    const [isVisible, setIsVisible] = useState(false);

    const UpcomingData = [
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
        },
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
        },
        // Add more objects with data as needed
    ];

    const togglePopup = () => {
        setIsVisible(!isVisible);
    };

    const calculateProgressBarWidth = () => {
        const totalSteps = 3; // Update this based on the total number of steps
        const width = (activeSteps.length - 1) / (totalSteps - 1) * 100;
        return `${width}%`;
    };

    return (
        <div className="Training_Programs" style={{ marginTop: '20px' }}>
            {UpcomingData.map((training, index) => (
                <div key={index} className="Training_Programm">
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
                                    <React.Fragment key={step}>
                                        <div
                                            className={`circle ${activeSteps.includes(step) ? 'active' : ''}`}
                                        >
                                            {step}
                                        </div>
                                    </React.Fragment>
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
                            <p>{`Applied Date: ${training.appliedDate}`}</p>
                        </div>
                        <div className="Program_Status">
                            <div
                                className="Total_Part"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem',
                                    paddingTop: '2rem',
                                }}
                            >
                                <p
                                    style={{
                                        whiteSpace: 'nowrap',
                                        marginBottom: '1rem',
                                        margin: '0%',
                                    }}
                                >
                                    Total Application
                                </p>
                                <div className="P205">
                                    <h1>{training.totalApplications}</h1>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1.5rem',
                                    }}
                                >
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <p>Mode</p>
                                        <h2>{training.mode}</h2>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <p>Location</p>
                                        <h2>{training.location}</h2>
                                    </div>
                                </div>
                                <div className="DELDIT">
                                    <button className="Edt" onClick={togglePopup}>
                                        Delete
                                    </button>

                                    {isVisible && (
                                        <div className="Trainer-Proposal-Management-Popup">
                                            <div className="Trainer-Proposal-Management-Popup-modalContainer ">
                                                <div className='Trainer-Proposal-Management-Popup-Top' >
                                                    <div className='Trainer-Proposal-Management-Popup-Posted-By'>
                                                        <h1 style={{ width: '80%', marginBottom: '15px', marginLeft: '2rem' }}>Posted By</h1>
                                                        <div className='PBB' style={{ background: '#FFF', marginLeft: '2rem' }} >
                                                            <img src={profilegirl} alt="" style={{ borderRadius: '100%', width: '4rem', height: '4rem' }} />
                                                            <span><h2>Eleesa</h2><p>Zipro</p></span>
                                                        </div>
                                                    </div>
                                                    <div className='Trainer-Proposal-Management-Popup-info'>
                                                        <div className='C-T-B'>
                                                            <h1>Company</h1>
                                                            <h3>Wipro</h3>
                                                            <h1>Training Name</h1>
                                                            <h3>UI/UX Developer</h3>
                                                            <h1>Budget</h1>
                                                            <h3>2000-3000</h3>
                                                        </div>
                                                        <div className='M-L'>
                                                            <h1>Mode</h1>
                                                            <h3>Offline</h3>
                                                            <h1>Location</h1>
                                                            <h3>Kerala</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='Trainer-Proposal-Management-Popup-Bottom'>
                                                    <h1>Do You Want To Accept This Proposal ?</h1>
                                                    <div className='Trainer-Proposal-Management-Popup-button'>
                                                        <button >No</button>
                                                        <button onClick={togglePopup}>Confirm</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="Notess">
                                <div className="Step1content">
                                    <p>{`${training.training} content`}</p>
                                    <img src={download} alt="" style={{ borderRadius: '50%', width: '2rem', height: '2rem', backgroundColor: '#2676c233' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Upcoming;
