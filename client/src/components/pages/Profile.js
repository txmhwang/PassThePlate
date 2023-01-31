import React from "react";
import { Center, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

const Profile = () => {
  const profileLeftWidth = "35%";
  return (
    <Flex direction={"row"}>
      <Flex direction={"columns"}>
        {/* An image of the person */}
        <Flex
          height={"35%"}
          width={profileLeftWidth}
          position={"fixed"}
          top={"10%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            borderRadius={"full"}
            src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
        </Flex>

        {/* About me section */}
        <Flex
          height={"40%"}
          width={profileLeftWidth}
          position={"fixed"}
          top={"45%"}
          direction={"column"}
        >
          <Flex direction={"column"} ml="9" mt="10">
            <Center>
              <Heading>
                <Text>About me</Text>
              </Heading>
            </Center>
            <Center>
              <Text>Content</Text>
            </Center>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction={"columns"}>
        {/* Name of the person */}

        {/* A subset of recipes that the user has */}

        {/* A list of recipes that the uers liked */}
      </Flex>
    </Flex>
  );
};

export default Profile;
