import React, { useState } from "react";
import "../styles/TrainerApplyPopup.css";
 
function TrainerApplyPopup(props) {
  const { trigger, setTrigger,selectedPost } = props;
  // console.log(trigger)
  console.log('selected', selectedPost);
  const [isActiveOnline, setActiveOnline] = useState(false);
  const [isActiveOffline, setActiveOffline] = useState(false);
  const [isActiveButton1, setIsActiveButton1] = useState(false);
  const [isActiveButton2, setIsActiveButton2] = useState(false);
  const [isActiveButton3, setIsActiveButton3] = useState(false);
  const toggleButton1 = () => {
    setIsActiveButton1(!isActiveButton1);
    setIsActiveButton2(false);
    setIsActiveButton3(false);
  };
  const toggleButton2 = () => {
    setIsActiveButton2(!isActiveButton2);
    setIsActiveButton1(false);
    setIsActiveButton3(false);
  };
  const toggleButton3 = () => {
    setIsActiveButton3(!isActiveButton3);
    setIsActiveButton1(false);
    setIsActiveButton2(false);
  };
  const toggleActiveOnline = () => {
    setActiveOnline(!isActiveOnline);
    setActiveOffline(false)
  };
  const toggleActiveOffline = () => {
    setActiveOffline(!isActiveOffline);
    setActiveOnline(false)
  };
  return trigger ? (
    <>
      <div className="TrainerApplyPopup h-screen flex justify-center items-center">
        <div className=" w-6/12 m-auto h-auto bg-white rounded-[20px]">
          <div
            className=" mr-[10px] mt-[10px] "
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <button
              onClick={() => {
                setTrigger(false);
              }}
              className="close font-[400] text-[20px] pr-[10px] "
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="#2676C2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="close">
                  <path
                    id="Vector"
                    d="M8.48542 8.48528L16.9707 16.9706M16.9707 16.9706L25.456 25.4558M16.9707 16.9706L8.48542 25.4558M16.9707 16.9706L25.456 8.48528"
                    stroke="#2676C2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
 
          <div className="w-full flex m-[10px]">
            <div className="w-4/12 ml-[10px]">
              <div className="box1 pt-[10px] pl-[10px]">
                <div>
                  <p>Comapny Name</p>
                  <p style={{ color: "#2676c2" }} className="same">
                    {selectedPost?.company}
                  </p>
                </div>
                <div>
                  <p>Training Program Name </p>
                  <p style={{ color: "#2676c2" }} className="same">
                    Fullstack Developer
                  </p>
                </div>
                <div>
                  <p>Training Topics & Subjects</p>
                  <p className="same">Java, Js, Python, React Native</p>
                </div>
                <div>
                  <p>Type Of Training</p>
                  <p className="same">Corporate</p>
                </div>
                <div>
                  <p>Duration Of Training</p>
                  <p className="same">10 DAY'S</p>
                </div>
                <div className="flex">
                  <div>
                    <p>START DATE</p>
                    <p className="same">09/09/19</p>
                  </div>
                  <div>
                    <p>END DATE</p>
                    <p className="same">09/09/21</p>
                  </div>
                </div>
                <div>
                  <p>Wanted Skills</p>
                  <div className="flex">
                    <div className="same">
                      <p>Python</p>
                      <p>Bootstrap</p>
                      <p>Django</p>
                      <p>Java</p>
                    </div>
                    <div className="same">
                      <p>Jquery</p>
                      <p>Javascript</p>
                      <p>Angular</p>
                      <p>React</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-7/12 ml-[10px]">
              <div direction={"column"} spacing={1}>
                <div className="box2 pt-[10px] pl-[10px] flex flex-col gap-1">
                  <p>Budget</p>
                  <p className="same" style={{ color: "#2676c2" }}>
                    10000 - 20000
                  </p>
                  <p>Mode of Training</p>
                  <p className="same" style={{ color: "#2676c2" }}>
                    Offline
                  </p>
                  <p>Description</p>
                  <p
                    className="scrollparagraph"
                    style={{
                      border: "1px solid #EEEEEE",
                      borderRadius: "5px",
                      color: "#888888",
                      fontSize: "10px",
                      height: "112px",
                      // height:"auto",
                      // width: "385px",
                      overflow: "auto",
                      background: "#EEEEEE",
                      padding: "5px",
                    }}
                  >
                    <p>
                      We are looking for provide a upskill for zipro technology
                      employer , particlarily looking for full end process,
                      anybody interest We are looking for provide a upskill for
                      zipro technology employer , particlarily looking for full
                      end process, anybody We are looking for provide a upskill
                      for zipro technology employer , particlarily looking for
                      full end process, anybody We are looking for provide a
                      upskill for zipro technology employer , particlarily
                      looking for full end process, anybody
                    </p>
                    <p>
                      We are looking for provide a upskill for zipro technology
                      employer , particlarily looking for full end process,
                      anybody interest We are looking for provide a upskill for
                      zipro technology employer , particlarily looking for full
                      end process, anybody We are looking for provide a upskill
                      for zipro technology employer , particlarily looking for
                      full end process, anybody We are looking for provide a
                      upskill for zipro technology employer , particlarily
                      looking for full end process, anybody
                    </p>
                  </p>
                  <p>TOC</p>
                  <div className="flex gap-3 items-center">
                    <div>
                      <p
                        className="same "
                        style={{ display: "inline-flex", alignItems: "center" }}
                      >
                        Training for Juniors
                      </p>
                    </div>
                    <div className=" cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="16"
                        viewBox="0 0 11 16"
                        fill="none"
                      >
                        <path
                          d="M1 14.3333H9.88889M5.44444 1V11.3704M5.44444 11.3704L9.14815 7.66667M5.44444 11.3704L1.74074 7.66667"
                          stroke="#2676C2"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="box3 pt-[10px] pl-[10px] ">
                  <p>your Available Dates</p>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      fontSize: "11px",
                      gap: "5px",
                      color: "#888888",
                    }}
                  >
                    <button
                      className={isActiveButton1 ? 'activebutton' : 'dates1'}
                      onClick={toggleButton1}
                    >
                      01-01-2020
                    </button>
                    <button
                     className={isActiveButton2 ? 'activebutton' : 'dates2'}
                     onClick={toggleButton2}
                    >
                      01-01-2020
                    </button>
                    <button
                      className={isActiveButton3 ? 'activebutton' : 'dates3'}
                      onClick={toggleButton3}
                    >
                      01-01-2020
                    </button>
                  </p>
 
                  <p className="mt-[20px]">Mode of Training</p>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      fontSize: "11px",
                      gap: "5px",
                      color: "#888888",
                    }}
                  >
                    <button
        className={isActiveOffline ? 'activebutton' : 'dates1'}
        onClick={toggleActiveOffline}
      >
        Offline
      </button>
      <button
        className={isActiveOnline ? 'activebutton' : 'dates1'}
        onClick={toggleActiveOnline}
      >
        Online
      </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mr-[25px] pb-[15px] "
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <button
              style={{
                width: "183px",
                height: "38px",
                borderRadius: "8px",
                background: "#2676c2",
                outline: "none",
                border: "none",
                color: "#FFFFFF",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  ) : null;
}
 
export default TrainerApplyPopup;