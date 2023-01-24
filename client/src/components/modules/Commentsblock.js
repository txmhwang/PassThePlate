import React from "react";
import SingleComment from "./SingleComment";
import { NewComment } from "./NewRecipeInput";


/**
 * @typedef ContentObject
 * @property {string} _id of story/comment
 * @property {string} creator_name
 * @property {string} creator_id
 * @property {string} content of the story/comment
 */

/**
 * Component that holds all the comments for a story
 *
 * Proptypes
 * @param {ContentObject[]} comments
 * @param {ContentObject} recipe
 */
 const CommentsBlock = (props) => {
  return(
    <div>
      {props.comments.map((comment) => (
        <SingleComment 
        parent={props.parent} 
        creator_id={props.creator_id} 
        creator_name={props.creator_name} 
        rating={props.rating} 
        hours ={props.hours} 
        content={props.content}/>
      ))};
      <NewComment parent={props.parent}/>
    </div>
  );
    // return (
    //   <div className="Card-commentSection">
    //     <div className="story-comments">
    //       {props.comments.map((comment) => (
    //         <SingleComment
    //           key={`SingleComment_${comment._id}`}
    //           _id={comment._id}
    //           creator_name={comment.creator_name}
    //           creator_id={comment.creator_id}
    //           content={comment.content}
    //         />
    //       ))}
    //       {props.userId && (
    //         <NewComment storyId={props.story._id} addNewComment={props.addNewComment} />
    //       )}
    //     </div>
    //   </div>
    // );
  };
  
  export default CommentsBlock;
  