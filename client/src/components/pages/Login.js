import React from "react";
import { useState } from "react";
import { Box, Flex, Text, Heading, Input, InputGroup, Stack, InputRightElement, Button, VStack, HStack } from "@chakra-ui/react";
import Nav from "../modules/NavBar";

const LoginPage = () => {
    const [show, setShow] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const showPassword = () => {setShow(!show)}
    const showSignUpPassword = () => {setShowSignUp(!showSignUp)}


    return (
        <>
            <Nav />
            <Flex h="container.sm" alignItems={"center"} justifyContent="center" direction={"row"}>
                <Flex p={"36"} direction={"column"}>
                    <Stack spacing={4}>
                        <Heading>
                            <Text>
                                ALREADY HAVE AN ACCOUNT?
                            </Text>
                        </Heading>
                        <InputGroup>
                            <Input variant={"outline"} placeholder={"Email"}/>
                        </InputGroup>

                        <InputGroup>
                            <Input variant={"outline"} placeholder={"Password"} type={show ? "text" : "password"}/>
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={showPassword}>
                                    {show ? "show": "hide"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </Stack>
                </Flex>
                <Flex p={"36"} direction={"column"}>
                    <VStack spacing={4}>
                        <Heading>
                            <Text>
                                NEW HERE! Sign up here :)
                            </Text>
                        </Heading>
                        <InputGroup>
                            <Input variant={"outline"} placeholder={"First Name"}/>
                            <Input variant={"outline"} placeholder={"Last Name"}/>
                        </InputGroup>

                        <InputGroup>
                            <Input variant={"outline"} placeholder={"Email"}/>
                        </InputGroup>

                        <InputGroup>
                            <Input variant={"outline"} placeholder={"Password"} type={showSignUp ? "text" : "password"}/>
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={showSignUpPassword}>
                                    {showSignUp ? "show": "hide"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </VStack>
                </Flex>
            </Flex>
        </>
        
    )
}

export default LoginPage;