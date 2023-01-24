import React, { useState } from "react";
import { post } from "../../utilities.js";


/**
 * New Recipe is a parent component for all input components
 *
 * Proptypes
 * @param {string} recipe_id for comments
 * @param {string} recipeName_default
 * @param {{name: String, quantity: Number, unit: String}} ingredients_default
 * @param {[string]} instructions_default

 * @param {({recipe_id, recipeName, Ingredients, Instructions}) => void} onSubmit: (function) triggered when this post is submitted, takes {recipe_id, recipeName, ingredients, instructions} as parameters
 */

const NewPostInput = (props) => {
    const [recipeName, setRecipeName] = useState("");
    // const [value, setValue] = useState("");
    const [Ingredients, setIngredients] = useState([]);
    const [Instructions, setInstructions] = useState([]);
  
    // called whenever the user types in the new post input box
    const handleChange = (event) => {
      setRecipeName(event.target.recipeName);
      setIngredients(event.target.Ingredients);
      setInstructions(event.target.Instructions);
    //   setValue(event.target.value);
    };
  
    // called when the user hits "Submit" for a new post
    const handleSubmit = (event) => {
      event.preventDefault();
      props.onSubmit && props.onSubmit({recipeName, Ingredients, Instructions});
      setRecipeName("");
      setIngredients("");
      setInstructions("");
      //   setValue("");
    };
  
    return (
      <div className="u-flex">
        <input
          type="text"
          placeholder={"Name of Recipe"}
          value={recipeName}
          onChange={handleChange}
          className="NewPostInput-name"
        />
        <input
          type="text"
          placeholder={"Ingredients list"}
          value={Ingredients}
          onChange={handleChange}
          className="NewPostInput-ingredients"
        />
        <input
          type="text"
          placeholder={"instructions list"}
          value={Instructions}
          onChange={handleChange}
          className="NewPostInput-instructions"
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


   * @param {string} defaultText is the placeholder text
   * @param {string} storyId to add comment to
   */
//  * @param {string} parent

  const NewComment = (props) => {
    const addComment = (Content, Rating, Hours) => {
      const body = {
        // creator_id: props.creator_id, 
        // creator_name: props.creator_name, 
        parent: props.recipe_id, 
        content: Content, 
        rating: Rating, 
        hours: Hours
      };
    post("/api/comments", body);
    };
    return <NewPostInput defaultText="New Comment" onSubmit={addComment} />;
  };
  
    

  /**
   * New Story is a New Post component for comments
   *
   * Proptypes
   * @param {string} defaultText is the placeholder text
   */
  const NewRecipe = (props) => {
    const addRecipe = (recipeName, Ingredients, Instructions) => {
        let data = {
            // creator_id: props.email,
            // creator_name: props.name,
            name: recipeName,
            ingredients: Ingredients,
            instructions: Instructions,
        };
        post("/api/recipe", data).then((recipe) => console.log(recipe));
    }
    return <NewPostInput onSubmit={addRecipe}/>
  };
  
  export { NewComment, NewRecipe };