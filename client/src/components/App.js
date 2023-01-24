import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import jwt_decode from "jwt-decode";

import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";

import "../utilities.css";
import Homepage from "./pages/Home.js";

import { socket } from "../client-socket.js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { get, post } from "../utilities";

import {Fonts} from './Fonts'

const theme = extendTheme({
  fonts: {
    heading: 'Open Sans',
    body: 'Raleway',
  },
})

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
    <ChakraProvider theme={theme}>
      <Fonts />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage/>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ChakraProvider>

  );
};

export default App;
