import React, { useEffect, useState } from "react";
import {
  Center,
  Flex,
  Heading,
  Image,
  Icon,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { get, post } from "../../utilities";
import { TiPencil } from "react-icons/ti";
import { _ } from "core-js";

const AddButton = ({ userId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [content, setContent] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [userContent, setUserContent] = useState("");
  const [userData, setUserData] = useState(undefined);

  get("/api/users").then((users) => {
    let user = users.find((item) => item._id === userId);
    if (userData === undefined) {
      setUserData(user);
    }
    if (isEmpty && user.contents !== "") {
      setIsEmpty(false);
      setContent(user.contents);
    }
  });

  return (
    <>
      {console.log(content)}
      <Text>{isEmpty ? "There is nothing about me :(" : content}</Text>
      <Flex>
        <Button bg={"green.100"} onClick={onOpen}>
          <Icon as={TiPencil} w={5} h={5} />
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit About Me</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>About me</FormLabel>
                <Textarea
                  placeholder="Put things about yourself :)"
                  onChange={(e) => {
                    setUserContent(e.target.value);
                  }}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button
                onClick={() => {
                  onClose();
                  // we want to submit our content to our user
                  let data = { _id: userId, contents: userContent };
                  post("/api/aboutme", data).then((promise) => {
                    // we know the promise this returns is the updated version of the user
                    if (promise.contents === "") {
                      setIsEmpty(true);
                    } else {
                      setIsEmpty(false);
                      setContent(promise.contents);
                      setUserData(promise);
                    }
                  });
                }}
                variant="ghost"
              >
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
};

const Profile = () => {
  const [userId, setUserId] = useState("");
  useEffect(() => {
    get("/api/whoami").then((user) => {
      setUserId(user._id);
    });
  });

  const profileLeftWidth = "35%";
  const profileRightWidth = "65%";
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
              <Flex
                direction={"row"}
                justifyContent={"space_between"}
                alignItems={"center"}
                gap={4}
              >
                <AddButton userId={userId} />
              </Flex>
            </Center>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction={"columns"}>
        {/* Name of the person */}
        <Flex
          height={"30%"}
          width={profileRightWidth}
          position="fixed"
          left={profileLeftWidth}
          top={"10%"}
          bg="red"
        ></Flex>

        {/* A subset of recipes that the user has */}

        {/* A list of recipes that the uers liked */}
      </Flex>
    </Flex>
  );
};

export default Profile;
