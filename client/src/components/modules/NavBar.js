import React, { useState } from 'react';
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
  Image
} from '@chakra-ui/react';
import { Link as ReachLink, useNavigate } from 'react-router-dom';
import Logo from "../../public/logo.png";

export default function Nav({loggedIn}) {
  
    const [login, setLogin] = useState(false);
    let navigate = useNavigate();
  return (
    <>
      <Box bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.900')} px={4}> {/* */}
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* <Box>Logo</Box> */}
          <Box boxSize={"50px"}> 
            <a href="/">
              <Image src={Logo}/>
            </a>
          </Box>


          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
                {/* THE FEED LINK */}
                <Link as={ReachLink} to="/feed">
                    <Text fontWeight={"bold"}>
                        Feed
                    </Text>
                </Link>

                {/* THE EXPLORE LINK */}
                <Link as={ReachLink} to="/explore">
                    <Text fontWeight={"bold"}>
                        Explore
                    </Text>
                </Link>

              <Menu>
                <MenuButton
                  onClick={() => {!login ? navigate("/login"): console.log(login)}}
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  
                  <Avatar
                      size={'sm'}
                      src={'../../public/profile.png'}
                  />

                  </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}