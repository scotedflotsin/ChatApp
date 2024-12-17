import React, { useState } from "react";
import char1 from "../assets/char1.png";
import seen from "../assets/seen.png";


const ChatView = () => {
  //props required > IMG URL, NAME, LAST MESSAGE, TIMESTAMP, NOTIFCATION, SEEN and ..callbacks

  const [isNotification, setNotification] = useState(true);
  return (
    <>
      <div className="hover:bg-slate-50 transition-all duration-100 cursor-pointer bg-white flex justify-between  border-b-[2px] py-[9px]">
        <div className="flex">
          <div>
            <img src={char1} alt="IMG" />
          </div>
          <div className="flex flex-col ml-[25px]">
            <p className="font-semibold text-[20px] roboto-head line-height mt-[13px] mb-[10px]">
              Anil
            </p>
            <p className="font-light text-[16px] roboto-sub">
              April fool's day
            </p>
          </div>
        </div>
        <div className="flex flex-col relative">
          <div>
            <p className="font-light text-[16px] roboto-sub">Today, 12:11pm</p>
          </div>
          <div className="absolute right-0 bottom-0">
            {isNotification ? (
              <div className="rounded-full indicator-color w-[27px] h-[22px] text-center">
                <p className="text-white text-[14px] text-center">4</p>
              </div>
            ) : (
              <div>
                {" "}
                <img src={seen} alt="seen" />
              </div>
            )}
          </div>
        </div>
     
      </div>
    </>
  );
};

export default ChatView;
