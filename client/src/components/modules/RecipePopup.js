import React from "react";
import { useEffect, useState } from "react";
import { NewComment } from "./NewRecipeInput";
import { post, get } from "../../utilities";
import SingleComment from "./SingleComment";
import PostHeader from "./PostHeader";
import CommentsBlock from "./Commentsblock";

import food from "../../public/food.jpg";
import pfp from "../../public/profile.png";

/**
 * Proptypes
 * @param {string} recipe_id
 * @param {string} creator_id
 * @param {string} creator_name
 * @param {string} name
 * @param {string} ingredients
 * @param {string} instructions
 */

import "./Card.css"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'

  /**
 * New Recipe is a New Post component for comments
 *
 * Proptypes
 * @param {string} creator_id
 * @param {string} creator_name
 * @param {string} recipe_id
 * @param {string} name
 * @param {string} ingredients
 * @param {string} instructions
 */

const RecipePopup = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState('full')
  const [comments, setComments] = useState([]);

  useEffect(() => {
    get("/api/comment", { parent: props.recipe_id }).then((commentObjs) => {
      setComments(commentObjs);
    });
  }, []);

  // this gets called when the user pushes "Submit", so their
  // post gets added to the screen right away
  // const addNewComment = (commentObj) => {
  //   setComments(comments.concat([commentObj]));
  // };
  const addNewComment = (commentObj) => {
    setComments([commentObj].concat(comments));
  };

  let commentsList = null;
  if(comments.length === 0) {
    commentsList = <div></div>
  } else {
    commentsList = comments.map((CommentObj) => {
      <SingleComment 
      key={`SingleComment_${CommentObj._id}`}
      creator_id={CommentObj.creator_id} 
      creator_name={CommentObj.creator_name} 
      parent={CommentObj.recipe_id} 
      content={CommentObj.content} 
      rating={CommentObj.rating} 
      hours={CommentObj.hours}/>
    });
  }

 
 

  return (
  <>
      <img onClick={onOpen} className="u-text" src={food}/>

      <Modal isOpen={isOpen} onClose={onClose} size={size}>
          <ModalOverlay />
          <ModalContent>
              <div className="Popup-creator-container">
                  <PostHeader creator_id={props.creator_id} creator_name={props.creator_name}/>
              </div>
          <ModalCloseButton />
          <ModalBody>
              <div className="Card-recipeImage">
                  <img src={food} />
              </div>
              <h1 className="Card-RecipePopup">{props.name}</h1>
              <div className="Card-RecipeBlock"> 
                  <h3 className="Card-RecipeLabels">Ingredients</h3>
                  {props.ingredients}
              </div>
              <div className="Card-RecipeBlock">
                  <h3 className="Card-RecipeLabels">Instructions</h3>
                  {props.instructions}
              </div>
              <hr/>
              <div>
                  <h3 className="Card-RecipeLabels">Comments</h3>
                  <div className="Card-NewComment">
                      <NewComment 
                      recipe_id={props.recipe_id} 
                      addNewComment={addNewComment} 
                      /> 
                  </div>
                  <div className="Card-commentsblock">                     
                      <CommentsBlock
                      comments = {comments}
                      />
                  </div>
                  
                  
              </div>
              
          </ModalBody>

          <ModalFooter>
          </ModalFooter>
          </ModalContent>
      </Modal>
  </>
  )
}

export default RecipePopup;