import React, { useEffect, useState } from 'react'
import Time from 'timesago'
import { useSelector } from "react-redux";


function Messages({ messages, own,selecteduser }) {
  const [ownUser,setOwnUser]=useState(null)
  const user = useSelector(({ user }) => {
    return user?.user
  })
  const timeagp = Time(messages.createdAt)
  useEffect(()=>{
    const ownUser=user?._id!==selecteduser?._id
    if(ownUser){
      setOwnUser(user)
    }
  },[selecteduser?._id,user])
  // console.log(conversation)
  return (
    <div >
      {
        own ?
        
          <div className="flex flex-row-reverse gap-4 mr-[21px] space-y-1 mb-[20px] ">
            {/* own message */}

            <div className="">
              {/* <img
                className="Ellipse22 w-[50px] h-[50px] rounded-full mt-[10px]"
                src="https://via.placeholder.com/50x50"
                alt=""
              /> */}
              <div className='w-[50px] h-[50px] rounded-full mt-[10px] flex justify-center items-center bg-slate-500'>
                 <p className="text-['Poppins'] text-lg"> {ownUser?.name[0].toUpperCase()}</p>
              </div>
            </div>

            <div>
              <div className="Rectangle128 m-[10px] w-[100%] flex h-9  bg-[#2676c2] rounded-tl-lg rounded-tr-[20px] rounded-bl-lg border-gray-200" >
                <div className=" text-[#fff] text-xs font-normal font-['Poppins'] m-[10px]">
                  {messages?.text}
                </div>
              </div>
              <div>
                <div className="messageBottom text-zinc-400 ml-[150px]  text-[10px] font-normal font-['Poppins']  ">{timeagp}</div>
              </div>
            </div>

          </div>
          
        
          : 
          
          <div className="flex ml-[21px] space-x-1 mb-[20px] ">

            {/* friednmessge */}

            <div className="">
              {/* <img
                className="Ellipse22 w-[50px] h-[50px] rounded-full mt-[10px]"
                src="https://via.placeholder.com/50x50"
                alt=""
              /> */}
              <div className='w-[50px] h-[50px] rounded-full mt-[10px] flex justify-center items-center bg-slate-500'>
                 <p className="text-['Poppins'] text-lg"> {selecteduser?.name[0].toUpperCase()}</p>
              </div>
            </div>
            <div>
              <div className="Rectangle128 m-[10px] w-[100%] flex h-9  bg-zinc-100 rounded-tl-[20px] rounded-tr-lg rounded-br-lg border border-gray-200" >
                <div className=" text-neutral-500 text-xs font-normal font-['Poppins'] m-[10px]">
                  {messages?.text}
                </div>
              </div>
              <div>
                <div className="messageBottom text-zinc-400 text-[10px] font-normal font-['Poppins'] ml-[10px]">{timeagp}</div>
              </div>
            </div>
          </div>


      }





    </div>
  )
}

export default Messages