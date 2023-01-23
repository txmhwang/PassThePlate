import React from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Text } from '@chakra-ui/react';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Logo</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Center>
              <Text fontWeight={'bold'}>
                Feed
              </Text>
              </Center>

              <Center>
              <Text fontWeight={'bold'}>
                Explore
              </Text>
              </Center>

              {/* Going to create the router and navigation bar right here */}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}