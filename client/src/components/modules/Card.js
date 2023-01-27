import React, { useEffect, useState } from "react";
import SingleComment from "./SingleComment";
import SingleRecipe from "./SingleRecipe";
import { NewComment } from "./NewRecipeInput";
import { post, get } from "../../utilities";
import CommentsBlock from "./Commentsblock";

import "./Card.css";
/**
 * Proptypes
 * @param {string} recipe_id
 * @param {string} creator_id
 * @param {string} creator_name
 * @param {string} name
 * @param {string} ingredients
 * @param {string} instructions
 */

const Card = (props) => {
    const [comments, setComments] = useState([]);
  
    useEffect(() => {
      get("/api/comment", { parent: props.recipe_id }).then((commentObjs) => {
        setComments(commentObjs);
      });
    }, []);


    let commentsList = null;
    if(comments.length === 0) {
      commentsList = <div> No comments! </div>
    } else {
      commentsList = comments.map((CommentObj) => {
        <SingleComment 
        creator_id={CommentObj.creator_id} 
        creator_name={CommentObj.creator_name} 
        parent={CommentObj.parent} 
        content={CommentObj.content} 
        rating={CommentObj.rating} 
        hours={CommentObj.hours}/>
      });
    }
  
    // this gets called when the user pushes "Submit", so their
    // post gets added to the screen right away
    const addNewComment = (commentObj) => {
      setComments(comments.concat([commentObj]));
    };
  
    return (
      <div className="Card-container">
        
        <SingleRecipe
          recipe_id = {props.recipe_id}
          creator_id = {props.creator_id}
          creator_name = {props.creator_name}
          name = {props.name}
          ingredients = {props.ingredients}
          instructions = {props.instructions}
        />
        <hr/>
        {/* {commentsList}
        <NewComment parent={props.recipe_id} addNewComment={addNewComment} /> */}
        <CommentsBlock
          recipe={props}
          comments={comments}
          creator_id={props.creator_id}
          userId={props.userId}
          addNewComment={addNewComment}
        />
      </div>
    );
  };
  
  export default Card;
  