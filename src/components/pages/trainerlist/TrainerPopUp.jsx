import React, { useState } from "react";
import ProfileImg from "../../assets/profileTrainer.png";
import Rating from "@mui/material/Rating";
import { Avatar, Stack, styled } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Slider from "@mui/material/Slider";
import PythonImg from "../../assets/python.png";
import AdobeImg from "../../assets/figma.png";
import FigmaImg from "../../assets/figma.png";
import ReactImg from "../../assets/react.png";
import CloseIcon from "@mui/icons-material/Close";
import "../../styles/TrainersList.css";

const CustomSlider = styled(Slider)(({ theme }) => ({
  color: "#2676c2",
  "& .MuiSlider-rail": {
    backgroundColor: "#2676c2",
  },
  "& .MuiSlider-track": {
    transition: "background-color 0.3s ease", // Add transition for color change
  },
  "& .MuiSlider-thumb": {
    display: "none", // Hide the slider button
  },
  "&:hover .MuiSlider-track": {
    backgroundColor: "#585858", // Change color on hover
  },
}));

function TrainerPopUp(props) {
  const { trigger, setTrigger } = props;
  // const [active,setActive] = useState(false)
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return trigger ? (
    <>
      <div className=" popup w-full">
        <div className="main1 w-6/12 ml-[70px] h-screen bg-white rounded-[20px] border">
          <div className="flex">
            <div style={{ position: "relative", bottom: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontSize: "18px", fontWeight: "500px" }}>
                  About Trainers
                </p>
                <CloseIcon
                  sx={{
                    position: "relative",
                    left: "448px",
                    fontSize: "xx-large",
                    color: "#2676c2",
                    cursor: "pointer",
                  }}
                  onClick={() => setTrigger(false)}
                />
              </div>
              <div className="name">
                <img
                  src={ProfileImg}
                  alt=""
                  width={93.53}
                  height={109.94}
                  style={{ border: "none", outline: "none" }}
                />
                <div className="name-details">
                  <p
                    style={{
                      color: "#2676c2",
                      fontSize: "20px",
                      fontWeight: "500px",
                    }}
                  >
                    Kowshik
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "400px",
                      color: "rgba(106, 106, 106, 1)",
                    }}
                  >
                    UI UX Developer
                  </p>
                </div>
              </div>
              <div className="downbox">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: "400px",
                      color: "rgba(106, 106, 106, 1)",
                    }}
                  >
                    4/5
                  </p>
                  <Rating
                    name="size-large"
                    defaultValue={3.6}
                    id="rating"
                    sx={{ fontSize: "45px" }}
                    precision={0.1}
                  />
                </div>
              </div>
            </div>
            <div className="sidebox">
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Post requirements{" "}
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "500px",
                    color: "#2676c2",
                  }}
                >
                  Create Post +
                </p>
              </p>{" "}
              <br />
              <div className="radios flex flex-col">
                <label htmlFor="">
                  <input type="radio" name="slctone" value={"UIUX Training"} />
                  UIUX Training
                </label>
                <label htmlFor="">
                  <input type="radio" name="slctone" value={"HR Training"} />
                  HR Training
                </label>
                <label htmlFor="">
                  <input type="radio" name="slctone" value={"UIUX Training"} />
                  Product Manager Training
                </label>
                <label htmlFor="">
                  <input type="radio" name="slctone" value={"UIUX Training"} />
                  UIUX Training
                </label>
                <label htmlFor="">
                  <input type="radio" name="slctone" value={"HR Training"} />
                  HR Training
                </label>
                <label htmlFor="">
                  <input type="radio" name="slctone" value={"UIUX Training"} />
                  Product Manager Training
                </label>
                <label htmlFor="">
                  <input type="radio" name="slctone" value={"UIUX Training"} />
                  UIUX Training
                </label>
                <label htmlFor="">
                  <input type="radio" name="slctone" value={"HR Training"} />
                  HR Training
                </label>
                <label htmlFor="">
                  <input type="radio" name="slctone" value={"UIUX Training"} />
                  Product Manager Training
                </label>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    paddingRight: "10px",
                    //   paddingTop: "20px",
                  }}
                >
                  <button className="buttonn">Send request</button>
                </div>
              </div>
            </div>{" "}
            <br />
          </div>
        </div>
        {/* <div className="mainpopup w-6/12 h-auto min-h-[600px] bg-white rounded-[20px]">
          <div style={{ display: "flex" }}>
            <div style={{ position: "relative", bottom: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontSize: "18px", fontWeight: "500px" }}>
                  About Trainers
                </p>
                <CloseIcon
                  sx={{
                    position: "relative",
                    left: "448px",
                    fontSize: "xx-large",
                    color: "#2676c2",
                    cursor: "pointer",
                  }}
                  onClick={() => setTrigger(false)}
                />
              </div>
              <div className="popupname">
                <img
                  src={ProfileImg}
                  alt=""
                  width={93.53}
                  height={109.94}
                  style={{ border: "none", outline: "none" }}
                />
                <div className="popupname-details">
                  <p
                    style={{
                      color: "#2676c2",
                      fontSize: "20px",
                      fontWeight: "500px",
                    }}
                  >
                    Kowshik
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "400px",
                      color: "rgba(106, 106, 106, 1)",
                    }}
                  >
                    UI UX Developer
                  </p>
                </div>
              </div>
              <div className="popupdownbox">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: "400px",
                      color: "rgba(106, 106, 106, 1)",
                    }}
                  >
                    4/5
                  </p>
                  <Rating
                    name="size-large"
                    defaultValue={4}
                    id="rating"
                    sx={{ fontSize: "45px" }}
                  />
                </div>
              </div>
            </div>
            <div className="sideboxpopup">
              <Stack direction={"column"} spacing={3}>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "rgba(83, 83, 83, 1)",
                  }}
                >
                  Skills
                </p>
                <Stack direction={"row"} spacing={2}>
                  <img src={ReactImg} alt="" width={48} height={47} />{" "}
                  <CustomSlider
                    // aria-label="Temperature"
                    defaultValue={50}
                    // getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={5}
                    marks={false}
                    min={10}
                    max={100}
                    sx={{
                      width: "333px",
                      height: "7px",
                      color: "rgba(232, 232, 232, 1)",
                    }}
                  />
                </Stack>
                <Stack direction={"row"} spacing={2}>
                  <img src={PythonImg} alt="" width={48} height={47} />
                  <CustomSlider
                    // aria-label="Temperature"
                    defaultValue={""}
                    // getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={5}
                    marks={false}
                    min={10}
                    max={100}
                    sx={{
                      width: "333px",
                      height: "7px",
                      color: "rgba(232, 232, 232, 1)",
                    }}
                  />
                </Stack>
                <Stack direction={"row"} spacing={2}>
                  <img src={FigmaImg} alt="" width={48} height={47} />
                  <CustomSlider
                    // aria-label="Temperature"
                    defaultValue={60}
                    // getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={5}
                    marks={false}
                    min={10}
                    max={100}
                    sx={{
                      width: "333px",
                      height: "7px",
                      color: "rgba(232, 232, 232, 1)",
                    }}
                  />
                </Stack>
                <Stack direction={"row"} spacing={2}>
                  <img src={AdobeImg} alt="" width={48} height={47} />
                  <CustomSlider
                    // aria-label="Temperature"
                    defaultValue={80}
                    // getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={5}
                    marks={false}
                    min={10}
                    max={100}
                    sx={{
                      width: "333px",
                      height: "7px",
                      color: "rgba(232, 232, 232, 1)",
                    }}
                  />
                </Stack>
              </Stack>
            </div>{" "}
            <br />
          </div>
          <div className="popupbottom-boxes">
            <div className="popupbox1">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "320px",
                }}
              >
                <KeyboardBackspaceIcon id="foricon1" /> <Avatar src="" />
                <KeyboardBackspaceIcon id="foricon2" />
              </div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "500px",
                  color: "rgba(51, 51, 51, 1)",
                }}
              >
                William Does
              </p>
              <p
                className="box1-content-down"
                style={{
                  fontSize: "12px",
                  fontWeight: "500px",
                  color: "rgba(83, 83, 83, 1)",
                }}
              >
                Tecnoz
              </p>
              <div
                className="box1-content-down"
                style={{
                  fontSize: "12px",
                  color: "rgba(83, 83, 83, 1)",
                  fontWeight: "400px",
                  textAlign: "center",
                }}
              >
                One of the best trainer !
              </div>
              <div
                className="box1-content-down"
                style={{
                  fontSize: "12px",
                  color: "rgba(83, 83, 83, 1)",
                  fontWeight: "400px",
                  textAlign: "center",
                }}
              >
                Perfect person to teach they know lot of things
              </div>
              <Rating name="size-medium" defaultValue={2} />
            </div>
            <div className="popupbox2">
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Post requirements{" "}
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "500px",
                    color: "#2676c2",
                  }}
                >
                  Create Post +
                </p>
              </p>{" "}
              <br />
              <div className="popupradios">
                <label htmlFor="">
                  <input type="radio" name="slctone" value={"UIUX Training"} />
                  UIUX Training
                </label>
                <label htmlFor="">
                  <input type="radio" name="slctone" value={"HR Training"} />
                  HR Training
                </label>
                <label htmlFor="">
                  <input type="radio" name="slctone" value={"UIUX Training"} />
                  Product Manager Training
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingRight: "10px",
                  paddingTop: "20px",
                }}
              >
                <button className="popupbuttonn">Send request</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  ) : null;
}

export default TrainerPopUp;
