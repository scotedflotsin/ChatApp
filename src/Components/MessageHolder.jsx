import React, { useState } from "react";

const MessageHolder = () => {
  const [isSender, setSender] = useState(true);
  return (
    <>
      <div>
        {isSender ? (
          <div className="flex-col flex items-start mt-[9px]">
            <div className="relative flex items-end mx-[13px]">
              <div className="w-[15px] h-[15px] RevIndicatorColor rounded-full absolute bottom-[-8px] left-[6px]"></div>
              <p className="ml-[25px] reciver">Hey you There</p>
            </div>
            <p className="roboto-sub ml-[50px] text-[14px] font-normal">
              Today, 8.30pm
            </p>
          </div>
        ) : (
          <div className="flex-col flex items-end mt-[9px]">
            <div className="relative flex items-end mx-[13px]">
              <div className="w-[15px] h-[15px] SenIndicatorColor rounded-full absolute bottom-[-8px] right-[6px]"></div>
              <p className="mr-[25px] sender">I am fine and how are you?</p>
            </div>
            <p className="roboto-sub mr-[50px] text-[14px] font-normal">
              Today, 8.30pm
            </p>
          </div>
        )}

        {/* UI for sender */}

        {/* UI for reciver */}
      </div>
    </>
  );
};

export default MessageHolder;
