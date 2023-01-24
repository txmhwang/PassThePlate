import React, { useState } from "react";
import { post } from "../../utilities.js";


/**
 * New Recipe is a parent component for all input components
 *
 * Proptypes
 * @param {string} recipe_id
 * @param {string} creator_id
 * @param {string} creator_name
 * @param {string} name
 * @param {{name: String, quantity: Number, unit: String}} ingredients
 * @param {[string]} instructions
//  * @param {boolean} public
 * @param {[string]} comments
 * @param {string} picture (optional)
 * 
 * 
 * 
 * 
 * @param {string} defaultText is the placeholder text
 * @param {string} storyId optional prop, used for comments
 * @param {({storyId, value}) => void} onSubmit: (function) triggered when this post is submitted, takes {storyId, value} as parameters
 */


 const NewRecipeInput = (props) => {
    const [value, setValue] = useState("");
  
    // called whenever the user types in the new post input box
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    // called when the user hits "Submit" for a new post
    const handleSubmit = (event) => {
      event.preventDefault();
      props.onSubmit && props.onSubmit(value);
      setValue("");
    };
  
    return (
      <div className="u-flex">
        <input
          type="text"
          placeholder={props.defaultText}
          value={value}
          onChange={handleChange}
          className="NewPostInput-input"
        />
        <button
          type="submit"
          className="NewPostInput-button u-pointer"
          value="Submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  };



  
  /**
   * New Comment is a New Post component for comments
   *
   * Proptypes
   *  @param {string} comment_id
 * @param {string} creator_id
 * @param {string} creator_name
 * @param {string} content
 * @param {number} rating
 * @param {number} hours
//  * @param {boolean} helpful
 * @param {string} picture (optional)



   * @param {string} defaultText is the placeholder text
   * @param {string} storyId to add comment to
   */
  const NewComment = (props) => {
    const addComment = (value) => {
      const body = { parent: props.storyId, content: value };
      post("/api/comment", body).then((comment) => {
        // display this comment on the screen
        props.addNewComment(comment);
      });
    };
  
    return <NewRecipeInput defaultText="New Comment" onSubmit={addComment} />;
  };
  
  /**
   * New Story is a New Post component for comments
   *
   * Proptypes
   * @param {string} defaultText is the placeholder text
   */
  const NewRecipe = (props) => {
    const addRecipe = (value) => {
      const body = { content: value };
      post("/api/story", body).then((story) => {
        // display this story on the screen
        props.addNewStory(story);
      });
    };
  
    return <NewPostInput defaultText="New Story" onSubmit={addRecipe} />;
  };
  
  export { NewComment, NewRecipe };
  