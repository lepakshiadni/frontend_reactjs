import React, { useState, useEffect } from "react";
import "../../styles/TrainerProfile.css";
import Edit from "../../assets/edit.svg";
import Favi from "../../assets/favi.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TrainerHeader from "../../header&footer/TrainerHeader";
import { trainerDetails } from '../../../redux/action/trainer.action'
import { getTrainerCreatePost } from '../../../redux/action/trainercreatepost.action'
import timesago from "timesago";
const TrainerProfile = () => {
  const dispatch = useDispatch()
  const [showAll, setShowAll] = useState(false);
  const [showAllCert, setShowAllCert] = useState(false);
  const [showAllActivities, setShowAllActivities] = useState(false);

  // const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    dispatch(trainerDetails())
    dispatch(getTrainerCreatePost())
  }, [dispatch]);
  const user = useSelector(({ trainerSignUp }) => {
    return trainerSignUp?.trainerDetails?.trainerDetails;
  });

  const trainerCreatePostDetails = useSelector(({ trainerCreatePost }) => {
    return trainerCreatePost?.trainerCreatePostDetails
  })

  console.log('trainercreatePostDetails', trainerCreatePostDetails)


  console.log("user", user);

  const notificationMessages = [
    {
      image: "https://via.placeholder.com/40x40",
      name: "Mindstay Technologies Accept Request",
      time: "10 min ago",
      accept: "Accept",
      denied: "Denied",
    },
    { image: "", name: "Kowshik Viewed Your Application", time: "30 min ago" },
    {
      image: Favi,
      name: "Mindstay Technologies Accept Request",
      time: "10 min ago",
      accept: "Accept",
      denied: "Denied",
    },
    { image: "", name: "Kowshik Viewed Your Application", time: "30 min ago" },
    {
      image: "https://via.placeholder.com/40x40",
      name: "Mindstay Technologies Accept Request",
      time: "10 min ago",
      accept: "Accept",
      denied: "Denied",
    },
    {
      image: Favi,
      name: "you updated your application",
      time: "30 min ago",
    },
    {
      image: Favi,
      name: "eleesa Accepted Your Application ",
      time: "30 min ago",
    },
    {
      image: "https://via.placeholder.com/40x40",
      name: "Mindstay Technologies Accept Request",
      time: "10 min ago",
      accept: "Accept",
      denied: "Denied",
    },
  ];
  const visibleNotifications = showAll
    ? notificationMessages
    : notificationMessages.slice(-4);

  const handleToggle = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };
  const toggleShowAllExp = () => {
    setShowAllCert(!showAllCert);
  };
  const toggleShowAllActivities = () => {
    setShowAllActivities(!showAllActivities);
  };

  const handleEditProfile = async () => {
    // const profileEditPath = routingProfileEdit();
    await navigate("/trainerprofile/trainerProfileEdit"); // Navigate to TrainerProfileEdit route
  };
  const goToConnections = () => {
    navigate("/trainerprofile/connections");
  };
  return (
    <>
      <TrainerHeader />
      <div className="w-full sticky z-50 top-[0px] left-[60px]  p-[20px]  h-[60px] flex justify-start items-center bg-white ">
        <div
          onClick={() => {
            navigate("/trainerDashboard/dashboard");
          }}
          style={{
            fontSize: "16px",
            fontWeight: "400",
            color: "#888888",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
          >
            <path
              d="M16 7.57143L0.999999 7.57143M0.999999 7.57143L7.42857 14M0.999999 7.57143L7.42857 1.14286"
              stroke="#888888"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h3 style={{ marginLeft: "10px" }}>Back</h3>
        </div>
      </div>

      <div className="w-full relative">
        <div className="w-100% relative ml-[80px] mr-[80px] h-auto flex">
          <div className="leftsideTrainerProfile w-8/12 mr-[23.67px]">
            <div className="min-h-[1086px] h-[auto] flex flex-col border">
              <div className="h-[195px] ">
                {
                  user?.basicInfo?.profileBanner ?

                    <img className="h-[235.41px] w-full" src={user?.basicInfo?.profileBanner} alt="img" />
                    :
                    <div className="flex justify-center items-center bg-slate-300 w-full">
                      <span className="capitalize text-black">{user?.fullName[0]}</span>
                    </div>
                }
              </div>
              <div className="">
                <div className="relative flex justify-center items-center flex-col">

                  {
                    user?.basicInfo.profileImg ?
                      <img
                        className="relative top-[-5px] w-[100px] h-[100px] rounded-full"
                        src={user?.basicInfo.profileImg}
                        alt=""
                      />
                      :
                      <div className="relative top-[-5px] w-[100px] h-[100px] rounded-full bg-slate-300">
                        <span className="text-3xl capitalize">{user?.fullName[0]}</span>
                      </div>
                  }
                  <img
                    onClick={handleEditProfile}
                    className="absolute right-[30.33px] cursor-pointer"
                    src={Edit}
                    alt=""
                  />
                  <div className="relative flex justify-center items-center flex-col">
                    <div className="text-[#263238] text-[20px] font-[500] font-['Poppins'] capitalize">

                      {`${user?.basicInfo?.firstName} ${user?.basicInfo?.lastName} ` || `${user?.fullName}`}
                    </div>
                    <div className="text-[#232323] text-base font-normal font-['Poppins'] capitalize">

                      {user?.designation}
                    </div>
                    <h4
                      className="font-[500] text-[#2676C2] text-[16px] font-[Poppins] cursor-pointer"
                      onClick={goToConnections}
                    >
                      500+ connections
                    </h4>
                  </div>
                  <div className="relative text-center text-[#6A6A6A] text-[14px] font-[400] font-['Poppins'] capitalize">
                    {user?.skills?.slice(0, 7).map(({ name }) => {
                      return (
                        <>
                          <span>
                            {name} | {" "}
                          </span>
                        </>
                      );
                    })}
                    <br />
                    {user?.skills?.slice(7, 10).map(({ name }) => {
                      return (
                        <>
                          <span>
                            {name} | {" "}
                          </span>
                        </>
                      );
                    })}
                    {user?.skills?.length > 10 ? (
                      <span className="text-[#2676c2] hover:cursor-pointer">
                        ....more
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div className="mt-[17px] mb-[17px] w-9/12 h-[0px] border border-neutral-200"></div>
              </div>
              <div className="pl-[30px] pr-[30px]">
                <div className="text-[#232323] text-[18px] font-[500px] font-['Poppins'] capitalize">
                  {/* UI/UX Trainer & Developer | Passionate about Crafting Seamless
                  Experiences */}
                  {user?.basicInfo?.objective}
                </div>
                <div className="text-[#535353] text-[16px] mt-[10px] font-[400px] font-['Poppins']">
                  {/* I'm Kowshik, a dedicated UI/UX Developer and Trainer. With a
                  keen eye for design and a <br />
                  commitment to education, I'm on a mission to share my
                  expertise with aspiring <br />
                  designers. */}
                  {user?.basicInfo?.aboutYou}
                </div>
              </div>
              <div className="flex justify-center items-center flex-col mt-[30px] mr-[10px] ml-[10px]">
                <div className="w-full h-[0px] border border-neutral-200"></div>
              </div>

              <div className="mr-[22px] ml-[28px] mt-[20px]">
                <h3 className="text-[#232323] text-[18px] font-[500] font-['Poppins']">
                  Certifications
                </h3>
                {
                  user?.certificateDetails
                    .slice(0, showAllCert ? user?.certificateDetails.length : 1)
                    .map(({ certificateHead, certificateUrl, certificationDescription, institution }) => {
                      return <>
                        <div>
                          <h3 className="mt-[10px]">
                            <span className="text-[#232323] text-[16px] font-[500] font-['Poppins']">
                              {/* Certified UI/UX Professional:{" "} */}
                              {certificateHead}:{" "}
                            </span>
                            <span className="text-[#2676C2] text-[16px] font-[500] font-['Poppins']">
                              {/* Stanford university */}
                              {institution}
                            </span>
                          </h3>
                        </div>
                        <p className="mt-[10px] text-[#535353] text-[16px] font-[400] font-['Poppins']">
                          {certificationDescription}
                        </p>
                        {/* <iframe className="mt-[20px]" src={certificateUrl} alt="" /> */}
                        {certificateUrl.toLowerCase().endsWith('.pdf') ? (
                          <iframe
                            style={{ width: '100%', height: '417px' }}
                            className="mt-[20px] max-w-[756px] h-auto" src={certificateUrl} alt="PDF Certificate" />
                        ) : (
                          <img className="mt-[20px]" src={certificateUrl} alt="Image Certificate" />
                        )}
                        <br />
                      </>
                    })

                }

              </div>
              {
                user?.certificateDetails?.length > 1 && (
                  <div className="mt-[10px] ml-[28px] mb-[13px]">
                    <p
                      className="text-[#2676C2] text-[16px] font-[400] font-['Poppins'] cursor-pointer"
                      onClick={toggleShowAllExp}
                    >
                      {showAllCert ? "Show Less" : "Show More"}
                    </p>
                  </div>
                )
              }
            </div>
            <div className="Reactangle237 w-full border h-[378px] mt-[20px] ">
              <div className="w-full pl-[28px] mt-[24px]">
                <h4 className="min-w-[45px] h-[27px] text-[#535353] text-[18px] font-[500] font-['Poppins']">
                  Skills
                </h4>
                <div className="w-full mt-[6px]">
                  {user?.skills?.map(({ name, image }, index) => {
                    return (
                      <>
                        <div className="w-full flex justify-between items-center flex-col">
                          <div className="TrainerProfile-slider-read w-full flex items-center h-[48.5px]">
                            <img className="h-[30px] w-[30px]" src={image} alt="React" />
                            <label
                              htmlFor={`react-slider-${index}`}
                              className="w-[100%] pl-[24.28px] pr-[24.28px]"
                            >
                              <input
                                type="range"
                                id={`react-slider-${index + 1}`}
                                min="1"
                                max="10"
                                value={index}
                                readOnly
                                className="w-full h-[7px]"
                              />
                            </label>
                            <div className="pr-[31.92px]">{index + 1}0%</div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="Reactangle238 w-full h-[auto] mt-[20px] border">
              <div className="pl-[28px] pr-[30px] mt-[21px]">
                <div className="flex justify-between items-center">
                  <div className="text-[#535353] text-[18px] font-[500] font-['Poppins']">
                    Recent Activities
                  </div>
                  <div className="text-[#2676C2] text-[16px] font-[500] font-['Poppins'] rounded-[8px] border border-[#2676C2] pl-[15px] pr-[15px] pt-[3px] pb-[3px] hover:bg-[#2676C2] hover:text-[#fff]">
                    Create post
                  </div>
                </div>
                {
                  trainerCreatePostDetails
                    ?.slice(0, showAllActivities ? trainerCreatePostDetails?.length : 3)
                    ?.map((post, index) => {
                      return <>
                        <div key={index}>
                          <div className="mt-[20px] text-[#9F9F9F] text-[14px] font-[400] font-['Poppins']">
                            {/* Posted this 2days ago */}
                            Posted this {timesago(post?.createdAt)}
                          </div>
                          {/* <div className="mt-[10px] text-[#535353] text-[18px] font-[500] font-['Poppins']">
                          UI/UX Trainer & Developer | Passionate about Crafting
                          Seamless Experiences
                        </div> */}
                          <div className="mt-[10px] text-[#535353] text-[16px] font-[400] font-['Poppins']">
                            {/* I'm Kowshik, a dedicated UI/UX Developer and Trainer. With a
                          keen eye for design and a commitment to education, I'm on a
                          mission to share my expertise with aspiring designers. */}
                            {post?.postedDescrition}
                          </div>
                          <div>
                            <img src={post?.postedImg?.postImg} alt="" />
                          </div>
                          <hr />
                        </div>
                      </>
                    })
                }



              </div>

              {
                trainerCreatePostDetails.length > 3 && (
                  <div className="pl-[18px] pt-[11px]">
                    <p
                      className="text-[#2676C2] text-[18px] font-[500] font-['Poppins'] cursor-pointer"
                      onClick={toggleShowAllActivities}
                    >
                      {showAllActivities
                        ? "Show Less Activities"
                        : "Load More Activities"}
                    </p>
                  </div>
                )
              }
            </div>
          </div>
          <div className="rightsideTrainerProfile w-4/12 ">
            <div className="w-full h-[571px] bg-[#FFFFFF] border border-[#EEEEEE]">
              <div className="pl-[23px] pt-[20px]">
                <h3 className="text-[#535353] text-[18px] font-[500] font-['Poppins']">
                  Recent Application
                </h3>
                <div className="mt-[10px] text-[#333] text-[18px] font-[500] font-['Poppins']">
                  Training Program Name
                </div>
                <div className=" mt-[4px] text-[#2676C2] text-[16px] font-[400] font-['Poppins']">
                  Full Stack Developer
                </div>
                <div className="mt-[10px] text-[#333] text-[18px] font-[500] font-['Poppins']">
                  Company Name
                </div>
                <div className="mt-[4px] text-[#2676C2] text-[16px] font-[400]  font-['Poppins']">
                  Mindstay Technologies
                </div>
                <div className="mt-[10px] text-[#333] text-[18px] font-[500] font-['Poppins']">
                  Training Topics & Subjects
                </div>
                <div className="mt-[4px] text-[#535353] text-[16px] font-[400] font-['Poppins']">
                  Java, Js, Python, React Native
                </div>
                <div className="mt-[10px] text-[#333] text-[18px] font-[500] font-['Poppins']">
                  Type Of Training
                </div>
                <div className="mt-[5px] text-[#535353] text-[16px] font-[400] font-['Poppins']">
                  Corporate
                </div>
                <div className="mt-[10px] text-[#333] text-[18px] font-[500] font-['Poppins']">
                  Duration Of Training
                </div>
                <div className="mt-[5px] text-[#535353] text-[16px] font-[400] font-['Poppins']">
                  10 Days
                </div>
                <div className="mt-[10px] flex">
                  <div>
                    <div className="text-[#434343] text-[18px] font-[500] font-['Poppins']">
                      Start Date
                    </div>
                    <div className="mt-[4px] text-[#535353] text-[16px] font-[400] font-['Poppins']">
                      01-12-2023
                    </div>
                  </div>
                  <div className="ml-[30px]">
                    <div className="text-[#434343] text-[18px] font-[500] font-['Poppins']">
                      End date
                    </div>
                    <div className="mt-[4px] text-[#535353] text-[16px] font-[400] font-['Poppins']">
                      10-01-2024
                    </div>
                  </div>
                </div>
                <div className="mt-[10px]  text-[#434343] text-[18px] font-[500] font-['Poppins']">
                  Status Of Application
                </div>
                <div className="mt-[11px] mb-[20px] w-[130px] h-[23px] bg-[#2676C2] bg-opacity-20 rounded border  border-sky-600">
                  <div className="pl-[36px] pr-[36px] pt-[1px] pb-[1px] text-[#2676C2] text-[16px] font-[400] font-['Poppins']">
                    Pending
                  </div>
                </div>
                <hr />
              </div>
              <div className="ml-[23px] mt-[9px] mb-[8px] text-[#2676C2] text-[16px] font-[400] font-['Poppins']">
                Load More{" "}
              </div>
            </div>
            <div className="mt-[20px] w-full min-h-[428px] h-[auto] bg-[#FFFFFF] border border-[#EEEEEE]">
              <div className="pl-[20px] pt-[20px] pr-[20px]">
                <div className="text-neutral-600 text-base font-medium font-['Poppins']">
                  Notifications
                </div>
                <div className="mt-[20px] ">
                  {visibleNotifications.map((notification, index) => (
                    <div key={index}>
                      <div className="flex mt-[10px]">
                        <div className="">
                          <img
                            className="w-10 h-[40px] rounded-full"
                            src={notification.image}
                            alt=""
                          />
                        </div>
                        <div className="pl-[10px]">
                          <div className="flex justify-start flex-col">
                            <p className="text-[#434343] text-[16px] font-[400] font-['Poppins']">
                              {notification.name}
                            </p>
                            <p className="text-[#B8B8B8] text-[10px] font-[400] font-['Poppins']">
                              {notification.time}
                            </p>
                          </div>
                          {notification.accept && notification.denied && (
                            <div className="mt-[10px] flex item-center justify-center">
                              <button className="w-[125px] h-[30px] mr-[20px] text-[#2676C2] text-[16px] font-[500] font-['Poppins'] border border-[#2676C2] rounded-[8px]">
                                {notification.accept}
                              </button>
                              <button className="w-[125px] h-[30px] text-[#fff] text-[16px] font-[500] font-['Poppins'] bg-[#2676C2] rounded-[8px]">
                                {" "}
                                {notification.denied}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                      <hr className="mt-[10px]" />
                    </div>
                  ))}
                  {notificationMessages.length > 4 && (
                    <button
                      onClick={handleToggle}
                      className="mt-[13px] mb-[14px] pl-[5px] text-[#2676C2] text-[16px] font-[400] font-['Poppins']"
                    >
                      {showAll ? "Show All" : "Show Less"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainerProfile;
