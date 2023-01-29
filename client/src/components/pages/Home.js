import React from "react";
import { Text, Box, Flex, Center, Heading, Image } from "@chakra-ui/react";
import Popup from "../modules/Popup";
import PlateRight from "../../public/plate_right.png";
import PlateLeft from "../../public/plate_left.png";

const Homepage = () => {
    return (
        <Box position="relative">
            {/* This is for the right */}
            <Flex zIndex={-1} bg={"red"}> 
                <Image src={PlateRight} position="absolute" />
            </Flex>
            <Box position="absolute" right={0} top={0} zIndex={-1}>
                <Image src={PlateLeft}/>
            </Box>
            <Box zIndex={1}>
                <Flex direction={"columns"} justifyContent={"center"} padding={"72"}>
                    <Heading>
                        <Text fontWeight={"bold"} fontSize="6xl" letterSpacing={"wide"}>
                            PASS THE PLATE
                        </Text>
                    </Heading>
                </Flex>
            </Box>
        </Box>
    )
}

export default Homepage;