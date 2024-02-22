import React from "react";
import "../../styles/TrainingResources.css";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import down from "../../assets/download 1.svg";

const resourceData = [
  "Fundamentals Of Full Stack Developer",
  "Rules of JavaScript",
  "Ways To Set Domain",
  "Fundamentals Of Full Stack Developer",
  "Ways To Set Domain",
  "Rules of JavaScript",
  "Ways To Set Domain",
  "Fundamentals Of Full Stack Developer",
  "Ways To Set Domain",
];

const resourceData1 = [
  "Fundamentals Of Full Stack Developer",
  "Rules of JavaScript",
  "Ways To Set Domain",
  "Fundamentals Of Full Stack Developer",
  "Ways To Set Domain",
  "Rules of JavaScript",
  "Ways To Set Domain",
  "Fundamentals Of Full Stack Developer",
  "Ways To Set Domain",
];

const TrainingResources = () => {
  const handleDownload = (url) => {
    // Create a new anchor element
    const anchor = document.createElement("a");
    // Set the href attribute to the resource URL
    anchor.href = url;
    // Specify that the anchor should trigger a download
    anchor.setAttribute("download", "");
    // Append the anchor to the body
    document.body.appendChild(anchor);
    // Click the anchor to start the download
    anchor.click();
    // Remove the anchor from the body
    document.body.removeChild(anchor);
  };

  return (
    <div className="TrainingResources">
      <div className="TrainingResources-breadCrumbs">
        <span className="TrainingResources-breadCrumbs1"> Dashboard</span>
        <span className="TrainingResources-breadCrumbs2">
          {" >  Training Resources"}
        </span>
      </div>
      <br />
      <br />
      <div className="TrainingResources-main_Content">
        <div className="TrainingResources-main_Content_details">
          <p>Training Program Name</p>
          <h3>Full Stack Developer</h3>
          <p>Training Topics & Subjects</p>
          <h2>Java, Js, Python, React Native</h2>
          <p>Program Status</p>
          <h2 style={{ fontSize: "10px" }}>
            Review & Update Program
            <br />
            Results
          </h2>
          <button>In Progress</button>
        </div>
        <div className="TrainingResources-child_Content">
          <p>Resources</p>
          <div
            style={{
              border: "1px solid #eeeeee",
              width: "98%",
              overflow: "auto",
              paddingTop: "10px",
            }}
          >
            <div className="TrainingResources-child_Content_details">
              {resourceData.map((resource, index) => (
                <h2 key={index}>
                  <a href="/images/myw3schoolsimage.jpg" download>
                    <img src={down} className="hoverr" alt="down-arrow" />
                  </a>
                  {resource}
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>{" "}
      <br />
      <div className="TrainingResources-main_Content">
        <div className="TrainingResources-main_Content_details">
          <p>Training Program Name</p>
          <h3>Full Stack Developer</h3>
          <p>Training Topics & Subjects</p>
          <h2>Java, Js, Python, React Native</h2>
          <p>Program Status</p>
          <h2 style={{ fontSize: "10px" }}>
            Review & Update Program
            <br />
            Results
          </h2>
          <button>completed</button>
        </div>
        <div className="TrainingResources-child_Content">
          <p>Resources</p>
          <div
            style={{
              border: "1px solid #eeeeee",
              width: "98%",
              overflow: "auto",
              paddingTop: "10px",
            }}
          >
            <div className="TrainingResources-child_Content_details">
              {resourceData1.map((resource, index) => (
                <h2 key={index}>
                  <img
                    src={down}
                    className="hoverr"
                    alt="down-arrow"
                    onClick={() => handleDownload(resource)}
                  />
                  {resource}
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingResources;
