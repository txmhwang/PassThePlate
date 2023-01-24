import React from "react";
import { useState } from "react";
import { Flex, Text, Heading, Input, InputGroup, Stack, InputRightElement, Button, VStack, useEditableState, Center } from "@chakra-ui/react";
import Nav from "../modules/NavBar";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [show, setShow] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    // these are the states used to sign in for the login
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState("");


    // these are the states used to create a new account
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPass, setSignupPass] = useState("");
    const [signupError, setSignupError] = useState(false);
    const [signupErrorMessage, setSignupErrorMessage] = useState("");


    const showPassword = () => {setShow(!show)}
    const showSignUpPassword = () => {setShowSignUp(!showSignUp)}


    let navigator = useNavigate();

    const login = () => {
        // TODO: We are going to validate whether or not the user exists within our database. If it is we go back to the homepage
        if (loginEmail.includes("@")) {
            // We also need to check if this email already exists in the database.
            console.log(loginEmail);
            console.log(loginPass);
            navigator("/");
        }
        else {
            setLoginError(true);
            setLoginErrorMessage("This is an invalid email address.");
        }
    }

    const signup = () => {
        let parameters = [firstName, lastName, signupEmail, signupPass];
        let empty = false;

        function isEmpty(item){
            empty = item.trim().length === 0;
        }
        parameters.forEach(isEmpty);

        if (empty) {
            setSignupError(true);
            setSignupErrorMessage("Some parameters are not filled.");
        }
    }

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
                            <Input variant={"outline"} placeholder={"Email"} onChange={(e) => setLoginEmail(e.target.value)} />
                        </InputGroup>

                        <InputGroup>
                            <Input variant={"outline"} placeholder={"Password"} type={show ? "text" : "password"} onChange={
                                (e) => setLoginPass(e.target.value)
                            }/>
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={showPassword}>
                                    {show ? "show": "hide"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Button onClick={login}>
                            Sign In
                        </Button>
                        <Center>
                            <Text>
                                {loginError ? loginErrorMessage: ""}
                            </Text>
                        </Center>
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
                            <Input variant={"outline"} placeholder={"First Name"} onChange={(e) => {setFirstName(e.target.value)}}/>
                            <Input variant={"outline"} placeholder={"Last Name"} onChange={(e) => {setLastName(e.target.value)}}/>
                        </InputGroup>

                        <InputGroup>
                            <Input variant={"outline"} placeholder={"Email"} onChange={(e) => {setSignupEmail(e.target.value)}}/>
                        </InputGroup>

                        <InputGroup>
                            <Input variant={"outline"} placeholder={"Password"} type={showSignUp ? "text" : "password"} onChange={
                                (e) => setSignupPass(e.target.value)
                            }/>
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={showSignUpPassword}>
                                    {showSignUp ? "show": "hide"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>

                        <Button onClick={signup}>
                            Sign Up
                        </Button>
                        <Text>
                            {signupError ? signupErrorMessage: ""}
                        </Text>
                    </VStack>
                </Flex>
            </Flex>
        </>
        
    )
}

export default LoginPage;