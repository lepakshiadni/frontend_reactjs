import React, { useEffect, useState } from "react";
import "../../styles/TrainerProposalManagement.css";
import '../../styles/TrainerMyTrainings.css'
import '../../styles/Requirements.css'
import Image15 from "../../assets/image 15.png";
import TrainerProposalApplied from './TrainerProposalManagement/TrainerProposalApplied';
import TrainerProposalRequest from './TrainerProposalManagement/TrainerProposalRequest'
import { Link, useLocation } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import {gettrainerAppliedTraining} from '../../../redux/action/trainer.action'

const TrainerProposalManagement = () => {
  const location = useLocation();
  const dispatch=useDispatch()
  const getActiveOption = (pathname) => {
    if (pathname.startsWith("/trainerDashboard/proposalmanagement/applied"))
      return "Applied";
    if (
      pathname.startsWith(
        "/trainerDashboard/proposalmanagement/proposalrequest"
      )
    )
      return "Proposal";
    return "Applied"; // Default if none matches
  };

  const [activeOption, setActiveOption] = useState(
    getActiveOption(location.pathname) || "Applied"
  );

  useEffect(() => {
    setActiveOption(getActiveOption(location.pathname));
  }, [location.pathname]);
  const proposalData = {
    trainingName: "Full Stack Developer",
    topics: "Java, JS, Python, React Native",
    trainingType: "Corporate",
    duration: "10 Days",
    startDate: "01-12-2023",
    endDate: "01-01-2024",
    postedByImage: Image15,
    postedBy: "Eleesa",
    companyPosted: "Zipro",
    budget: "$1000-$2000",
    mode: "Online",
    proposer: "Kowshik",
  };

  useEffect(()=>{
    dispatch(gettrainerAppliedTraining())
  },[dispatch])
  const appliedTraining=useSelector(({trainerSignUp})=>{
    return trainerSignUp?.gettrainerAppliedTraining?.trainingPostData;
  })
  console.log(appliedTraining)
  if(appliedTraining?.length>0){
    
  }

  
  const renderComponent = () => {
    switch (activeOption) {
      case "Applied":
        return <TrainerProposalApplied training={appliedTraining} />;
      case "Proposal":
        return <TrainerProposalRequest training={proposalData} />;
      default:
        return null;
    }
  };

  return (
    <div className="ProposalManagement">
      <div className="Post_Buttons">
        <Link to="/trainerDashboard/proposalmanagement/applied">
          <button style={{ marginRight: "10px" }} className={`Post_T ${activeOption === "Applied" ? "active" : ""}`}>
            Applied
          </button>
        </Link>
        <Link to="/trainerDashboard/proposalmanagement/proposalrequest">
          <button className={`Post_J ${activeOption === "Proposal" ? "active" : ""}`}>Proposal</button>
        </Link>
      </div>
      <div className="ProposalManagement">{renderComponent()}</div>
    </div>
  );
};

export default TrainerProposalManagement;
