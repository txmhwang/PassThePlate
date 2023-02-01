import React from "react";
import SingleComment from "./SingleComment";
import { NewComment } from "./NewRecipeInput";


/**
 * 

/**
 * Component that holds all the comments for a story
 *
 * Proptypes
 * @param {ContentObject[]} comments
//  * @param {string} recipe_id
//  * @param {string} creator_id
//  * @param {string} creator_name
//  * @param {ContentObject} addNewComment
 */
 const CommentsBlock = (props) => {
  
  return(
    <div className="Card-commentsBlock">
      <div className="Recipe-CommentsSection">
        {props.comments.map((comment) => (
        <SingleComment
        parent={comment.parent} 
        creator_id={comment.creator_id} 
        creator_name={comment.creator_name} 
        rating={comment.rating} 
        hours ={comment.hours} 
        content={comment.content}/>
      ))};
      {/* {props.userId && (
        <NewComment parent={props.recipe.recipe_id} addNewComment={props.addNewComment} />
      )}; */}
      {/* <NewComment 
      recipe_id={props.recipe_id} 
      addNewComment={props.addNewComment} 
      creator_id = {props.creator_id}
      creator_name = {props.creator_name}
      />  */}
      </div>
    </div>
  );
};
  
  export default CommentsBlock;
  