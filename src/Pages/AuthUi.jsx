import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiFolderUserFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

const AuthUi = () => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [authType, setAuthType] = useState(true); // true for signup and false for login!
  const requestUrl = "http://localhost:3000/api/auth";
  const [resMessage, setResMessage] = useState("");
  const [loginMessage, setloginMessage] = useState("");
  const navigate = useNavigate();
  const changeAuth = () => {
    clearform();
    setAuthType(!authType);
  };

  const signUpRequest = () => {
    return new Promise((resolve, reject) => {
      axios
        .post(requestUrl, {
          email: email,
          name: name,
          username: username,
          password: password,
        })
        .then((res) => {
          if (res.data.code == 503) {
            setResMessage("This email already taken!");
            reject("ERROR");
          } else if (res.data.code == 501) {
            setResMessage(res.data.message.toString());
            reject("ERROR");
          } else {
            //all set
            Cookies.set("auth", res.data.data.toString());
            resolve("SignUp done");
            setTimeout(() => {
              navigate("/profile");
            }, 2000);
          }
        })
        .catch((err) => {
          setResMessage("TEMP" + err.message);
          reject("ERROR BUT REQUEST DONE");
        });
    });
  };

  const onSignup = () => {
    if (validateEmail(email) && username && name && password && authType) {
      toast.promise(
        signUpRequest(), // Make sure this returns a proper Promise
        {
          pending: "Signing up...", // Message while waiting
          success: "Signup successful!", // Message on success
          error: resMessage.toString(),
        },
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        }
      );
    } else {
      toast.error("All feild required*");
    }
  };

  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const loginIn = () => {
    return new Promise((resolve, reject) => {
      console.log(`${requestUrl}?mode=${email}&password=${password}`);
      axios
        .get(
          `${requestUrl}?mode=${encodeURIComponent(
            email
          )}&password=${encodeURIComponent(password)}`
        )
        .then((res) => {
          if (res.data.code == 201) {
            Cookies.set("auth", res.data.data.token.toString());
            //   console.log(res.data.data.token.toString());
            resolve("Login Done");
            setTimeout(() => {
              navigate("/profile");
            }, 2000);
          } else {
            setloginMessage(res.data.message);
            reject("DONE");
          }
        })
        .catch((err) => {
          setloginMessage(err.message);
          reject("ERROR");
        });
    });
  };

  const onLogin = () => {
    //validate values
    if (email && password) {
      toast.promise(
        loginIn(), // Make sure this returns a proper Promise
        {
          pending: "Login...", // Message while waiting
          success: "Login successful!", // Message on success
          error: loginMessage.toString(),
        },
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        }
      );
    } else {
      alert("Login failed");
    }
  };

  function clearform() {
    setUserName("");
    setEmail("");
    setPassword("");
    setName("");
  }

  return (
    <>
      <div className="w-[100vw] h-[95vh] mt-[2.5vh] mb-[2.5vh] ml-[2.5vh] flex justify-center items-center flex-col">
        <ToastContainer />
        <h1 className="text-[40px] font-bold w-[100%]">
          Join<span className="text-[var(--sidebarColor)]"> Harsh's</span> Chat
          Now
        </h1>
        <h1 className="w-[100%] text-left">
          Welcome to harsh's Chat app Harsh's <br /> Chat offer your to and
          video call and power of sharing multi media elements, more...
        </h1>
        <div className="flex flex-col basis-[50%] gap-[10px] m-auto">
          <p className="text-[26px] font-medium">
            {authType ? "OnBoard Now" : "Login Now"}
          </p>
          <form noValidate>
            <div className="flex items-center gap-[10px] border-[1px] p-[10px]">
              <MdEmail className="text-[var(--sidebarColor)] text-[24px]" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                pattern=".*"
                type="text"
                placeholder="Email or Username"
                className="outline-none border-none"
              />
            </div>
            <div
              className={`${
                authType ? "visible" : "hidden"
              } flex items-center gap-[10px] border-[1px] p-[10px]`}
            >
              <FaUser className="text-[var(--sidebarColor)] text-[24px]" />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                pattern=""
                placeholder="Your Name"
                className={"outline-none border-none input"}
              />
            </div>
            <div
              className={`${
                authType ? "visible" : "hidden"
              } flex items-center gap-[10px] border-[1px] p-[10px]`}
            >
              <RiFolderUserFill className="text-[var(--sidebarColor)] text-[24px]" />
              <input
                onChange={(e) => setUserName(e.target.value)}
                value={username}
                type="text"
                pattern=".*"
                placeholder="@Username"
                className="outline-none border-none"
              />
            </div>
            <div className="flex items-center gap-[10px] border-[1px] p-[10px]">
              <RiLockPasswordFill className="text-[var(--sidebarColor)] text-[24px]" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                pattern=".*"
                placeholder="Password"
                className="outline-none border-none"
              />
            </div>
          </form>
          <p className="cursor-pointer">{`${
            authType ? "Forget password" : "Password privacy"
          }`}</p>
          <div className="flex flex-col gap-[10px] mt-[10px]">
            <button
              onClick={authType ? onSignup : onLogin}
              className={`${
                authType
                  ? "bg-[var(--sidebarColor)] text-white rounded-md font-semibold p-[10px]"
                  : "border-[1px] border-[var(--sidebarColor)] rounded-md font-semibold p-[10px] text-[var(--sidebarColor)]"
              }`}
            >
              {authType ? "Signup" : "Login"}
            </button>
            <button
              onClick={changeAuth}
              className={`${
                authType
                  ? "border-[1px] border-[var(--sidebarColor)] rounded-md font-semibold p-[10px] text-[var(--sidebarColor)]"
                  : "bg-[var(--sidebarColor)] text-white rounded-md font-semibold p-[10px]"
              }`}
            >
              {authType ? "Login" : "On bording"}
            </button>
          </div>
          <p className="font-semibold text-center mt-[20px]">
            By accepting our{" "}
            <span className="text-blue-600 cursor-pointer">Privacy Policy</span>{" "}
            and <span className="text-blue-600 cursor-pointer">T&C</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default AuthUi;
