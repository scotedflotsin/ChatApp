import React from "react";
import mic from "../assets/mic.png";
import imog from "../assets/imog.png";
import camera from "../assets/camera.png";
import attachment from "../assets/attachment.png";

const TypingBar = () => {
  return (
    <>
      <div className="flex justify-between relative mb-[15px]">
        <div className="flex items-center px-[12px] pr-[20px] bg-[--appBg] flex-grow ml-[15px] rounded-[14px]">
          <div className="flex items-center gap-[17px] w-full">
            <img src={attachment} alt="IMG" className="w-[30px] h-[30px] cursor-pointer" />
            <input
              className="bg-transparent outline-none border-none w-full"
              type="text"
              placeholder="Type your message here..."
            />
          </div>
          <div className="flex items-center gap-[12px]">
            <img src={imog} alt="IMG" className="w-[30px] h-[30px] cursor-pointer" />
            <img src={camera} alt="IMG" className="w-[30px] h-[30px] cursor-pointer" />
          </div>
        </div>
        <div className="bg-[var(--sidebarColor)] mr-[15px] ml-[15px] w-[50px] h-[50px] mb-[2px] flex justify-center items-center rounded-[14px] p-[12px]">
          <img src={mic} alt="IMG" className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default TypingBar;
