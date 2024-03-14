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
import { useNavigate, useParams } from "react-router-dom";
import Axios from 'axios'

const TrainerListProfile = () => {
  // console.log("sleceted trainer", selectedTrainer);
  const { id } = useParams()
  const navigate = useNavigate()
  // console.log('seleteTrainer', id)
  const [seletedUser, setSeletedUser] = useState(null)
  const [showPopup, setShowPopup] = useState(false)
  useEffect(() => {
    Axios.get(`http://44.211.80.23:4000/employer/getTrainerDetailsById/${id}`)
      .then((resp) => {
        setSeletedUser(resp.data?.trainerDetails)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])
  const handlehirepopup = () => {
    setShowPopup(true)
  }
  console.log('selectedUser', seletedUser)
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

  const handleTrainerList = () => {
    // navigate("/employerDashboard/trainerlist")
    window.history.back()
  }
  return (
    <div className="trainerListProfile">
      <div className="w-full flex items-center justify-start h-[70px] sticky top-0 bg-[#FFF] z-[1000]">
        <div className="flex items-center" onClick={handleTrainerList}>
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
            >
              <path
                d="M21 10.4286L1 10.4286M1 10.4286L9.57143 19M1 10.4286L9.57143 1.85714"
                stroke="#888888"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <button className="text-[#888] text-[16px] font-[400] pl-[10px]">
            Back
          </button>

        </div>
      </div>
      <section className="flex w-full">
        <section className="leftsideList w-6/12">
          <section className="min-h-[200px] h-auto" style={{ border: "1px solid #EEEEEE" }}>
            <div className="pb-3">

              {
                seletedUser?.basicInfo?.profileBanner ?
                  <img className="w-full h-[90px]" src={seletedUser?.basicInfo?.profileBanner} />
                  :
                  <div className="w-full h-[90px] bg-slate-300">
                    <span></span>
                  </div>
              }
              <div
                className="flex items-end relative ms-12 h-[100px] "
                style={{ top: "-20px" }}
              >
                {
                  seletedUser?.basicInfo?.profileImg ?
                    <img
                      style={{ borderRadius: "10px" }}
                      height="100px"
                      width="90px"
                      src={seletedUser?.basicInfo?.profileImg}
                      alt=""
                      className="absolute top-[0]"
                    />

                    :
                    <div className="flex justify-center items-center h-[100px] w-[90px] bg-slate-400 rounded-[10px] absolute top-0">
                      <span className="capitalize text-3xl">{seletedUser?.fullName[0]}</span>
                    </div>
                }

                <div className="absolute left-[120px]">
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "#2676C2",
                    }}
                  >
                    {seletedUser?.basicInfo?.firstName + seletedUser?.basicInfo?.lastName || seletedUser?.fullName}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#6A6A6A",
                    }}
                  >
                    {seletedUser?.basicInfo?.designation || "Not Available"}
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
                {seletedUser?.skills.map((val,index) => {
                  console.log(val.image)
                  return  <div className="flex mb-5" key={index}>
                  {/* <img
                    height="48px"
                    width="48px"
                    src={image}
                    alt='d'
                  /> */}
                  <img src={val.image} className="w-[48px] h-[48px]" alt="" />
                  <div className="w-full text-end">
                    <h6
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#6A6A6A",
                      }}
                    >{`${val.name} ${index + 10}%`}</h6>

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
                          width: rendered ? `${index + 10}%` : "0%",
                          background: "#2676C2",
                          height: "100%",
                          transition: "width 1s ease-in-out",
                        }}
                      />
                    </div>
                  </div>
                </div>
                })}
              </div>
            </div>
          </section>
          <div className="w-[full] flex justify-center items-center mt-[20px]">

            <button
              onClick={handlehirepopup}
              style={{
                padding: "5px 81px",
                backgroundColor: "#2676C2",
                color: "#FFF",
                fontSize: "20px",
                fontWeight: "500",
                borderRadius: "10px",
              }}
            >
              Hire
            </button>
          </div>
        </section>
        <TrainerPopUp trigger={showPopup} setTrigger={setShowPopup} seletedUser={seletedUser} />
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
                About {seletedUser?.basicInfo?.firstName || seletedUser?.fullName}
              </h3>
              <div className="flex items-center">

                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
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
              {seletedUser?.basicInfo?.aboutYou}
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
              {seletedUser?.basicInfo?.objective}
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
              {seletedUser?.certificateDetails?.map(({ certification, certificateHead, certificateUrl, certificationDescription, institution }, index) => (
                <div key={index}>
                  <h6
                    style={{
                      fontSize: "14px",
                      color: "#535353",
                      fontWeight: "500",
                      marginTop: "10px",
                    }}
                  >
                    {certificateHead}
                  </h6>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#535353",
                      fontWeight: "400",
                      marginTop: "20px",
                    }}
                  >
                    {certificationDescription}
                  </p>
                  
                  {certificateUrl.toLowerCase().endsWith('.pdf') ? (
                    <iframe
                      title="Certificate"
                      style={{ width: '100%', height: '417px' }}
                      className="mt-7 h-[221px] w-[500px]" src={certificateUrl} alt="PDF Certificate" />
                  ) : (
                    <img className="mt-[20px]" src={certificateUrl} alt="Image Certificate" />
                  )}
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
