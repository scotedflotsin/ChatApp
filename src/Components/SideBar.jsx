import React, { useEffect, useState } from "react";
import profile from "../assets/profileImage.png";
import chat from "../assets/chat.png";
import notification from "../assets/notification.png";
import setting from "../assets/settings.png";
import logout from "../assets/logout.png";
import search from "../assets/search_menu.png";
import { useNavigate } from "react-router-dom";

const SideBar = ({ logged }) => {
  const navigate = useNavigate();

  //Now updating it by checking cookies

  const auth = document.cookie;
  if (auth) {
    logged = true;
  } else {
    logged = false;
  }

  console.log(logged);

  const handleClick = (kon) => {
    if (kon == 1) {
      if (logged) {
        navigate("/profile"); // Navigate to the About page
      } else {
        navigate("/auth"); // Navigate to the About page
      }
    } else if (kon == 2) {
      navigate("/chat/"); // Navigate to the About page
    } else if (kon == 3) {
      navigate("/notification"); // Navigate to the About page
    } else if (kon == 4) {
      navigate("/settings"); // Navigate to the About page
    } else if (kon == 5) {
      navigate("/search");
    }
  };
  useEffect(() => {
    handleClick(2);
  }, []);

  return (
    <>
      <div className="flex flex-col justify-between items-center voilet w-[90px] h-[95vh] mt-[2.5vh] mb-[2.5vh] ml-[2.5vh] rounded-[18px]">
        <div className="flex flex-col items-center">
          <div className="h-[80px]" onClick={() => handleClick(1)}>
            <div className="profileRing transition-all duration-75 ease-in-out rounded-full mt-[45px]">
              <img
                src={profile}
                alt="Profile"
                className="p-[5px] rounded-full transition-all w-[60px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[10px] mt-[50px] items-center">
            <div
              onClick={() => handleClick(2)}
              className="onMenuHover w-[90px] flex justify-center h-[97px] items-center"
            >
              <img src={chat} alt="" className="w-[40px] h-[40px]" />
            </div>
            <div
              onClick={() => handleClick(3)}
              className="onMenuHover w-[90px] flex justify-center h-[97px] items-center"
            >
              <img src={notification} alt="" className="w-[40px] h-[40px]" />
            </div>
            <div
              onClick={() => handleClick(4)}
              className="onMenuHover w-[90px] flex justify-center h-[97px] items-center"
            >
              <img src={setting} alt="" className="w-[40px] h-[40px]" />
            </div>
            <div
              onClick={() => handleClick(5)}
              className="onMenuHover w-[90px] flex justify-center h-[97px] items-center"
            >
              <img src={search} alt="" className="w-[40px] h-[40px]" />
            </div>
          </div>
        </div>
        <div className="mb-[40px] flex flex-col justify-center items-center">
          <img src={logout} alt="" className="w-[44px] cursor-pointer " />
          <p className="text-white mt-[5px] cursor-pointer">LogOut</p>
        </div>
      </div>
    </>
  );
};

export default SideBar;
