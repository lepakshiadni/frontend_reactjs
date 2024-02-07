import React, { useState } from "react";
import '../../styles/TrainerMyTrainings.css'
import '../../styles/EmployerTrainingMangement.css'
import '../../styles/Requirements.css'
import ppp from '../../assets/profileTrainer.png'
import image15 from '../../assets/image 15.png'
import { Stack, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import down from '../../assets/Resources.svg';
import dust from '../../assets/Delete.svg';
import pen from '../../assets/edit (1).svg'
import download from '../../assets/download 1.svg'
import NTD from "../../assets/NTD.jfif"
const TrainerMyTrainers = () => {
    const [activeSteps, setActiveSteps] = useState([1]);
    const [activeOption, setActiveOption] = useState("upComing");
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const togglePopup = () => { setIsVisible(!isVisible); };
    const filePreview = () => { setIsVisible(!isVisible); };
    const handleOptionClick = (option) => {
        setActiveOption(option);
        switch (option) {
            case "upComing":
                setActiveSteps([1]);
                break;
            case "onGoingtraining":
                setActiveSteps([1, 2]);
                break;
            case "comPleted":
                setActiveSteps([1, 2, 3]);
                break;
            case "deNied":
                setActiveSteps([1, 2]);
                break;
            default:
                setActiveSteps([]);
        }
    };
    const calculateProgressBarWidth = () => {
        const totalSteps = 3; // Update this based on the total number of steps
        const width = (activeSteps.length - 1) / (totalSteps - 1) * 100;
        return `${width}%`;
    };
    const resourceData1 = [
        "Fundamentals Of Full Stack Developer",
        "Rules of JavaScript",
        "Ways To Set Domain",
        "Fundamentals Of Full Stack Developer",
        "Ways To Set Domain",
        "Rules of JavaScript",
        "Ways To Set Domain",
        "Fundamentals Of Full Stack Developer",
        "Ways To Set Domain",
    ];
    return (
        <div>
            <div className="Post_Buttons pt-[14px] pb-[15px]">
                {/* <span className="Post_TJ">
                    {activeOption === "postTraining" ? "Post Training" : "Post Job"}
                </span> */}
                <button
                    onClick={() => handleOptionClick('upComing')}
                    className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${activeOption === 'upComing' ? 'active' : ''
                        }`}
                >
                    Upcoming
                </button>
                <button onClick={() => handleOptionClick("onGoingtraining")}
                    className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${activeOption === 'onGoingtraining' ? 'active' : ''
                        }`}>
                    On Going Traning
                </button>
                <button onClick={() => handleOptionClick("comPleted")}
                    className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${activeOption === 'comPleted' ? 'active' : ''
                        }`}>
                    Completed
                </button>
                <button onClick={() => handleOptionClick("deNied")}
                    className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${activeOption === 'deNied' ? 'active' : ''
                        }`}>
                    Denied
                </button>
            </div>
            {activeOption === "upComing" && (
                <div className="Training_Programs" style={{ marginTop: "2.5rem" }}>
                    <div className="Training_Programm">
                        <div className="Trainer_Infoo">
                            <div className="TTTDD">
                                <p>Training Program Name</p>
                                <h3 className="Blue_H22">Full Stack Developer</h3>
                                <p>Training Topics & Subjects</p>
                                <h2>Java, Js, Python, React Native</h2>
                                <p>Type Of Training</p>
                                <h2>Corporate</h2>
                                <p>Duration Of Training</p>
                                <h2>10 Days</h2>
                                <div className="SDEDD">
                                    <div className="SDD">
                                        <p>Start Date</p>
                                        <h2>01-12-2023</h2>
                                    </div>
                                    <div className="EDD">
                                        <p>End Date</p>
                                        <h2>01-01-2024</h2>
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
                                                className={`circle ${activeSteps.includes(step) ? "active" : ""}`}
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
                                <p>Applied Date:20/12/2024</p>
                            </div>
                            <div className="Program_Status">


                                <div className="Total_Part" style={{
                                }}>
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
                                        <h1>20</h1>
                                        {/* <h5>Participants</h5> */}
                                    </div>
                                    <p>Mode</p>
                                    <h2>Offline</h2>
                                    <p>Location</p>
                                    <h2>Bangalore</h2>
                                    <div className="DELDIT">
                                        <button className="Edt" onClick={togglePopup}>
                                            Delete
                                        </button>

                                        {isVisible && (
                                            <div
                                                style={{
                                                    position: 'fixed',
                                                    top: '0',
                                                    left: '0',
                                                    width: '100%',
                                                    height: '100%',
                                                    backgroundColor: 'rgba(10, 10, 10, 0.64)',
                                                    zIndex: '9998', // Make sure this is lower than the popup's zIndex
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: 'fixed',
                                                        top: '50%',
                                                        left: '50%',
                                                        transform: 'translate(-50%, -50%)',
                                                        height: '25rem',
                                                        width: '45rem',
                                                        backgroundColor: 'white',
                                                        border: '1px solid #ccc',
                                                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                                                        borderRadius: '10px',
                                                        padding: '20px',
                                                        zIndex: 9999,
                                                        display: 'flex',
                                                        justifyContent: 'space-evenly',
                                                        flexDirection: 'column',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <div style={{ width: '90%', margin: 'auto', display: 'flex', justifyContent: 'space-between' }}>
                                                        <h3
                                                            style={{
                                                                fontFamily: 'Poppins',
                                                                fontSize: '20px',
                                                                fontWeight: '500',
                                                                lineHeight: '30px',
                                                                letterSpacing: '0',
                                                                textAlign: 'left',
                                                                color: '#263238',
                                                            }}
                                                        >Are you sure wants to delete this post ?</h3>
                                                        <div
                                                            className={`svg-container ${isHovered ? 'hovered' : ''}`}
                                                            onMouseEnter={() => setIsHovered(true)}
                                                            onMouseLeave={() => setIsHovered(false)}
                                                            cursor="pointer"
                                                            onClick={togglePopup}
                                                        >

                                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" cursor="pointer" onClick={togglePopup}>
                                                                <path d="M8.48347 8.48528L16.9688 16.9706M16.9688 16.9706L25.454 25.4558M16.9688 16.9706L8.48347 25.4558M16.9688 16.9706L25.454 8.48528" stroke="#2676C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>


                                                            <svg className={`background-circle ${isHovered ? 'hovered' : ''}`} viewBox="0 0 34 34">
                                                                <circle cx="17" cy="17" r="16" />
                                                            </svg>
                                                        </div>

                                                    </div>
                                                    <div className="Stepper" style={{ width: '90%', }}>
                                                        <div className="steps">
                                                            {[1, 2, 3].map((step) => (
                                                                <span
                                                                    key={step}
                                                                    className={`circle ${activeSteps.includes(step) ? "active" : ""
                                                                        }`}
                                                                // onClick={() => handleStepClick(step)}
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
                                                                >
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{ width: '92%', margin: 'auto' }}>
                                                        <h3 style={{
                                                            color: "#888",
                                                            fontFamily: 'Poppins',
                                                            fontSize: '1rem',
                                                            fontStyle: 'normal',
                                                            fontHeight: '500',
                                                            lineHeight: 'normal',
                                                        }}>Perfect trainers</h3>
                                                    </div>
                                                    <div className='PB' style={{ width: '92%', margin: 'auto' }}>
                                                        <img src={ppp} alt="" style={{ borderRadius: "10px 0 0 10px", width: '5.8rem', height: '6.55rem' }} />
                                                        <div className='Trainer_Details'>
                                                            <h2>Kowshik</h2>
                                                            <h3>UI/UX Developer</h3>
                                                            <Stack
                                                                spacing={1}
                                                                sx={{
                                                                    width: "3rem",
                                                                    height: "0.95363rem",
                                                                    marginTop: "0.31rem",
                                                                    // marginLeft: "1.11rem",
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
                                                                    // defaultValue={trainerData.averageRating}
                                                                    readOnly
                                                                />
                                                            </Stack>
                                                        </div>
                                                        <div className="DELDIT" style={{ marginTop: '68px', marginLeft: '35%' }}>
                                                            <button className="Del">
                                                                Delete
                                                            </button>
                                                            <button className="Edt" onClick={togglePopup}>Cancel</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="Notess">
                                    {/* <h5 className="TOBH5">Table Of Content</h5> */}
                                    <div className="Step1content"><p>UIUX Training content</p>
                                        <img src={download} alt="" style={{ borderRadius: '50%', width: '2rem', height: '2rem', backgroundColor: '#2676c233' }} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )
            }
            {
                activeOption === "onGoingtraining" && (
                    <div className="Training_Programs" style={{ marginTop: "2em" }}>
                        <div className="Training_Programm">
                            <div className="Trainer_Infoo">
                                <div className="TTTDD">
                                    <p>Training Program Name</p>
                                    <h3 className="Blue_H22">Full Stack Developer</h3>
                                    <p>Training Topics & Subjects</p>
                                    <h2>Java, Js, Python, React Native</h2>
                                    <p>Type Of Training</p>
                                    <h2>Corporate</h2>
                                    <p>Duration Of Training</p>
                                    <h2>10 Days</h2>
                                    <div className="SDEDD">
                                        <div className="SDD">
                                            <p>Start Date</p>
                                            <h2>01-12-2023</h2>
                                        </div>
                                        <div className="EDD">
                                            <p>End Date</p>
                                            <h2>01-01-2024</h2>
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
                                                className={`circle ${activeSteps.includes(step) ? "active" : ""
                                                    }`}
                                            // onClick={() => handleStepClick(step)}
                                            >
                                                {step}
                                            </span>
                                        ))}
                                        <div className="progress-bar">
                                            <span
                                                className="indicator"
                                                style={{
                                                    width: calculateProgressBarWidth(), // Adjusted the calculation here
                                                }}
                                            ></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="Step2PS">
                                    <h4>Program Status</h4>
                                    <p>Started Date:20/12/2024</p>
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
                                                <span><h2>Eleesa</h2><p>Zipro</p></span>
                                            </div>
                                        </>
                                        {/* <div className="Total_Part"> */}
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
                                            <h1>20</h1>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <p>Mode</p>
                                                <h2>Offline</h2>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <p>Location</p>
                                                <h2>Bangalore</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Notess">
                                        <div
                                            style={{
                                                position: "relative",
                                                height: "60px",
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        // onClick={() => postImage.current.click()}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="60"
                                                height="60"
                                                viewBox="0 0 60 60"
                                                fill="none"
                                            >
                                                <circle cx="30" cy="30" r="30" fill="#E8E8E8" />
                                            </svg>
                                            <span
                                                style={{
                                                    zIndex: 1,
                                                    position: "absolute",
                                                    marginLeft: "16px",
                                                }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="28"
                                                    height="28"
                                                    viewBox="0 0 28 28"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M14 26.7277V13.9999M14 13.9999V1.27197M14 13.9999H26.728M14 13.9999H1.27207"
                                                        stroke="white"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            <div className="Step2content"><p>Click To Add File</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div >
                )
            }
            {
                activeOption === "comPleted" && (
                    <div className="Training_Programm" style={{ marginTop: '2rem' }}>
                        <div className="Trainer_Infoo">
                            <div className="TTTDD">
                                <p>Training Program Name</p>
                                <h3 className="Blue_H22">Full Stack Developer</h3>
                                <p>Training Topics & Subjects</p>
                                <h2>Java, Js, Python, React Native</h2>
                                <p>Type Of Training</p>
                                <h2>Corporate</h2>
                                <p>Duration Of Training</p>
                                <h2>10 Days</h2>
                                <div className="SDEDD">
                                    <div className="SDD">
                                        <p>Start Date</p>
                                        <h2>01-12-2023</h2>
                                    </div>
                                    <div className="EDD">
                                        <p>End Date</p>
                                        <h2>01-01-2024</h2>
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
                                            className={`circle ${activeSteps.includes(step) ? "active" : ""
                                                }`}
                                        // onClick={() => handleStepClick(step)}
                                        >
                                            {step}
                                        </span>
                                    ))}
                                    <div className="progress-bar">
                                        <span
                                            className="indicator"
                                            style={{ width: calculateProgressBarWidth(), }}
                                        ></span>
                                    </div>
                                </div>
                            </div>
                            <div className="Step3PS">
                                <h4>Program Status</h4>
                                <p>Completed:20/12/2024</p>
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
                                            <span><h2>Eleesa</h2><p>Zipro</p></span>
                                        </div>
                                    </>
                                    {/* <div className="Total_Part"> */}
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
                                        <h1>20</h1>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <p>Mode</p>
                                            <h2>Offline</h2>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <p>Location</p>
                                            <h2>Bangalore</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="Notesss" >
                                    {/* <div className="Step3content"> */}
                                    <div className="R_Content">
                                        {resourceData1.map((resource, index) => (
                                            <h2 key={index} onClick={filePreview}>
                                                <img src={down} className="hoverr" alt="down-arrow" />
                                                {isVisible && (
                                                    <div
                                                        style={{
                                                            position: 'fixed',
                                                            top: '0',
                                                            left: '0',
                                                            width: '100%',
                                                            height: '100%',
                                                            backgroundColor: '#0a0a0a33',
                                                            zIndex: '9998', // Make sure this is lower than the popup's zIndex
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                position: 'fixed',
                                                                top: '50%',
                                                                left: '50%',
                                                                transform: 'translate(-50%, -50%)',
                                                                height: '25rem',
                                                                width: '45rem',
                                                                backgroundColor: 'white',
                                                                border: '1px solid #ccc',
                                                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                                                                borderRadius: '10px',
                                                                padding: '20px',
                                                                zIndex: 9999,
                                                                display: 'flex',
                                                                justifyContent: 'space-evenly',
                                                                flexDirection: 'column',
                                                                alignItems: 'center'
                                                            }}>
                                                            <div style={{ width: '90%', margin: 'auto', display: 'flex', justifyContent: 'space-between' }}>
                                                                <div
                                                                    className={`svg-container ${isHovered ? 'hovered' : ''}`}
                                                                    onMouseEnter={() => setIsHovered(true)}
                                                                    onMouseLeave={() => setIsHovered(false)}
                                                                    cursor="pointer"
                                                                    onClick={filePreview}
                                                                >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" cursor="pointer" onClick={filePreview}>
                                                                        <path d="M8.48347 8.48528L16.9688 16.9706M16.9688 16.9706L25.454 25.4558M16.9688 16.9706L8.48347 25.4558M16.9688 16.9706L25.454 8.48528" stroke="#2676C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>
                                                                    <svg className={`background-circle ${isHovered ? 'hovered' : ''}`} viewBox="0 0 34 34">
                                                                        <circle cx="17" cy="17" r="16" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div style={{ width: "90%", height: '90%', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                <img src={NTD} alt="" style={{ width: "90%", height: '90%' }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                {resource}
                                            </h2>
                                        ))}
                                    </div>
                                    {/* </div> */}
                                    <div className="pendust">
                                        <img src={pen} alt="" />
                                        <img src={dust} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
            {activeOption === "deNied" && (
                <div className="Training_Programs" style={{ marginTop: "2em" }}>
                    <div className="Training_Programm">
                        <div className="Trainer_Infoo">
                            <div className="TTTDD">
                                <p>Training Program Name</p>
                                <h3 className="Blue_H22">Full Stack Developer</h3>
                                <p>Training Topics & Subjects</p>
                                <h2>Java, Js, Python, React Native</h2>
                                <p>Type Of Training</p>
                                <h2>Corporate</h2>
                                <p>Duration Of Training</p>
                                <h2>10 Days</h2>
                                <div className="SDEDD">
                                    <div className="SDD">
                                        <p>Start Date</p>
                                        <h2>01-12-2023</h2>
                                    </div>
                                    <div className="EDD">
                                        <p>End Date</p>
                                        <h2>01-01-2024</h2>
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
                                            className={`circle ${activeSteps.includes(step) ? "active" : ""} ${activeOption === "deNied" && step === 2 ? "denied" : ""}`}
                                        // onClick={() => handleStepClick(step)}
                                        >
                                            {step}
                                        </span>
                                    ))}
                                    <div className="progress-bar">
                                        <span
                                            className="indicator"
                                            style={{
                                                width: calculateProgressBarWidth(), // Adjusted the calculation here
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
                                            <span><h2>Eleesa</h2><p>Zipro</p></span>
                                        </div>
                                    </>
                                    {/* <div className="Total_Part"> */}
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
                                        <h1>20</h1>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <p>Mode</p>
                                            <h2>Offline</h2>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <p>Location</p>
                                            <h2>Bangalore</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="Notesss">
                                    {/* <div className="Step4content"> */}
                                    <div className="R_Content">
                                        {resourceData1.map((resource, index) => (
                                            <h2 key={index}>
                                                <img src={down} className="hoverr" alt="down-arrow" />
                                                {resource}
                                            </h2>
                                        ))}
                                    </div>
                                    {/* </div> */}
                                    <div className="pendust">
                                        <img src={pen} alt="" />
                                        <img src={dust} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >
            )}
        </div >
    );
};

export default TrainerMyTrainers;
