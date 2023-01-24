import React, { useEffect, useState } from "react";
import SingleComment from "./SingleComment";
import SingleRecipe from "./SingleRecipe";
import { NewComment } from "./NewRecipeInput";

/**
 * Proptypes
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
        return <SingleComment 
        // creator_id={CommentObj.creator_id} 
        // creator_name={CommentObj.creator_name} 
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
          // creator_id = {props.creator_id}
          // creator_name = {props.creator_name}
          name = {props.name}
          ingredients = {props.ingredients}
          instructions = {props.instructions}
        />
        {commentsList}
        <NewComment parent={props.recipe_id} />
        {/* <CommentsBlock
          story={props}
          comments={comments}
          creator_id={props.creator_id}
          userId={props.userId}
          addNewComment={addNewComment}
        /> */}
      </div>
    );
  };
  
  export default Card;
  