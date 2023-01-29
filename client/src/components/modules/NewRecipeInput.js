import React, { useState } from "react";
import { post } from "../../utilities.js";
import { Checkbox, CheckboxGroup, Textarea } from '@chakra-ui/react';

import "./NewRecipeInput.css";
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
  public: true,
};

const NewRecipeInput = (props) => {
    const [values, setValues] = useState(initialValues);
  
    // called whenever the user types in the new post input box
    const handleChange = (event) => {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value,
      });
    };
  
    // called when the user hits "Submit" for a new post
    const handleSubmit = (event) => {
      event.preventDefault();
      props.onSubmit && props.onSubmit(values);
      setValues(initialValues);
    };
  
    return (
      <div className="u-flex NewPostInputContainer">
        <input
          type="text"
          placeholder={"Name of Recipe"}
          value={values.recipeName}
          onChange={handleChange}
          name="recipeName"
          className="NewPostInput u-text"

        /> <br/>
        <Textarea
          type="text"
          placeholder={"Ingredients list"}
          value={values.Ingredients}
          onChange={handleChange}
          name="Ingredients"
          className="NewPostInput u-text"
        /> <br/>
        <Textarea
          type="text"
          placeholder={"instructions list"}
          value={values.Instructions}
          onChange={handleChange}
          name="Instructions"
          className="NewPostInput u-text"
        /> <br/>
        <Checkbox defaultChecked
          value={values.public}
          // onChange={(e) => setValues.public(false)}
          onChange={handleChange}
        >Make recipe public</Checkbox>
        <button
          type="submit"
          className="NewPostInput-button u-pointer u-text"
          value="Submit"
          onClick={handleSubmit}
        > <br/>
          Submit
        </button> 
      </div>
    );
  };


  /**
   * New Recipe is a New Post component for comments
   *
   * Proptypes
   * @param {string} defaultText is the placeholder text
   */
   const NewRecipe = (props) => {
    const addRecipe = (values) => {
        const body = {
            creator_id: props.email,
            creator_name: props.name,
            name: values.recipeName,
            ingredients: values.Ingredients,
            instructions: values.Instructions,
            public: values.public,
        };
        post("/api/recipes", body).then((recipe) => {
          // display this recipe on the screen
          props.addNewRecipe(recipe);
        });
    };
    return (
      <div>
        <NewRecipeInput onSubmit={addRecipe}/>
      </div>
    );
  };
// _________________________________________________________________________________________________

  const initialComment = {
    hours: "",
    content: "",
    rating: "",
  };
  
  const NewCommentInput = (props) => {
    const [values, setValues] = useState(initialComment);
  
    // called whenever the user types in the new post input box
    const handleChange = (event) => {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value,
      });
    };
  
    // called when the user hits "Submit" for a new post
    const handleSubmit = (event) => {
      event.preventDefault();
      props.onSubmit && props.onSubmit(values);
      setValues(initialComment);
    };
  
    return (
      <div className="u-flex NewCommentInputContainer">
        <input
          type="text"
          placeholder={"Hours spent"}
          value={values.hours}
          onChange={handleChange}
          name="hours"
          className="NewCommentInput u-text"

        /> <br/>
        <input
          type="text"
          placeholder={"rating (0-5 stars)"}
          value={values.rating}
          onChange={handleChange}
          name="rating"
          className="NewCommentInput u-text"
        /> <br/>
        <input
          type="text"
          placeholder={"comments"}
          value={values.content}
          onChange={handleChange}
          name="content"
          className="NewCommentInput u-text"
        /> <br/>
        <button
          type="submit"
          className="NewCommentInput-button u-pointer u-text"
          value="Submit"
          onClick={handleSubmit}
        > <br/>
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
    const addComment = (values) => {
      const body = {
        creator_id: props.creator_id, 
        creator_name: props.creator_name, 
        parent: props.recipe_id, 
        content: values.content, 
        rating: values.rating, 
        hours: values.hours,
      };
    post("/api/comment", body).then((comment) => {
      // display this comment on the screen
      props.addNewComment(comment);
    });
  };
  return <NewCommentInput defaultText="New Comment" onSubmit={addComment} />;
};
  
  
  
  export { NewComment, NewRecipe };