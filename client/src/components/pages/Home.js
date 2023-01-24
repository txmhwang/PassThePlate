import React from "react";
import NavBar from "../modules/NavBar";
import { Text, Box, Flex, Center, Heading } from "@chakra-ui/react";
import Popup from "../modules/Popup";

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
                
                {/* The button here will create a pop-up window and asks the users to input a recipe */}
                <Popup />
            </Flex>
        </>
    )
}

export default Homepage;