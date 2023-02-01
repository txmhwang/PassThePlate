import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import jwt_decode from "jwt-decode";

import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";

import "../utilities.css";
import Homepage from "./pages/Home.js";
import LoginPage from "./pages/Login.js";
import Feed from "./pages/Feed.js";
import Explore from "./pages/Explore.js";
import Profile from "./pages/Profile.js";
import Friends from "./pages/Friends.js";

import { socket } from "../client-socket.js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { get, post } from "../utilities";

import { Fonts } from "./Fonts";
import NavBar from "./modules/NavBar";

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
});

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);
  const [userName, setUserName] = useState(undefined);
  const [userFriends, setUserFriends] = useState([]);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
        setUserName(user.name);
        setUserFriends(user.friends);
      }
    });
  }, []);

  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      setUserName(user.name);
      setUserFriends(user.friends);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    setUserName(undefined);
    setUserFriends([]);
    post("/api/logout");
  };

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/feed" element={<Feed userId={userId} name={userName} />} />
        <Route path="/explore" element={<Explore userId={userId} name={userName} />} />
        <Route path="/friends" element={<Friends userId={userId} friends={userFriends} />} />
        <Route path={`/profile/${userId}`} element={<Profile />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
