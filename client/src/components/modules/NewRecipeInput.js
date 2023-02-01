import React, { useState, useEffect } from "react";
import { get, post } from "../../utilities.js";

import "./NewRecipeInput.css";
/**
 * New Recipe is a parent component for all input components
 *
 * Proptypes
 * @param {} onSubmit: (function) triggered when this post is submitted, takes {recipe_id, recipeName, ingredients, instructions} as parameters
 */

let initialValues = {
  recipeName: "",
  Ingredients: "",
  Instructions: "",
  Public: true,
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
      />{" "}
      <br />
      <textarea
        type="text"
        placeholder={"Ingredients list"}
        value={values.Ingredients}
        onChange={handleChange}
        name="Ingredients"
        className="NewPostInput input-text u-text"
      />{" "}
      <br />
      <textarea
        type="text"
        placeholder={"instructions list"}
        value={values.Instructions}
        onChange={handleChange}
        name="Instructions"
        className="NewPostInput input-text u-text"
      />
      <br />
      <div className="NewPostInput-Checkbox">
       <input 
      type="checkbox"
      value={values.Public}
      name = "Public"
      className="NewPostInput-checkbox"
      /> 
      <label className="NewPostInput-checkboxText">Make Recipe Public</label>
      </div>
      <button
        type="submit"
        className="NewPostInput-button u-pointer u-text"
        value="Submit"
        onClick={handleSubmit}
      >
        {" "}
        <br />
        Submit
      </button>
    </div>
  );
};

/**
 * New Recipe is a New Post component for comments
 *
 * Proptypes
 * @param addNewRecipe
 */
const NewRecipe = (props) => {
  // const [user, setUser] = useState(null);
  
<<<<<<< Updated upstream
  // useEffect(() => {
  //   get("api/getUsers", { _id: props.creator_id}).then((User) => {
  //     if (JSON.stringify(User) !== "{}") {
  //       setUser(User);
  //     }
  //   });
  // });

  const addRecipe = (values) => {
    const body = {
=======
  useEffect(() => {
    get("api/users", {_id: props.creator_id}).then((User) => {
      if (JSON.stringify(User) !== "{}") {
        setUser(User);
      }
    });
  });

  const addRecipe = (values) => {
    const body = {
      // creator_id: props.creator_id,
      // creator_name: props.creator_name,
      creator_id: user._id,
      creator_name: user.name,
>>>>>>> Stashed changes
      name: values.recipeName,
      ingredients: values.Ingredients,
      instructions: values.Instructions,
      public: values.Public,
    };
    post("/api/recipes", body).then((recipe) => {
      // display this recipe on the screen
      props.addNewRecipe(recipe);
    });
  };
  return (
    <div>
      <NewRecipeInput onSubmit={addRecipe} />
    </div>
  );
};
// _________________________________________________________________________________________________

const initialComment = {
  hours: "",
  content: "",
  rating: "",
};
/**
 * New Recipe is a New Post component for comments
 *
 * Proptypes
 * @param {string} onSubmit
 * @param {string} recipe_id
 */
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
      />{" "}
      <br />
      <input
        type="text"
        placeholder={"rating (0-5 stars)"}
        value={values.rating}
        onChange={handleChange}
        name="rating"
        className="NewCommentInput u-text"
      />{" "}
      <br />
      <input
        type="text"
        placeholder={"comments"}
        value={values.content}
        onChange={handleChange}
        name="content"
        className="NewCommentInput u-text"
      />{" "}
      <br />
      <button
        type="submit"
        className="NewCommentInput-button u-pointer u-text"
        value="Submit"
        onClick={handleSubmit}
      >
        {" "}
        <br />
        Submit
      </button>
    </div>
  );
};
/**
   * New Comment is a New Post component for comments
   *
   * Proptypes

   * @param {string} addNewComment is the fn to add comment to page
   * @param {string} recipe_id to add comment to
<<<<<<< Updated upstream
=======
  //  * @param {string} creator_id
  //  * @param {string} creator_name
>>>>>>> Stashed changes
   */
//  * @param {string} parent

const NewComment = (props) => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    get("api/users", {_id: props.creator_id}).then((User) => {
      if (JSON.stringify(User) !== "{}") {
        setUser(User);
      }
    });
  });

  const addComment = (values) => {
    const body = {
<<<<<<< Updated upstream
      // creator_id: props.creator_id,
      // creator_name: props.creator_name,
=======
      creator_id: user._id,
      creator_name: user.name,
>>>>>>> Stashed changes
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
  return <NewCommentInput onSubmit={addComment} />;
};

export { NewComment, NewRecipe };
