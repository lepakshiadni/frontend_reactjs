import React, { useState, useEffect } from "react";
import HeaderImage from "../assets/LOGO.png";
import "../styles/Header.css";
import Favi from "../assets/favi.png";
import { Link, useNavigate } from 'react-router-dom'
import Chat from "../pages/messages/Chat";
import { useSelector } from "react-redux";
const Header = () => {
  // State for search bar dropdown
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownActive, setDropdownActive] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [user, setUser] = useState(null)
  // const user = useSelector(({ user }) => {
  //   return user?.user
  // })

  const employer = useSelector(({ employerSignUp }) => {
    return employerSignUp?.employerDetails
  })
  const trainer = useSelector(({ trainerSignUp }) => {
    return trainerSignUp?.trainerDetails;
  })
  // console.log("employer",employer)
  // console.log("trainer",trainer)
  useEffect(() => {
    if (employer?.success) {
      setUser(employer?.employerDetails);
    }
    if (trainer?.success) {
      setUser(trainer?.trainerDetails);
    }
  }, [employer, trainer]);

  console.log("user", user)
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleDropdown = () => {
    setDropdownActive(!isDropdownActive);
  };

  //notification
  const handleNotification = () => {
    setShowNotificationDropdown(!showNotificationDropdown);
  };
  const handleprofile = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  // State for profile dropdown

  const options = [
    { label: "The Godfather", id: 1 },
    { label: "Godfather", id: 2 },
    { label: "Pulp Fiction", id: 3 },
    { label: " Fiction", id: 4 },
  ];
  // Sample data for notification messages
  const notificationMessages = [
    {
      image: "https://via.placeholder.com/40x40",
      name: "Mindstay Technologies Accept Request",
      time: "10 min ago",
    },
    { image: "", name: "Kowshik Viewed Your Application", time: "30 min ago" },
    {
      image: Favi,
      name: "Mindstay Technologies Accept Request",
      time: "10 min ago",
    },
    { image: "", name: "Kowshik Viewed Your Application", time: "30 min ago" },
    {
      image: "https://via.placeholder.com/40x40",
      name: "Mindstay Technologies Accept Request",
      time: "10 min ago",
    },
    {
      image: Favi,
      name: "Kowshik Viewed Your Application",
      time: "30 min ago",
    },
  ];

  // Sample data for profile dropdown

  return (
    // <div className="header">
    //   {/* Company Logo */}
    //   <div className="logo">
    //     <img src={HeaderImage} alt="Company Logo" />
    //   </div>

    //   {/* Search Bar */}
    //   <div className="search-container">
    //     <input
    //       type="text"
    //       value={searchTerm}
    //       onChange={handleInputChange}
    //       placeholder="What are you looking for....."
    //       className="search-input"
    //       onFocus={toggleDropdown}
    //       onBlur={toggleDropdown}
    //     />
    //     {/* <SearchIcon " /> */}
    //     <svg
    //       className="search-icon"
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="26"
    //       height="26"
    //       viewBox="0 0 26 26"
    //       fill="none"
    //     >
    //       <path
    //         d="M17 17L25 25M10.3333 19.6667C5.17868 19.6667 1 15.488 1 10.3333C1 5.17868 5.17868 1 10.3333 1C15.488 1 19.6667 5.17868 19.6667 10.3333C19.6667 15.488 15.488 19.6667 10.3333 19.6667Z"
    //         stroke="#888888"
    //         stroke-width="2"
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //       />
    //     </svg>
    //     <div className={`dropdown-search ${isDropdownActive ? "active" : ""}`}>
    //       {/* Your dropdown content goes here */}
    //       <ul className="search-input-suggestion">
    //         {options.map((item) => (
    //           <li key={item.id}>{item.label}</li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>

    //   {/* Notification Icon */}
    //   <div className=" relative cursor-pointer" onClick={handleNotification}>
    //     <div className="ml-[10px]">
    //       <div className="Ellipse17 w-5 h-5 ml-1 text-white bg-sky-600 rounded-full">
    //         <div className=" text-white text-sm font-normal font-['Poppins'] ml-[5px] mb-[1px]">
    //           5
    //         </div>
    //       </div>
    //     </div>
    //     <div className="notification-icon absolute top-[-8px] z-[-1]" >
    //       <span>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="24"
    //           height="26"
    //           viewBox="0 0 24 26"
    //           fill="none"
    //         >
    //           <path
    //             d="M15.6667 19.6667V21C15.6667 23.2091 13.8758 25 11.6667 25C9.45753 25 7.66667 23.2091 7.66667 21V19.6667M15.6667 19.6667H7.66667M15.6667 19.6667H20.454C20.964 19.6667 21.2203 19.6667 21.4268 19.597C21.8213 19.4639 22.13 19.1542 22.263 18.7597C22.333 18.5524 22.333 18.2953 22.333 17.7813C22.333 17.5563 22.3327 17.4438 22.3151 17.3366C22.2818 17.1339 22.2032 16.9418 22.0834 16.775C22.0201 16.6868 21.9397 16.6064 21.7811 16.4478L21.2617 15.9284C21.0942 15.7608 21 15.5335 21 15.2965V10.3333C21 5.17867 16.8213 0.999987 11.6667 1C6.51202 1.00001 2.33333 5.17869 2.33333 10.3333V15.2966C2.33333 15.5336 2.23899 15.7608 2.07142 15.9284L1.55208 16.4477C1.39301 16.6068 1.31339 16.6867 1.25 16.775C1.13021 16.9418 1.05086 17.1339 1.0176 17.3366C1 17.4438 1 17.5563 1 17.7813C1 18.2953 1 18.5523 1.06994 18.7597C1.203 19.1541 1.51306 19.4639 1.90755 19.597C2.11408 19.6667 2.36935 19.6667 2.87941 19.6667H7.66667"
    //             stroke="#888888"
    //             stroke-width="2"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //           />
    //         </svg>
    //       </span>
    //       {showNotificationDropdown && (
    //         <div className="notification-dropdown">
    //           {/* Scrollable area for notification messages */}
    //           <div className="notification-scroll">
    //             <div className="h-[48.5px] flex justify-center items-center">
    //               <div className="text-neutral-700 text-base font-normal font-['Poppins']">
    //                 Notifications
    //               </div>
    //               <div className="Ellipse17 w-5 h-5 ml-1 text-white bg-sky-600 rounded-full">
    //                 <div className=" text-white text-sm font-normal font-['Poppins'] ml-[5px] mb-[1px]">
    //                   5
    //                 </div>
    //               </div>
    //             </div>
    //             <hr />
    //             {notificationMessages.map((message, index) => {
    //               return (
    //                 <>
    //                   <div
    //                     key={index}
    //                     className="notification-message h-[56.49px] flex items-center"
    //                   >
    //                     <div className="pr-[10px] pt-[11.49px] pb-[8px] pl-[5px]">
    //                       <img
    //                         className="w-10 h-[40px] rounded-full"
    //                         src={message.image}
    //                         alt=""
    //                       />
    //                     </div>
    //                     <div>
    //                       <div className="text-neutral-700 text-base font-normal font-['Poppins']">
    //                         {message.name}
    //                       </div>
    //                       <div className="text-zinc-400 text-[10px] font-normal font-['Poppins']">
    //                         {message.time}
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="w-[379px] h-[0px] border border-zinc-300 border-opacity-40"></div>
    //                 </>
    //               );
    //             })}
    //           </div>
    //           <div className="triangle"></div>
    //         </div>
    //       )}
    //     </div>
    //   </div>


    //   {/* Profile Dropdown */}
    //   <div className="profile" onClick={handleprofile}>
    //     <div className="profile-header">
    //       <img src={Favi} alt="" style={{ float: "left", clear: "both" }} />
    //       <div>
    //         <h4>{user?.fullName?.charAt(0)?.toUpperCase()+ user?.fullName?.slice(1)}</h4>
    //         <p>{user?.companyName?.charAt(0)?.toUpperCase()+ user?.companyName?.slice(1) ||  'N/A'}</p>
    //       </div>
    //     </div>
    //     {showProfileDropdown && (
    //       <div className="absolute right-[0] w-[234px] h-[133px] bg-white border-2 border-zinc-300">
    //         <div className="bg-white font-['Poppins']">
    //           <div onClick={() => { navigate('/trainerProfile') }} className="viewprofile text-neutral-700 flex justify-center items-center w-[100%] h-[43px] text-lg font-normal font-['Poppins']">
    //             View Profile
    //             <div className="triangle2"></div>
    //           </div>
    //           <div  className="text-neutral-700 w-[100%] flex justify-center items-center h-[43px] text-lg font-normal font-['Poppins'] hover:bg-[#E3E3E3]">
    //              <Link to="/trainerDashboard/messages">Send Messages</Link>
    //           </div>
    //           <div className="text-neutral-700 w-[100%] flex justify-center items-center h-[43px] text-lg font-normal font-['Poppins'] hover:bg-[#E3E3E3]">
    //           <Link to="/trainerDashboard/settings">Settings</Link>
    //           </div>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>

    <div className="header">
      {/* Company Logo */}
      <div className="w-[210px] ml-[40px]">
        <div className="logo">
          <img src={HeaderImage} alt="Company Logo" />
        </div>
      </div>
      <div className="w-full header-child ml-[110px] mr-[30px]">
        {/* Search Bar */}
        <div>
          <div className="search-container">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="What are you looking for....."
              className="search-input"
              onFocus={toggleDropdown}
              onBlur={toggleDropdown}
            />
            {/* <SearchIcon " /> */}
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M17 17L25 25M10.3333 19.6667C5.17868 19.6667 1 15.488 1 10.3333C1 5.17868 5.17868 1 10.3333 1C15.488 1 19.6667 5.17868 19.6667 10.3333C19.6667 15.488 15.488 19.6667 10.3333 19.6667Z"
                stroke="#888888"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div
              className={`dropdown-search ${isDropdownActive ? "active" : ""}`}
            >
              {/* Your dropdown content goes here */}
              <ul className="search-input-suggestion">
                {options.map((item) => (
                  <li key={item.id}>{item.label}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center ">
          {/* Notification Icon */}
          <div className=" relative cursor-pointer" onClick={handleNotification}>
            <div className="ml-[10px]">
              <div className="Ellipse17 w-5 h-5 ml-1 text-white bg-sky-600 rounded-full">
                <div className=" text-white text-sm font-normal font-['Poppins'] ml-[5px] mb-[1px]">
                  5
                </div>
              </div>
            </div>
            <div className="notification-icon absolute top-[-8px] z-[-1]" >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="26"
                  viewBox="0 0 24 26"
                  fill="none"
                >
                  <path
                    d="M15.6667 19.6667V21C15.6667 23.2091 13.8758 25 11.6667 25C9.45753 25 7.66667 23.2091 7.66667 21V19.6667M15.6667 19.6667H7.66667M15.6667 19.6667H20.454C20.964 19.6667 21.2203 19.6667 21.4268 19.597C21.8213 19.4639 22.13 19.1542 22.263 18.7597C22.333 18.5524 22.333 18.2953 22.333 17.7813C22.333 17.5563 22.3327 17.4438 22.3151 17.3366C22.2818 17.1339 22.2032 16.9418 22.0834 16.775C22.0201 16.6868 21.9397 16.6064 21.7811 16.4478L21.2617 15.9284C21.0942 15.7608 21 15.5335 21 15.2965V10.3333C21 5.17867 16.8213 0.999987 11.6667 1C6.51202 1.00001 2.33333 5.17869 2.33333 10.3333V15.2966C2.33333 15.5336 2.23899 15.7608 2.07142 15.9284L1.55208 16.4477C1.39301 16.6068 1.31339 16.6867 1.25 16.775C1.13021 16.9418 1.05086 17.1339 1.0176 17.3366C1 17.4438 1 17.5563 1 17.7813C1 18.2953 1 18.5523 1.06994 18.7597C1.203 19.1541 1.51306 19.4639 1.90755 19.597C2.11408 19.6667 2.36935 19.6667 2.87941 19.6667H7.66667"
                    stroke="#888888"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              {showNotificationDropdown && (
                <div className="notification-dropdown">
                  {/* Scrollable area for notification messages */}
                  <div className="notification-scroll">
                    <div className="h-[48.5px] flex justify-center items-center">
                      <div className="text-neutral-700 text-base font-normal font-['Poppins']">
                        Notifications
                      </div>
                      <div className="Ellipse17 w-5 h-5 ml-1 text-white bg-sky-600 rounded-full">
                        <div className=" text-white text-sm font-normal font-['Poppins'] ml-[5px] mb-[1px]">
                          5
                        </div>
                      </div>
                    </div>
                    <hr />
                    {notificationMessages.map((message, index) => {
                      return (
                        <>
                          <div
                            key={index}
                            className="notification-message h-[56.49px] flex items-center"
                          >
                            <div className="pr-[10px] pt-[11.49px] pb-[8px] pl-[5px]">
                              <img
                                className="w-10 h-[40px] rounded-full"
                                src={message.image}
                                alt=""
                              />
                            </div>
                            <div>
                              <div className="text-neutral-700 text-base font-normal font-['Poppins']">
                                {message.name}
                              </div>
                              <div className="text-zinc-400 text-[10px] font-normal font-['Poppins']">
                                {message.time}
                              </div>
                            </div>
                          </div>
                          <div className="w-[379px] h-[0px] border border-zinc-300 border-opacity-40"></div>
                        </>
                      );
                    })}
                  </div>
                  <div className="triangle"></div>
                </div>
              )}
            </div>
          </div>

          {/* Profile Dropdown */}
          <div className="profile" onClick={handleprofile}>
            <div className="profile-header">
              <img src={Favi} alt="" style={{ float: "left", clear: "both" }} />
              <div>
                <h4>Martin Hook</h4>
                <p>UI UX Developer</p>
              </div>
            </div>
            {showProfileDropdown && (
              <div className="absolute right-[0] w-[234px] h-[133px] bg-white border-2 border-zinc-300">
                <div className="bg-white font-['Poppins']">
                  <div className="viewprofile text-neutral-700 flex justify-center items-center w-[100%] h-[43px] text-lg font-normal font-['Poppins']">
                    <Link to="/profile"> View Profile</Link>
                    <div className="triangle2"></div>
                  </div>
                  <div className="text-neutral-700 w-[100%] flex justify-center items-center h-[43px] text-lg font-normal font-['Poppins'] hover:bg-[#E3E3E3]">
                    <Link to="/dashboard/messages"> Send Messages</Link>
                  </div>
                  <div className="text-neutral-700 w-[100%] flex justify-center items-center h-[43px] text-lg font-normal font-['Poppins'] hover:bg-[#E3E3E3]">
                    <Link to="/dashboard/settings">Settings</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

