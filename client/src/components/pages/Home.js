import React from "react";
import {
  Text,
  Box,
  Flex,
  Center,
  Heading,
  Image,
  Button,
  ButtonGroup,
  Input,
} from "@chakra-ui/react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Popup from "../modules/Popup";
import PlateRight from "../../public/plate_right.png";
import PlateLeft from "../../public/plate_left.png";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router";

const Homepage = () => {
  const [animate, setAnimate] = useState(false);
  const x = useMotionValue(0);
  const time = 2000; // this is in miliseconds
  let navigate = useNavigate();

  const xTrans = useTransform(x, [-100, 0], ["-100%", "0%"]);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <GoogleOAuthProvider>
      <Box position="relative">
        {/* This is for the right */}
        <Flex zIndex={-1} position="absolute">
          <motion.img
            src={PlateRight}
            alt="Plate Left"
            style={{ x: animate ? xTrans : 0 }}
            animate={{ x: animate ? windowSize.current[0] / 2 - 8.5 : 0 }}
            transition={{ duration: time / 1000 }}
          />
        </Flex>

        <Flex position="absolute" right={0} top={0} zIndex={-1}>
          <motion.img
            src={PlateLeft}
            alt="Plate Left"
            style={{ x: animate ? -xTrans : 0 }}
            animate={{ x: animate ? -windowSize.current[0] / 2 + 8.5 : 0 }}
            transition={{ duration: time / 1000 }}
          />
        </Flex>

        <Flex direction={"column"} zIndex={1}>
          <Flex direction={"columns"} justifyContent={"center"} padding={"72"}>
            <Heading>
              <Text fontWeight={"bold"} fontSize="6xl" letterSpacing={"wide"}>
                {!animate ? "PASS THE PLATE" : ""}
              </Text>
            </Heading>
          </Flex>
          {!animate ? (
            <Flex position={"absolute"} ml={"46%"} mt={"40%"}>
              <Button
                onClick={() => {
                  setAnimate(true);
                  setTimeout(() => {
                    navigate("/feed");
                  }, time);
                }}
              >
                <Text letterSpacing={"wide"}>Make Recipe</Text>
              </Button>
            </Flex>
          ) : (
            <></>
          )}
        </Flex>
      </Box>
    </GoogleOAuthProvider>
  );
};

export default Homepage;
