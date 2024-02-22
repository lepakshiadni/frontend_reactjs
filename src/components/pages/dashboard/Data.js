import GridViewIcon from "@mui/icons-material/GridView";
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
    icon: (
      <HiOutlineViewGrid style={{ fontSize: "25px", marginRight: "10px" }} />
    ),
  },
  {
    name: "TrainerList",
    icon: <IoList style={{ fontSize: "25px", marginRight: "10px" }} />,
  },
  {
    name: "Post a Requirements",
    icon: (
      <FaRegPenToSquare style={{ fontSize: "25px", marginRight: "10px" }} />
    ),
  },
  {
    name: "Training Management",
    icon: <BsCardChecklist style={{ fontSize: "25px", marginRight: "10px" }} />,
  },
  {
    name: "Feed",
    icon: <BsCardChecklist style={{ fontSize: "25px", marginRight: "10px" }} />,
  },
  {
    name: "Messages",
    icon: (
      <MdOutlineMessage style={{ fontSize: "25px", marginRight: "10px" }} />
    ),
  },
  {
    name: "Proposal Management",
    icon: (
      <MdOutlineMessage style={{ fontSize: "25px", marginRight: "10px" }} />
    ),
  },
  {
    name: "Settings",
    icon: <SlSettings style={{ fontSize: "25px", marginRight: "10px" }} />,
  },
  {
    name: "Billing & Payments",
    icon: <SlSettings style={{ fontSize: "25px", marginRight: "10px" }} />,
  },
  {
    name: "Training Resource",
    icon: <GridViewIcon style={{ fontSize: "25px", marginRight: "10px" }} />,
  },
  {
    name: "Help & Support",
    icon: <BiHelpCircle style={{ fontSize: "25px", marginRight: "10px" }} />,
  },
  // {
  //   name: "Privacy & Security",
  //   icon: <TbLockSquare style={{fontSize:"25px", marginRight:"10px"}}  />,
  // },
];
