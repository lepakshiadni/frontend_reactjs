import React, { useEffect, useState, useRef } from "react";
import "../../styles/Dashboard.css"; // Import your CSS file for styling
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Done from '../../assets/Done.png'
import DoneBackground from '../../assets/DoneBackground.png'
import Header from "../../header&footer/Header";
import { useDispatch, useSelector } from "react-redux";
import { trainerDetails } from '../../../redux/action/trainer.action'
import { Route, Routes, NavLink, useNavigate, useLocation } from "react-router-dom";
import Chat from "../messages/Chat";
import TrainerProposalMangement from "../proposalMangement/TrainerProposalMangement";
import TrainerSettings from "../settings/TrainerSettings";
import TrainerMyTrainers from "../mytrainings/TrainerMyTrainngs.jsx";
import TrainerHelpSupport from "../help&support/TrainerHelpSupport";
import TrainerFeed from '../feed/trainerFeed/TrainerFeed.jsx'
import TrainersList from "../trainerlist/TrainersList.js";
import TrainerProfile from '../trainerprofile/TrainerProfile.jsx'
import CreatePostPopup from "../../utils/CreatePostPopUp.jsx";


import { option } from './TrainerData'

function TrainerDashboard() {
    const [selectedOption, setSelectedOption] = useState("dashboard");
    const [showWelcome, setShowWelcome] = useState(true);
    const [prevSelectedOption, setPrevSelectedOption] = useState("");
    const [model, setModel] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        dispatch(trainerDetails())
    }, [dispatch])
    const trainer = useSelector(({ trainerSignUp }) => {
        return trainerSignUp?.trainerDetails;
    })
    useEffect(() => {
        // Update the selectedOption based on the current location
        const currentOption = option.find(opt => location.pathname.includes(opt.name.toLowerCase()));
        if (currentOption) {
            setSelectedOption(currentOption.name);
        }
    }, [location.pathname]);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowWelcome(false);
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, []);

    const handleOptionClick = (option) => {
        if (selectedOption !== option) {
            setPrevSelectedOption(selectedOption);
        }
        setSelectedOption(option);
        navigate(`${option.toLowerCase()}`); // Update URL on option click
    };
    return (
        <>
            <div className="">
                {
                    showWelcome ? (
                        <div className="h-screen">
                            <div className="relative h-[500px] flex items-center justify-center">
                                <div className="absolute bouncing-image">
                                    <img src={DoneBackground} alt="" width={500} height={500} />
                                </div>
                                <div className="absolute z-11">
                                    <img src={Done} alt="" width={300} height={300} />
                                </div>
                            </div>
                            <div className="welcome flex justify-center items-center flex-col ">
                                <h1> Welcome Back, Knowledge Seeker!</h1>
                                <h1>Your Learning Adventure Continues with SISSOO</h1>
                            </div>
                        </div>
                    )
                        : (
                            <div className="relative w-full">
                                <div className="w-full">
                                    <Header />
                                </div>
                                <div className="Reactangle-dash w-full flex">
                                    <div className="Rectangle-side w-[290px] bg-white mt-[2px] shadow">

                                        {option.map(({ name, icon }) => {
                                            return (<NavLink
                                                key={name}
                                                to={`/trainerDashboard/${name.toLowerCase()}`}
                                                className={`sidebar-option  ${selectedOption === name ? "active" : ""
                                                    } ${prevSelectedOption === name ? "reverse" : ""}`}
                                                activeClassName="active"
                                                onClick={() => handleOptionClick(name)}
                                            >
                                                <ArrowForwardIosOutlinedIcon className="arrow-icon" />
                                                {icon}
                                                {name}
                                            </NavLink>
                                            )
                                        })}
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
                                            </div>
                                            <div>
                                                <div
                                                    className={` ${selectedOption === "Feed" ? "relative" : "hidden"
                                                        }`}
                                                >
                                                    <button onClick={() => { setModel(true) }} className="w-[161px] h-[40px] bg-[#2676C2] border rounded-lg text-white text-base font-medium font-['Poppins']">Create a post +</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="content mt-[20px] pr-[20px]">
                                            <Routes>
                                                {/* Add more routes for other options */}
                                                <Route path="dashboard" element={''} />
                                                <Route path="feed" element={<TrainerFeed />} />
                                                <Route path="myTrainings" element={<TrainerMyTrainers />} >

                                                </Route>
                                                <Route path="messages" element={<Chat />} />
                                                <Route path="BillingPayments" element={<TrainersList />} />
                                                <Route path="settings" element={<TrainerSettings />} />
                                                <Route path="proposalmanagement" element={<TrainerProposalMangement />} />
                                                <Route path="HelpSupport" element={<TrainerHelpSupport />} />
                                                <Route path="dashboard">

                                                    {/* Render content for dashboard */}
                                                </Route>
                                                <Route path="settings">
                                                    {/* <Traq21in> */}
                                                </Route>
                                            </Routes>
                                        </div>
                                    </div>
                                    {
                                        model && selectedOption === "Feed" ? <>
                                            <CreatePostPopup trigger={model} setTrigger={setModel} />
                                        </> : ""
                                    }
                                    {/* <Routes>
                                        <Route path="/trainerDashboard/trainerProfile" element={<TrainerProfile />}></Route>
                                    </Routes> */}
                                </div>

                            </div>
                        )}
            </div>

        </>
    )
}

export default TrainerDashboard