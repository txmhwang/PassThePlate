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
    return (
      <div className="Card-container">

        <SingleRecipe
          _id = {props._id}
          recipe_id = {props.recipe_id}
          creator_id = {props.creator_id}
          creator_name = {props.creator_name}
          name = {props.name}
          ingredients = {props.ingredients}
          instructions = {props.instructions}
          public ={props.public}
          userId = {props.userId}
        />
        <hr/>
      </div>
    );
  };
  
  export default Card;