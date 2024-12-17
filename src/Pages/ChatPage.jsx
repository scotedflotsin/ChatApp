import React, { useEffect, useState } from "react";
import ChatView from "../Components/ChatView";
import SearchBar from "../Components/SearchBar";
import ChatTopBar from "../Components/ChatTopBar";
import MessageHolder from "../Components/MessageHolder";
import TypingBar from "../Components/TypingBar";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { getIdFormToken } from "../Utils/getLoggoedId.js";

const ChatPage = () => {
  const [contacts, setContact] = useState([]);
  const requestUrl = "http://localhost:3000/api/getContact?userID=";
  try {
    const { id } = useParams();
    const location = useLocation();
    const { userWIthId2 } = location.state || {};

    console.log("SECOND ID" + userWIthId2);
  } catch (err) {
    //ignore error.
  }

  // useEffect(async () => {
  //   //getIdFormToken();
  //   if (getIdFormToken()) {
  //     //make request to get contact list
  //     const res = await axios.get(`${requestUrl}${getIdFormToken()}`);
  //     console.log(`${requestUrl}${getIdFormToken()}`);
  //     if (res.data) {
  //       console.log(res.data.data);
  //       setContact(res.data.data);
  //     } else {
  //       alert("Server error");
  //     }
  //   } else {
  //     alert("Token Error..");
  //   }
  // }, []);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <>
      <div className="w-[90vw]  h-[95vh] mt-[2.5vh] m-[1.5vw] rounded-md flex flex-wrap">
        <div className="basis-[43%] visible">
          <div className="bg-white overflow-auto h-[95vh] custom-scrollbar pl-[10px] pr-[10px] pt-[2px] pb-[3px]">
            <div>
              <SearchBar />
            </div>
            <div className="search-bar-shadow  rounded-[15px] mt-[20px] p-[10px] h-[88vh]">
              <p className="text-[22px] roboto-head font-semibold mt-[14px] ml-[3px]">
                People
              </p>
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
              <ChatView />
            </div>
          </div>
        </div>
        <div className="relative basis-[57%] bg-white search-bar-shadow rounded-[15px]">
          <div className="absolute top-0 left-0 right-0">
            <ChatTopBar />
          </div>
          <div className="absolute mt-[77px] left-0 right-0">
            <MessageHolder />
          </div>
          <div className="bottom-0 left-0 absolute right-0">
            <TypingBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
