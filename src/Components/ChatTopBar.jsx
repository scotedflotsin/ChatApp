import React from "react";
import char1 from "../assets/char1.png";
import audio_call from "../assets/voicecall.png";
import video_call from "../assets/videocall.png";
import menu from "../assets/menu.png";

const ChatTopBar = () => {
  return (
    <>
      <div className="flex justify-between border-b-[2px]  m-[10px] pb-[10px] items-center">
        <div className="flex">
          <div>
            <img src={char1} alt="IMG" className="cursor-pointer" />
          </div>
          <div className="flex flex-col ml-[15px]">
            <p className="cursor-pointer font-semibold text-[20px] roboto-head line-height mt-[13px] mb-[10px]">
              Anil
            </p>
            <p className="font-light text-[16px] roboto-sub">
              Online-Last seen, 2.02pm
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center gap-[18px]">
          <img
            src={audio_call}
            alt="Call"
            className="w-[32px] h-[32px] cursor-pointer"
          />
          <img
            src={video_call}
            alt="video-call"
            className="w-[32px] h-[32px] cursor-pointer"
          />
          <img
            src={menu}
            alt="menu"
            className="w-[32px] h-[32px] cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};
export default ChatTopBar;
