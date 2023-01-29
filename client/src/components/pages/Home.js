import React from "react";
import NavBar from "../modules/NavBar";
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
                <NavBar />
                <Flex direction={"columns"} justifyContent={"center"} padding={"72"}>
                    <Heading>
                        <Text fontWeight={"bold"} fontSize="6xl" letterSpacing={"wide"}>
                            PASS THE PLATE
                        </Text>
                    </Heading>
                </Flex>
            </Box>
            {/* This is for the  */}


            <Box zIndex={2}>

                {/* <div>
                    <Popup/>
                </div> */}
            </Box>

        </Box>
    )
}

export default Homepage;