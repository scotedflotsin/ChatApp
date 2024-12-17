import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import ChatPage from "./Pages/ChatPage";
import AuthUi from "./Pages/AuthUi";
import Profile from "./Pages/Profile";
import Notification from "./Pages/Notification";
import Settings from "./Pages/Settings";
import Search from "./Pages/Search";
import {createAccount} from "./AcountCreation.js";


const App = () => {
// const hey =  createAccount();
  const [logged, setLogged] = useState(false);

  useState(() => {
    if (document.cookie) {
      console.log("Runnning");
      setLogged(true);
    } else {
      setLogged(false);
      console.log("Runnning");
    }
  }, []);

  return (
    <>
      <div className="h-[100vh] flex flex-row">
        <Router>
          <SideBar logged={logged} />
          <Routes>
            <Route path="/chat/:id?" element={<ChatPage />} />
            <Route path="/auth" element={<AuthUi />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
