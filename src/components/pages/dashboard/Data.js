import GridViewIcon from "@mui/icons-material/GridView";
import Chat from "../messages/Chat";
import PostRequriement from '../postrequirements/Requirements'
import TrainingResources from "../trainingresourecs/TrainingResources";
import TrainersList from "../trainerlist/TrainersList"
import MyTrainingPrograms from "../mytrainingprogram/MyTrainingProgram";
import { IoList } from "react-icons/io5";
import { HiOutlineViewGrid } from "react-icons/hi";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { BsCardChecklist } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { SlSettings } from "react-icons/sl";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { TbLockSquare } from "react-icons/tb";
export const option = [
  {
    name: "Dashboard",
    icon: <HiOutlineViewGrid style={{fontSize:"25px", marginRight:"10px"}} />,
    show:<Chat/>
  },
  {
    name: "TrainerList",
    icon: <IoList style={{fontSize:"25px", marginRight:"10px"}}  />,
    show:<TrainersList/>
  },
  {
    name: "Post a Requirements",
    icon: <FaRegPenToSquare style={{fontSize:"25px", marginRight:"10px"}} />,
    show:<PostRequriement/>
  },
  {
    name: "My Training Program’s",
    icon: <BsCardChecklist style={{fontSize:"25px", marginRight:"10px"}}  />,
    show:<MyTrainingPrograms/>
  },
  {
    name: "Trainers Directory",
    icon: <BsCardChecklist style={{fontSize:"25px", marginRight:"10px"}} />,
    show:<Chat/>
  },
  {
    name: "Messages",
    icon: <MdOutlineMessage style={{fontSize:"25px", marginRight:"10px"}} />,
    show:<Chat/>
  },
  {
    name: "Proposal Management",
    icon: <MdOutlineMessage style={{fontSize:"25px", marginRight:"10px"}} />,
    show:<Chat/>
  },
  {
    name: "Settings",
    icon: <SlSettings style={{fontSize:"25px", marginRight:"10px"}} />,
    show:<Chat/>
  },
  {
    name: "Billing & Payments",
    icon: <SlSettings style={{fontSize:"25px", marginRight:"10px"}}/>,
    show:<Chat/>
  },
  {
    name: "Training Analytics",
    icon: <TbBrandGoogleAnalytics style={{fontSize:"25px", marginRight:"10px"}}   />,
    show:<Chat/>
  },
  {
    name: "Training Resource",
    icon: <GridViewIcon style={{fontSize:"25px", marginRight:"10px"}} />,
    show:<TrainingResources/>
  },
  {
    name: "Help & Support",
    icon: <BiHelpCircle style={{fontSize:"25px", marginRight:"10px"}}  />,
    show:<Chat/>
  },
  {
    name: "Privacy & Security",
    icon: <TbLockSquare style={{fontSize:"25px", marginRight:"10px"}}  />,
    show:<Chat/>
  },
];