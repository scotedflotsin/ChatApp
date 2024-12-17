import { React, useState } from "react";
import char1 from "../assets/char1.png";
import seen from "../assets/seen.png";

const SearchResult = ({ id, username, email, profile, updatedAt, onClick}) => {
  const date = new Date(updatedAt);

  // Extract only the time in HH:MM format
  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
console.log(id);
  return (
    <>
      <div
      onClick={()=>onClick(id)}
      className="hover:bg-slate-50 transition-all duration-100 cursor-pointer bg-white flex justify-between  border-b-[2px] py-[9px]">
        <div className="flex">
          <div>
            <img src={char1} alt="IMG" />
          </div>
          <div className="flex flex-col ml-[25px]">
            <p className="font-semibold text-[20px] roboto-head line-height mt-[13px] mb-[10px]">
              {username}
            </p>
          </div>
        </div>
        <div className="flex flex-col relative">
          <div>
            <p className="font-light text-[16px] roboto-sub">{time}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
