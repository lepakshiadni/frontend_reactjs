import { useState, useEffect, useRef } from "react";
import Banner from "../../assets/Profile Banner.png";
import ProfileTrainer from "../../assets/profileTrainer.png";
import ReactImg from "../../assets/react.png";
import PythonImg from "../../assets/python.png";
import FigmaImg from "../../assets/figma.png";
import AdobImg from "../../assets/adobe.png";
import Certificate from "../../assets/certifyImage.png";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "../../styles/TrainerProfile.css";
import TrainerPopUp from "./TrainerPopUp";

const TrainerListProfile = ({ selectedTrainer }) => {
  console.log("sleceted trainer", selectedTrainer);
  const [showPopup, setShowPopup] = useState(false);
  const handlehirepopup = () => {
    setShowPopup(true);
  };
  const trainerData = {
    id: 1,
    name: "Kowshik",
    designation: "UI UX Developer",
    about:
      "A passionate and experienced trainer with expertise in UI/UX design and frontend development.",
    skillDescription:
      "I am Kowshik, a dedicated UI/ UX Developer and Trainer.With a keen eye for design and a commitment to education, I am on a mission to share my expertise with aspiring designers.",
    skills: [
      { name: "React", imgSrc: ReactImg, percentage: 100 },
      { name: "Python", imgSrc: PythonImg, percentage: 50 },
      { name: "Adobe", imgSrc: AdobImg, percentage: 40 },
      { name: "Figma", imgSrc: FigmaImg, percentage: 70 },
    ],
    certifications: [
      {
        title: "Frontend Development Masterclass",
        description:
          "Completion of a comprehensive masterclass covering the latest frontend development techniques and best practices. Learn how to build responsive and interactive user interfaces using cutting-edge technologies.",
        image: Certificate,
      },
      {
        title: "Another Certification",
        description: "Description for another certification.",
        image: Certificate,
      },
    ],
    reviews: [
      {
        user: "Wills",
        profileImage: ProfileTrainer,
        companyName: "techzoo",
        rating: 4,
        comment:
          "One of the best trainers! Perfect person to teach, they know all the things.",
      },
      {
        user: "Sarah",
        profileImage: ProfileTrainer,
        companyName: "sarah_doe",
        rating: 3,
        comment:
          "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
      },
      {
        user: "Sarah",
        profileImage: ProfileTrainer,
        companyName: "sarah_doe",
        rating: 1,
        comment:
          "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
      },
      {
        user: "Sarah",
        profileImage: ProfileTrainer,
        companyName: "sarah_doe",
        rating: 5,
        comment:
          "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
      },
      {
        user: "Sarah",
        profileImage: ProfileTrainer,
        companyName: "sarah_doe",
        rating: 5,
        comment:
          "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
      },
    ],
    calculateAverageRating: function () {
      let totalRating = 0;
      const numberOfUsers = this.reviews.length;

      this.reviews.forEach((review) => {
        totalRating += review.rating;
      });

      this.averageRating = numberOfUsers > 0 ? totalRating / numberOfUsers : 0;
    },
  };
  trainerData.calculateAverageRating();

  const [skillValues, setSkillValues] = useState(
    trainerData.skills.reduce((acc, skill) => {
      acc[skill.name] = skill.percentage;
      return acc;
    }, {})
  );
  const [rendered, setRendered] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRendered(true);

      setSkillValues((prevValues) => ({
        ...prevValues,
      }));
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  const [open, setOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  let menuRef = useRef();

  const handleIconClick = () => {
    setIsSelected(!isSelected);
  };
  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="trainerListProfile relative top-9">
      <section className="flex w-full">
        <section className="leftsideList w-6/12">
          <section
            className="min-h-[230px] h-auto"
            style={{ border: "1px solid #EEEEEE" }}
          >
            <div className="pb-3">
              <img height="80px" src={Banner} alt="" />
              <div
                className="flex items-end relative ms-12"
                style={{ top: "-20px" }}
              >
                <img
                  style={{ borderRadius: "10px" }}
                  height="100px"
                  width="90px"
                  src={ProfileTrainer}
                  alt=""
                />
                <div className="ms-5">
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "#2676C2",
                    }}
                  >
                    {trainerData.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#6A6A6A",
                    }}
                  >
                    {trainerData.designation}
                  </p>

                  <Rating
                    name="half-rating-read"
                    max={5}
                    icon={<StarIcon sx={{ color: "#FFDE30", fontSize: 25 }} />}
                    emptyIcon={
                      <StarBorderIcon sx={{ fontSize: 25, color: "#FFDE30" }} />
                    }
                    precision={0.1}
                    defaultValue={trainerData.averageRating}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </section>
          <section style={{ border: "1px solid #EEEEEE", marginTop: "20px" }}>
            <div style={{ padding: "18px 14px" }}>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#535353",
                }}
              >
                Skills
              </h3>
              <div className="mt-2">
                {trainerData.skills.map((skill, index) => (
                  <div className="flex mb-5" key={index}>
                    <img
                      height="48px"
                      width="48px"
                      src={skill.imgSrc}
                      alt={skill.name}
                    />
                    <div className="w-full text-end">
                      <h6
                        style={{
                          fontSize: "16px",
                          fontWeight: "400",
                          color: "#6A6A6A",
                        }}
                      >{`${skillValues[skill.name]}%`}</h6>

                      <div
                        style={{
                          background: "#ddd",
                          borderRadius: "5px",
                          height: "8px",
                        }}
                      >
                        <div
                          className="w-full rounded-[5px]"
                          style={{
                            width: rendered ? `${skill.percentage}%` : "0%",
                            background: "#2676C2",
                            height: "100%",
                            transition: "width 1s ease-in-out",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <button
            onClick={handlehirepopup}
            style={{
              padding: "5px 81px",
              backgroundColor: "#2676C2",
              color: "#FFF",
              fontSize: "20px",
              fontWeight: "500",
              marginTop: "30px",
              borderRadius: "10px",
              marginLeft: "116px",
            }}
          >
            Hire
          </button>
        </section>
        <TrainerPopUp trigger={showPopup} setTrigger={setShowPopup} />
        {/* <TrainerPopUp isActive={isActive} onToggle={handleToggle}/> */}
        <section
          className="rightsideList w-6/12"
          style={{ border: "1px solid #EEEEEE", marginLeft: "20px" }}
        >
          <div className="p-5">
            <div className="flex items-center justify-between">
              <h3
                style={{
                  color: "#232323",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                About {trainerData.name}
              </h3>
              <div className="flex items-center">
                <div className="inst" onClick={handleIconClick}>
                  {isSelected ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 14 18"
                      fill="none"
                      onClick={() => handleIconClick(true)}
                    >
                      <path
                        d="M0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H12C12.55 0 13.0208 0.195833 13.4125 0.5875C13.8042 0.979167 14 1.45 14 2V18L7 15L0 18Z"
                        fill="#2676C2"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      onClick={() => handleIconClick(false)}
                    >
                      <path
                        d="M4.16699 17.5V4.16667C4.16699 3.70833 4.33019 3.31597 4.65658 2.98958C4.98296 2.66319 5.37533 2.5 5.83366 2.5H14.167C14.6253 2.5 15.0177 2.66319 15.3441 2.98958C15.6705 3.31597 15.8337 3.70833 15.8337 4.16667V17.5L10.0003 15L4.16699 17.5ZM5.83366 14.9583L10.0003 13.1667L14.167 14.9583V4.16667H5.83366V14.9583Z"
                        fill="#8D8D8D"
                        className="icon-path"
                      />
                    </svg>
                  )}
                </div>

                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    marginLeft: "50px",
                  }}
                >
                  <div
                    ref={menuRef}
                    onClick={() => {
                      setOpen(!open);
                    }}
                    style={{
                      cursor: "pointer",
                      fontSize: "25px",
                      fontWeight: "bolder",
                      color: "gray",
                    }}
                  >
                    ⋮
                  </div>
                  {open && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        right: 0,
                        background: "white",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        zIndex: 1,
                        width: "100px",
                      }}
                    >
                      <div
                        className="option"
                        style={{
                          padding: "5px",
                          cursor: "pointer",
                          fontSize: "12px",
                        }}
                      >
                        Connect
                      </div>
                      <div
                        className="option"
                        style={{
                          padding: "5px",
                          cursor: "pointer",
                          fontSize: "12px",
                        }}
                      >
                        Not Connect
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <h3
              style={{
                color: "#535353",
                fontSize: "14px",
                fontWeight: "500",
                marginTop: "20px",
              }}
            >
              {trainerData.about}
            </h3>
            <p
              style={{
                color: "#535353",
                fontSize: "14px",
                fontWeight: "400",
                marginTop: "20px",
              }}
            >
              {" "}
              {trainerData.skillDescription}
            </p>
            <div>
              <h6
                style={{
                  fontSize: "16px",
                  color: "#232323",
                  fontWeight: "500",
                  marginTop: "20px",
                }}
              >
                Certifications
              </h6>
              {trainerData.certifications.map((certification, index) => (
                <div key={index}>
                  <h6
                    style={{
                      fontSize: "14px",
                      color: "#535353",
                      fontWeight: "500",
                      marginTop: "10px",
                    }}
                  >
                    {certification.title}
                  </h6>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#535353",
                      fontWeight: "400",
                      marginTop: "20px",
                    }}
                  >
                    {certification.description}
                  </p>
                  <img
                    className="mt-7"
                    height="221px"
                    width="284px"
                    src={certification.image}
                    alt="img"
                  />
                  <hr className="m-3" />
                </div>
              ))}
            </div>
          </div>
          <hr className="mt-3 mb-2" />
          <div className="p-5">
            <h3
              style={{
                fontSize: "16px",
                color: "#232323",
                fontWeight: "500",
                marginBottom: "40px",
              }}
            >
              Feedback & Reviews
            </h3>
            {trainerData.reviews
              .slice(0, showAllReviews ? undefined : 2)
              .map((review, index) => (
                <div className="flex items-start" key={index}>
                  <img
                    style={{
                      borderRadius: "50px",
                      height: "50px",
                      width: "50px",
                      overflow: "hidden",
                    }}
                    src={review.profileImage}
                    alt=""
                  />
                  <div className="ms-3">
                    <h6
                      style={{
                        fontSize: "16px",
                        color: "#232323",
                        fontWeight: "400",
                      }}
                    >
                      {review.user}
                    </h6>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#535353",
                        fontWeight: "500",
                      }}
                    >
                      {review.companyName}
                    </p>
                    <span>
                      <Rating
                        name="half-rating-read"
                        max={5}
                        icon={<StarIcon style={{ color: "#FFDE30" }} />}
                        emptyIcon={
                          <StarBorderIcon style={{ color: "#FFDE30" }} />
                        }
                        precision={0.1}
                        defaultValue={review.rating}
                        readOnly
                      />
                    </span>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#535353",
                        fontWeight: "400",
                      }}
                    >
                      {review.comment}
                    </p>
                    <hr className="mt-4 mb-4" />
                  </div>
                </div>
              ))}
            {trainerData.reviews.length > 2 && (
              <h6
                style={{
                  color: "#2676C2",
                  fontSize: "16px",
                  fontWeight: "500",
                  cursor: "pointer",
                  textAlign: "end",
                }}
                onClick={() => setShowAllReviews(!showAllReviews)}
              >
                {showAllReviews ? "Less feedback" : "More feedback"}
              </h6>
            )}
          </div>
        </section>
      </section>
    </div>
  );
};

export default TrainerListProfile;
