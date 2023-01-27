import React from "react";
import { NewRecipe, NewPostInput } from "./NewRecipeInput";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'


const Popup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
    <>
        <Button onClick={onOpen} className="u-text">I have a recipe...</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader className="u-text u-toppad">Add a New Recipe</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <NewRecipe />
            </ModalBody>

            <ModalFooter>
                {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
                </Button> */}
                {/* <Button variant='ghost'>Submit</Button> */}
            </ModalFooter>
            </ModalContent>
        </Modal>
    </>
    )
}

export default Popup;