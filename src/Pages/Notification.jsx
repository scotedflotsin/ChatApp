import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChatView from "../Components/ChatView";

const Notification = () => {
  const [isCheck, setChec] = useState(false);

  console.log(isCheck);
  return (
    <>
      <div className="w-[90vw] mr-[20px] custom-scrollbar relative overflow-auto h-[95vh] mt-[2.5vh] mb-[2.5vh] ml-[2.5vh] flex-col">
      <h1 className="bg-white text-[40px] font-bold w-[100%]  fixed">Notifications</h1>
      <div className="mt-[60px]">
      <ChatView/>
      <ChatView/>
      <ChatView/>
      <ChatView/>
      <ChatView/>
      <ChatView/>
      <ChatView/>
      <ChatView/>
      <ChatView/>
      <ChatView/>
      <ChatView/>
      <ChatView/>
      <ChatView/>
      <ChatView/>
      <ChatView/>
      <ChatView/>
      <ChatView/>
      <ChatView/>
      </div>
      </div>

    
    </>
  );
};

export default Notification;
