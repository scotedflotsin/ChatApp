import React from "react";
import Switch from "@mui/material/Switch";

const Settings = () => {
  return (
    <>
      <div className="w-[90vw] mr-[20px] custom-scrollbar relative overflow-auto h-[95vh] mt-[2.5vh] mb-[2.5vh] ml-[2.5vh] flex-col">
        <h1 className="bg-white text-[40px] font-bold w-[100%]  fixed">
          Settings
        </h1>

        <div className="mt-[100px] flex flex-col gap-[20px]">
          <div className="flex border w-[300px] justify-between items-center p-[10px] text-[18px] font-semibold">
            <p>Allow audio & video call</p>
            <Switch onChange={() => setChec(!isCheck)} />
          </div>
          <div className="flex border w-[300px] justify-between items-center p-[10px] text-[18px] font-semibold">
            <p>Allow Notification</p>
            <Switch onChange={() => setChec(!isCheck)} />
          </div>
          <div className="flex border w-[300px] justify-between items-center p-[10px] text-[18px] font-semibold">
            <p>Show Last seen</p>
            <Switch onChange={() => setChec(!isCheck)} />
          </div>
          <div className="flex border w-[300px] justify-between items-center p-[10px] text-[18px] font-semibold">
            <p>Allow in search</p>
            <Switch onChange={() => setChec(!isCheck)} />
          </div>
          <div className="flex border w-[300px] justify-between items-center p-[10px] text-[18px] font-semibold">
            <p>Show profile</p>
            <Switch onChange={() => setChec(!isCheck)} />
          </div>

          <div className="flex border w-[300px] justify-between items-center p-[10px] text-[18px] font-semibold">
            <p>Allow in Allow to message</p>
            <Switch onChange={() => setChec(!isCheck)} />
          </div>

          <div className="flex border w-[300px] justify-between items-center p-[10px] text-[18px] font-semibold">
            <p>show online indicator</p>
            <Switch onChange={() => setChec(!isCheck)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
