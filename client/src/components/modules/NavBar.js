import React, { useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  Center,
  Text,
  Image,
} from "@chakra-ui/react";
import { Link as ReachLink, useNavigate } from "react-router-dom";
import Logo from "../../public/logo.png";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { get, post } from "../../utilities.js";

const ProfileButton = ({ handleLogout, navigate }) => {
  const [username, setUsername] = useState("");

  get("api/whoami").then((user) => {
    setUsername(user["name"]);
  });
  return (
    <Menu>
      <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
        <Avatar size={"sm"} src={"../../public/profile.png"} />
      </MenuButton>
      <MenuList alignItems={"center"}>
        <br />
        <Center>
          <Avatar size={"2xl"} src={"https://avatars.dicebear.com/api/male/username.svg"} />
        </Center>
        <br />
        <Center>
          <p>{username}</p>
        </Center>
        <br />

        <MenuDivider />

        <MenuItem
          onClick={() => {
            googleLogout();
            handleLogout();
          }}
        >
          Logout
        </MenuItem>
        <MenuItem
          onClick={() => {
            // it will move to the profile page
            navigate("/profile");
          }}
        >
          Profile
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default function Nav({ userId, handleLogin, handleLogout }) {
  const [login, setLogin] = useState(false);
  const GOOGLE_ID = "668738587624-o4h3p0v6hpvm7vt82dr84stiefinjnfq.apps.googleusercontent.com";
  let navigate = useNavigate();
  return (
    <>
      <Box bg={useColorModeValue("whiteAlpha.100", "whiteAlpha.900")} px={4}>
        {" "}
        {/* */}
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* <Box>Logo</Box> */}
          <Box boxSize={"50px"}>
            <a href="/">
              <Image src={Logo} />
            </a>
          </Box>

          <Flex alignContent={"center"}>
            <Stack direction={"row"} spacing={7} justifyContent={"center"}>
              {/* THE FEED LINK */}
              <Link as={ReachLink} to="/feed">
                <Text fontWeight={"bold"}>Feed</Text>
              </Link>

              {/* THE EXPLORE LINK */}
              <Link as={ReachLink} to="/explore">
                <Text fontWeight={"bold"}>Explore</Text>
              </Link>
              <GoogleOAuthProvider clientId={GOOGLE_ID}>
                {userId ? (
                  <ProfileButton handleLogout={handleLogout} navigate={navigate} />
                ) : (
                  <GoogleLogin
                    type="icon"
                    shape="circle"
                    onSuccess={handleLogin}
                    onError={(err) => console.log(err)}
                  />
                )}
              </GoogleOAuthProvider>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
