import React from "react";
import { NewRecipe } from "./NewRecipeInput";
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

  /**
 * New Recipe is a New Post component for comments
 *
 * Proptypes
 * @param {string} creator_id is the userID passed onto newRecipe
 * @param {string} creator_name is the user name passed onto newRecipe
 */

const Popup = (props) => {
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
                <NewRecipe 
                // creator_id = {props.creator_id} creator_name={props.creator_name} 
                addNewRecipe = {props.addNewRecipe}/>
            </ModalBody>

            </ModalContent>
        </Modal>
    </>
    )
}

export default Popup;