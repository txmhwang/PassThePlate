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
 * @param {ContentObject} recipe
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
      {props.userId && (
        <NewComment parent={props.recipe.recipe_id} addNewComment={props.addNewComment} />
      )};
      {/* <NewComment parent={props.parent} addNewComment={addNewComment} /> */}
      </div>
    </div>
  );
};
  
  export default CommentsBlock;
  