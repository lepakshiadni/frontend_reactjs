import React, { useEffect, useState } from "react";
import "../../styles/TrainerProposalManagement.css";
import "../../styles/MyTrainingProgram.css";
import EmployerPosted from "./EmployerMyTrainingChilds/EmployerPosted";
import EmployerOngoing from "./EmployerMyTrainingChilds/EmployerOngoing";
import EmployerCompleted from "./EmployerMyTrainingChilds/EmployerCompleted";
import { Link, useLocation } from "react-router-dom";

const EmployerMyTraining = () => {
  const location = useLocation();
  const [activeSteps] = useState([1]);
  useEffect(() => {
    setActiveOption(getActiveOption(location.pathname));
  }, [location.pathname]);

  const getActiveOption = (pathname) => {
    if (pathname.startsWith("/employerDashboard/trainingmanagement/posted"))
      return "posted";
    if (pathname.startsWith("/employerDashboard/trainingmanagement/ongoing"))
      return "ongoing";
    if (pathname.startsWith("/employerDashboard/trainingmanagement/completed"))
      return "completed";
    return "posted"; // Default if none matches
  };
  const [activeOption, setActiveOption] = useState(
    getActiveOption(location.pathname)
  );
  const renderComponent = () => {
    switch (activeOption) {
      case "posted":
        return (
          <EmployerPosted
            activeSteps={activeSteps}
            calculateProgressBarWidth={calculateProgressBarWidth}
          />
        );
      case "ongoing":
        return (
          <EmployerOngoing
            activeSteps={activeSteps}
            calculateProgressBarWidth={calculateProgressBarWidth}
          />
        );
      case "completed":
        return (
          <EmployerCompleted
            activeSteps={activeSteps}
            calculateProgressBarWidth={calculateProgressBarWidth}
          />
        );
      default:
        return "posted";
    }
  };
  const calculateProgressBarWidth = () => {
    const totalSteps = 3; // Update this based on the total number of steps
    const width = ((activeSteps.length - 1) / (totalSteps - 1)) * 100;
    return `${width}%`;
  };

  return (
    <div>
      <div className="Post_Buttons pt-[14px] pb-[15px]">
        <Link to="/employerDashboard/trainingmanagement/posted">
          <button
            className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${
              activeOption === "posted" ? "active" : ""
            }`}
          >
            Posted
          </button>
        </Link>
        <Link to="/employerDashboard/trainingmanagement/ongoing">
          <button
            className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${
              activeOption === "ongoing" ? "active" : ""
            }`}
          >
            Ongoing
          </button>
        </Link>
        <Link to="/employerDashboard/trainingmanagement/completed">
          <button
            className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${
              activeOption === "completed" ? "active" : ""
            }`}
          >
            Completed
          </button>
        </Link>
      </div>
      {renderComponent()}
    </div>
  );
};

export default EmployerMyTraining;
