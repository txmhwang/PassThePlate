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
 const initialValues = {
  recipeName: "",
  Ingredients: "",
  Instructions: "",
};

const NewPostInput = (props) => {
    const [values, setValues] = useState(initialValues);
    // const [recipeName, setRecipeName] = useState("");
    // // const [value, setValue] = useState("");
    // const [Ingredients, setIngredients] = useState([]);
    // const [Instructions, setInstructions] = useState([]);
  
    // called whenever the user types in the new post input box
    const handleChange = (event) => {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value,
      });
    //   setValue(event.target.value);
    };
  
    // called when the user hits "Submit" for a new post
    const handleSubmit = (event) => {
      event.preventDefault();
      props.onSubmit && props.onSubmit(values);
      setValues(initialValues);
      // setRecipeName("");
      // setIngredients("");
      // setInstructions("");
      //   setValue("");
    };
  
    return (
      <div className="u-flex">
        <input
          type="text"
          placeholder={"Name of Recipe"}
          value={values.recipeName}
          onChange={handleChange}
          name="recipeName"
          className="NewPostInput-name"

        />
        <input
          type="text"
          placeholder={"Ingredients list"}
          value={values.Ingredients}
          onChange={handleChange}
          name="Ingredients"
          className="NewPostInput-ingredients"
        />
        <input
          type="text"
          placeholder={"instructions list"}
          value={values.Instructions}
          onChange={handleChange}
          name="Instructions"
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
    post("/api/comments", body).then((comment) => {
      // display this comment on the screen
      props.addNewComment(comment);
    });
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
        const body = {
            // creator_id: props.email,
            // creator_name: props.name,
            name: recipeName,
            ingredients: Ingredients,
            instructions: Instructions,
        };
        post("/api/recipes", body).then((recipe) => {
          // display this recipe on the screen
          props.addNewRecipe(recipe);
        });
    };
    return (
      <div>
        <h2> New Recipe </h2>
        <NewPostInput onSubmit={addRecipe}/>
      </div>
    );
  };
  
  export { NewComment, NewRecipe };