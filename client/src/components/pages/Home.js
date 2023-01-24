import React from "react";
import NavBar from "../modules/NavBar";
import { Text, Box, Flex, Center, Heading } from "@chakra-ui/react";

const Homepage = () => {
    return (
        <>
            <NavBar />
            <Flex direction={"columns"} justifyContent={"center"} alignContent={"center"} padding={'72'}>
                <Heading>
                    <Text fontWeight={"bold"} fontSize="6xl" letterSpacing={"wide"}>
                        PASS THE PLATE
                    </Text>
                </Heading>
            </Flex>
        </>
    )
}

export default Homepage;