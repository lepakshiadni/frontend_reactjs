import React, { useEffect, useState, useRef } from "react";
import "../../styles/Dashboard.css"; // Import your CSS file for styling
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Done from "../../assets/Done.png";
import DoneBackground from "../../assets/DoneBackground.png";
import Header from "../../header&footer/Header";
import { useDispatch } from "react-redux";
import { trainerDetails } from "../../../redux/action/trainer.action";
import {
    Route,
    Routes,
    NavLink,
    useNavigate,
    useLocation,
} from "react-router-dom";
import Chat from "../messages/Chat";
import TrainerProposalMangement from "../proposalMangement/TrainerProposalMangement.jsx";
import TrainerSettings from "../settings/TrainerSettings";
import TrainerHelpSupport from "../help&support/TrainerHelpSupport";
import Feed from "../feed/Feed.jsx";
import TrainerFeed from '../feed/trainerFeed/TrainerFeed.jsx'
import TrainersList from "../trainerlist/TrainersList.js";
import CreatePostPopup from "../../utils/CreatePostPopUp.jsx";
import { option } from "./TrainerData";
// import DashboardData from "../TrainerDashBoard/DashboardData 2.jsx";
import DashboardData from "./trainerDashboard/DashboardData 2.jsx";
import TrainerMyTrainings from "../mytrainings/TrainerMyTrainings.jsx";
import Upcoming from "../mytrainings/childs/Upcoming.jsx";
import OngoingTraining from "../mytrainings/childs/OnGoingTraining.jsx";
import Completed from "../mytrainings/childs/Completed.jsx";
import Denied from "../mytrainings/childs/Denied.jsx";
function TrainerDashboard() {
    const [selectedOption, setSelectedOption] = useState("dashboard");
    const [showWelcome, setShowWelcome] = useState(true);
    const [prevSelectedOption, setPrevSelectedOption] = useState("");
    const [model, setModel] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        dispatch(trainerDetails());
    }, [dispatch]);
    useEffect(() => {
        // Update the selectedOption based on the current location
        const currentOption = option.find((opt) => {
            if (
                location.pathname.startsWith("/trainerDashboard/proposalmanagement") ||
                location.pathname.startsWith(
                    "/trainerDashboard/proposalmanagement/applied"
                ) ||
                location.pathname.startsWith(
                    "/trainerDashboard/proposalmanagement/proposal"
                )
            ) {
                return opt.name === "Proposal Management";
            }

            if (location.pathname.startsWith("/trainerDashboard/mytrainings")) {
                // Check if the current path starts with the parent route or its child routes
                if (
                    location.pathname.startsWith("/trainerDashboard/mytrainings") ||
                    location.pathname.startsWith(
                        "/trainerDashboard/mytrainings/upcoming"
                    ) ||
                    location.pathname.startsWith(
                        "/trainerDashboard/mytrainings/ongoing"
                    ) ||
                    location.pathname.startsWith(
                        "/trainerDashboard/mytrainings/completed"
                    ) ||
                    location.pathname.startsWith("/trainerDashboard/mytrainings/denied")
                ) {
                    return opt.name === "My Trainings"; // Set the active state for the parent route
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
        setSelectedOption(option.replace(/\s/g, ""));
        // console.log("option",option.replace(/\s/g, "").toLowerCase())
        // navigate(`${option.replace(/\s/g, "").toLowerCase()}`); // Update URL on option click
    };
    return (
        <>
            <div className="">
                {showWelcome ? (
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
                ) : (
                    <div className="relative w-full">
                        <div className="w-full">
                            <Header />
                        </div>
                        <div className="Reactangle-dash w-full flex">
                            <div className="Rectangle-side w-[290px] bg-white mt-[2px] shadow">
                                {option.map(({ name, icon }) => {
                                    let toPath = `/trainerDashboard/${name
                                        .replace(/\s/g, "")
                                        .toLowerCase()}`;
                                    if (name === "My Trainings") {
                                        toPath = "/trainerDashboard/mytrainings/upcoming";
                                    }
                                    if (name === "Proposal Management") {
                                        toPath = "/trainerDashboard/proposalmanagement/applied";
                                    }
                                    return (
                                        <NavLink
                                            key={name}
                                            to={toPath}
                                            //  to={`/trainerDashboard/${name.replace(/\s/g, "").toLowerCase()}`}
                                            className={`sidebar-option  ${selectedOption === name ? "active" : ""
                                                } ${prevSelectedOption === name ? "reverse" : ""}`}
                                            activeClassName="active"
                                            onClick={() => handleOptionClick(name)}
                                        >
                                            <ArrowForwardIosOutlinedIcon className="arrow-icon" />
                                            {icon}
                                            {name}
                                        </NavLink>
                                    );
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
                                            <button
                                                onClick={() => {
                                                    setModel(true);
                                                }}
                                                className="w-[161px] h-[40px] bg-[#2676C2] border rounded-lg text-white text-base font-medium font-['Poppins']"
                                            >
                                                Create a post +
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="content pr-[20px]">
                                    <Routes>
                                        <Route path="dashboard" element={<DashboardData />} />
                                        <Route path="feed" element={<TrainerFeed />} />
                                        <Route path="mytrainings/*" element={<TrainerMyTrainings />}>
                                            <Route index element={<Upcoming />} />
                                            <Route path="ongoing" element={<OngoingTraining />} />
                                            <Route path="completed" element={<Completed />} />
                                            <Route path="denied" element={<Denied />} />
                                        </Route>
                                        <Route path="messages" element={<Chat />} />
                                        <Route path="BillingPayments" element={<TrainersList />} />
                                        <Route path="settings" element={<TrainerSettings />} />
                                        <Route path="proposalmanagement/*" element={<TrainerProposalMangement />} />
                                        <Route path="help&support" element={<TrainerHelpSupport />} />
                                    </Routes>

                                </div>
                            </div>
                            {model && selectedOption === "Feed" ? (
                                <>
                                    <CreatePostPopup trigger={model} setTrigger={setModel} />
                                </>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default TrainerDashboard;
