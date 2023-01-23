import React from "react";
import NavBar from "../modules/NavBar";
import { Text, Box, Flex, Center } from "@chakra-ui/react";

const Homepage = () => {
    return (
        <>
            <NavBar />
            <Flex direction={"columns"} justifyContent={"center"} alignContent={"center"} w="100%" h="100%"> 
                <Text>
                    Home
                </Text>
            </Flex>
        </>
    )
}

export default Homepage;