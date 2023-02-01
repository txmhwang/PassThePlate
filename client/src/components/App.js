import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import jwt_decode from "jwt-decode";

import NavBar from "./modules/NavBar.js";
import Explore from "./pages/Explore.js";
import Feed from "./pages/Feed.js";
import Homepage from "./pages/Homepage.js"
import NotFound from "./pages/NotFound.js";
// import Skeleton from "./pages/Skeleton.js";

import "../utilities.css";
import Homepage from "./pages/Home.js";
import LoginPage from "./pages/Login.js";
import Feed from "./pages/Feed.js";
import Explore from "./pages/Explore.js";
import Profile from "./pages/Profile.js";

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

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (
    <>
      <Router>
        <Skeleton path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
