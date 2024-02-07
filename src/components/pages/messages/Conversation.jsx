import React, { useEffect, useState } from "react";
import Axios from "axios";
import timesago from "timesago";


function Conversation({ conversation, currentuser, selectedConversation,lastMessage }) {
  const [user, setUser] = useState(null);
  // const [lastMessage, setLastMessage] = useState(null);
  // console.log(lastMessage?.text)
  // console.log(conversation?.lastMessage?.text)

  useEffect(() => {
    const friendid = conversation?.members?.find((m) => m?._id !== currentuser._id);
    setUser(friendid)
    const fetchLastMessage = async () => {
      try {
        const response = await Axios.get(`http://192.168.1.14:4000/message/lastMessage/${conversation._id}`);
        // setLastMessage(response.data.lastMessage);
        console.log(response.data?.lastMessage?.text)
      } catch (error) {
        console.error("Error fetching last message:", error);
      }
    };
    fetchLastMessage();
    // setLastMessage(conversation.lastMessage);
  }, [conversation, currentuser]);

  useEffect(() => {
    // Update last message when a new message is received
    // setLastMessage(conversation.lastMessage);
  }, [conversation.lastMessage]);

  return (
    <div>
      <div className={`${selectedConversation ? "Rectangle115 hover:cursor-pointer  w-[317px] h-[70px] flex justify-between justify-items-center bg-[#E3E3E3] " : "Rectangle115 hover:cursor-pointer  w-[317px] h-[70px] flex justify-between justify-items-center bg-white "}`}>
        <div className="flex">
          <div className="mt-[12px] ml-[10px] ">
            {/* <img
              className="Image14 w-[47px] h-[47px] rounded-[50%]"
              src=" "
              alt={`${user?.name[0]}`}
            /> */}
            <div className="Group1189  w-[51px] h-[51px]   rounded-[50%] ">

              <div className="relative">
                <div className=" hidden">
                  <svg width="55" height="55" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 1189">
                      <circle id="Ellipse 112" cx="24" cy="24" r="24" fill="#00D46F" fill-opacity="0.2" />
                      <circle id="Ellipse 113" cx="24.0007" cy="23.9987" r="22.6667" fill="#00D46F" fill-opacity="0.5" />
                      <circle id="Ellipse 114" cx="23.9993" cy="24.0013" r="21.3333" fill="#00D46F" fill-opacity="0.8" />
                    </g>
                  </svg>
                </div>
                <div className="w-[47px] h-[47px] absolute top-1 left-1 rounded-[50%] bg-slate-400 flex justify-center items-center  ">
                  <p className="  text-['Poppins'] text-lg">
                    {user?.fullName[0].toUpperCase()}
                  </p>
                </div>

              </div>
            </div>

          </div>
          <div className="flex flex-col space-y-1 ml-[10px] mt-[13px] ">
            <div className="Charlie text-gray-800 text-base font-medium font-['Poppins']">
              {user?.name}
            </div>
            <div className="Typing text-neutral-500 text-xs font-normal font-['Poppins']">
            {/* {lastMessage ? lastMessage.text : "No messages"} */}
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2 mr-[10px]">
          <div className="00 text-neutral-500 text-xs font-normal font-['Poppins'] mt-[13px]">
          {/* {lastMessage ? timesago(lastMessage.createdAt) : ""} */}
          </div>
          <div className="Ellipse17 w-5 h-5 ml-1 text-white bg-sky-600 rounded-full">
            <div className=" text-white text-sm font-normal font-['Poppins'] ml-[5px] mb-[1px]">
              5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversation;