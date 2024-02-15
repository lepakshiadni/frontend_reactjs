import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import '../../styles/Requirements.css'
import '../../styles/TrainerMyTrainings.css'
import Upcoming from './childs/Upcoming';
import OngoingTraining from "./childs/OnGoingTraining";
import Completed from './childs/Completed';
import Denied from './childs/Denied';

const TrainerMyTrainings = () => {
    const location = useLocation();
    const [activeSteps] = useState([1]);
    
    useEffect(() => {
        setActiveOption(getActiveOption(location.pathname));
    }, [location.pathname]);

    const getActiveOption = (pathname) => {
        if (pathname.startsWith("/trainerDashboard/mytrainings/upcoming")) return "upComing";
        if (pathname.startsWith("/trainerDashboard/mytrainings/ongoing")) return "onGoingtraining";
        if (pathname.startsWith("/trainerDashboard/mytrainings/completed")) return "comPleted";
        if (pathname.startsWith("/trainerDashboard/mytrainings/denied")) return "deNied";
        return "upComing"; // Default if none matches
    };

    const [activeOption, setActiveOption] = useState(getActiveOption(location.pathname));

    const calculateProgressBarWidth = () => {
        const totalSteps = 3; // Update this based on the total number of steps
        const width = (activeSteps.length - 1) / (totalSteps - 1) * 100;
        return `${width}%`;
    };

    const renderComponent = () => {
        switch (activeOption) {
            case "upComing":
                return <Upcoming activeSteps={activeSteps} calculateProgressBarWidth={calculateProgressBarWidth} />;
            case "onGoingtraining":
                return <OngoingTraining activeSteps={activeSteps} calculateProgressBarWidth={calculateProgressBarWidth} />;
            case "comPleted":
                return <Completed activeSteps={activeSteps} calculateProgressBarWidth={calculateProgressBarWidth} />;
            case "deNied":
                return <Denied activeSteps={activeSteps} calculateProgressBarWidth={calculateProgressBarWidth} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="Post_Buttons ">
                <Link to="/trainerDashboard/mytrainings/upcoming">
                    <button className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${activeOption === 'upComing' ? 'active' : ''}`}>
                        Upcoming
                    </button>
                </Link>
                <Link to="/trainerDashboard/mytrainings/ongoing">
                    <button className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${activeOption === 'onGoingtraining' ? 'active' : ''}`}>
                        On Going Training
                    </button>
                </Link>
                <Link to="/trainerDashboard/mytrainings/completed">
                    <button className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${activeOption === 'comPleted' ? 'active' : ''}`}>
                        Completed
                    </button>
                </Link>
                <Link to="/trainerDashboard/mytrainings/denied">
                    <button className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${activeOption === 'deNied' ? 'active' : ''}`}>
                        Denied
                    </button>
                </Link>
            </div>
            {renderComponent()}
        </div>
    );
};

export default TrainerMyTrainings;
