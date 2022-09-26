import "./App.css";
import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import io from "socket.io-client";
import ChatHome from "./Components/Chat/chatHome/ChatHome";
import ChatApp from "./Components/Chat/chatApp/ChatApp";
import TopBar from "./Components/topBar/TopBar";
import AboutUsPage from "./Pages/aboutUsPage/AboutUsPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import LoginPage from "./Pages/loginPage/LoginPage";
import WeatherPage from "./Pages/WeatherPage/WeatherPage";

const socket = io.connect("https://whispering-headland-00234.herokuapp.com");


function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const isAuth = localStorage.getItem("authorized");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutUsPage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route
          path="/chat"
          element={
            <>
              {isAuth ? null : <Navigate replace to="/sign-up" />}
              <TopBar />
              <ChatHome
                username={username}
                setUsername={setUsername}
                room={room}
                setRoom={setRoom}
                socket={socket}
                chatname={localStorage.getItem("userName")}
              />
            </>
          }
        />
        <Route
          path="/chatapp"
          element={
            <>
              {isAuth ? null : <Navigate replace to="/" />}
              <TopBar />
              <ChatApp
                username={username}
                room={room}
                socket={socket}
                chatname={localStorage.getItem("userName")}
              />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              {!isAuth ? null : <Navigate replace to="/" />}
              <RegisterPage />
            </>
          }
        />

        <Route path="/sign-up" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
export default App;
