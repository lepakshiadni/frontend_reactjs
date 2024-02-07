import GridViewIcon from "@mui/icons-material/GridView";
import Chat from "../messages/Chat";
import ProposalMangement from "../proposalMangement/TrainerProposalMangement";
import TrainerSettings from "../settings/TrainerSettings";
import TrainerBillPayments from "../billpayments/TrainerBillPayments";
import MyTrainingPrograms from './../mytrainingprogram/MyTrainingProgram';
import TrainerHelpSupport from "../help&support/TrainerHelpSupport";
import TrainerMyTrainers from "../mytrainings/TrainerMyTrainngs.jsx";
import Feed from '../feed/Feed.jsx';
import { HiOutlineViewGrid } from "react-icons/hi";
import { MdOutlineMessage } from "react-icons/md";
import { BsCardChecklist } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { SlSettings } from "react-icons/sl";
import { MdDynamicFeed } from "react-icons/md";
import TrainersList from "../trainerlist/TrainersList.js";



  export  const option = [
    {
      name: "Dashboard",
      icon: <HiOutlineViewGrid style={{fontSize:"25px", marginRight:"10px"}} />,
      show:""
    },
    {
      name: "Feed",
      icon: <MdDynamicFeed style={{fontSize:"25px", marginRight:"10px"}} />,
      show:<Feed/>
    },
    {
      name: "MyTrainings",
      icon: <BsCardChecklist style={{fontSize:"25px", marginRight:"10px"}}/>,
      show:<TrainerMyTrainers/>
    },
    {
      name: "Messages",
      icon: <MdOutlineMessage style={{fontSize:"25px", marginRight:"10px"}} />,
      show:<Chat/>
    },
    {
      name: "ProposalManagement",
      icon: <MdOutlineMessage style={{fontSize:"25px", marginRight:"10px"}} />,
      show:<ProposalMangement/>
    },
    {
      name: "Settings",
      icon: <SlSettings style={{fontSize:"25px", marginRight:"10px"}} />,
      show:<TrainerSettings/>
    },
    {
      name: "BillingPayments",
      icon: <SlSettings style={{fontSize:"25px", marginRight:"10px"}} />,
      show:<TrainersList/>
    },
    {
      name: "HelpSupport",
      icon: <GridViewIcon style={{fontSize:"25px", marginRight:"10px"}} />,
      show:<TrainerHelpSupport/>
    },
  ];