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
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text
} from '@chakra-ui/react';
import { Link as ReachLink, useNavigate } from 'react-router-dom';

export default function Nav({loggedIn}) {
  
    const [login, setLogin] = useState(false);
    let navigate = useNavigate();
  return (
    <>
      <Box bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Logo</Box>


          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
                {/* THE FEED LINK */}
                <Link as={ReachLink} to="/Feed">
                    <Text fontWeight={"bold"}>
                        Feed
                    </Text>
                </Link>

                {/* THE EXPLORE LINK */}
                <Link as={ReachLink} to="/Explore">
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
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
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
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
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