import React, { useEffect, useState } from "react";
import profile from "../assets/profileImage.png";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiFolderUserFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";

const Profile = () => {
  const [userData, setuserData] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [name, setname] = useState("");

 

  useEffect(() => {
    try {
      const cooki = document.cookie;
      const token = cooki.slice(5);
      console.log(token);
      const decode = jwtDecode(token);
      setEmail(decode.data.email);
      setname(decode.data.name);
      setUserName(decode.data.username);
      setPasword(decode.data.password);
    } catch (err) {
      console.log(err.message);
    }
  },[]);



  return (
    <>
      <div className="w-[100vw] h-[95vh] mt-[2.5vh] mb-[2.5vh] ml-[2.5vh] flex-col">
        <h1 className="text-[40px] font-bold w-[100%]">Welcome Harsh Verma,</h1>
        <div className="sm:w-[350px] lg:w-[500px] max-sm-[400px]:w-[279px] m-auto mt-[70px] overflow-hidden">
          <div className="flex justify-center flex-col  items-center">
            <img
              src={profile}
              alt=""
              className="bg-red-500 rounded-full w-[100px]"
            />
            <button className="bg-[var(--sidebarColor)] px-[20px] py-[7px] text-white rounded-[18px] m-[10px]">
              Change
            </button>
          </div>
          <div className="flex-col gap-[10px] flex mt-[50px]">
            <div className="flex items-center gap-[10px] border-[1px] p-[10px]">
              <MdEmail className="text-[var(--sidebarColor)] text-[24px]" />
              <input
              onChange={(e)=>setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="Email or Username"
                className="outline-none border-none flex-grow"
              />
            </div>
            <div className="flex items-center gap-[10px] border-[1px] p-[10px]">
              <FaUser className="text-[var(--sidebarColor)] text-[24px]" />
              <input
                onChange={(e)=>setname(e.target.value)}
                value={name}
                type="text"
                placeholder="Your Name"
                text="Harsh Verma"
                className="outline-none border-none flex-grow"
              />
            </div>
            <div className="flex items-center gap-[10px] border-[1px] p-[10px]">
              <RiFolderUserFill className="text-[var(--sidebarColor)] text-[24px]" />
              <input
                 onChange={(e)=>setUserName(e.target.value)}
                 value={userName}
                type="text"
                placeholder="@Username"
                text="@harryverma"
                className="outline-none border-none flex-grow"
              />
            </div>
            <div className="flex items-center gap-[10px] border-[1px] p-[10px]">
              <RiLockPasswordFill className="text-[var(--sidebarColor)] text-[24px]" />
              <input
              onChange={(e)=>setPasword(e.target.value)}
                value={password}
                type="password"
                placeholder="Old password"
                className="outline-none border-none flex-grow"
              />
            </div>
            <div className="flex items-center gap-[10px] border-[1px] p-[10px]">
              <RiLockPasswordFill className="text-[var(--sidebarColor)] text-[24px]" />
              <input
                type="password"
                placeholder="New Password"
                className="outline-none border-none flex-grow"
              />
            </div>
            <button className="cursor-not-allowed bg-[var(--subTextColor)] text-white p-[10px] rounded-full mt-[20px]">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
