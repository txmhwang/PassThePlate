import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import pfp from "../../public/profile.png";
import food from "../../public/food.jpg";
import RecipePopup from "./RecipePopup";
import PostHeader from "./PostHeader";

/**
 * Proptypes
 * @param {string} recipe_id
 * @param {string} creator_id
 * @param {string} creator_name
 * @param {string} name
 * @param {string} ingredients
 * @param {string} instructions
 */

const SingleRecipe = (props) => {

    return (
        <div>
            <PostHeader 
            creator_id={props.creator_id}
            creator_name ={props.creator_name}
            />
            <h2>
                {props.name}
            </h2>
            <div>
                <RecipePopup 
                _id = {props._id}
                name = {props.name}
                ingredients = {props.ingredients}
                instructions = {props.instructions}
                creator_id = {props.creator_id}
                creator_name={props.creator_name}
                recipe_id = {props.recipe_id}
                userId = {props.userId}
                />
            </div>
            
        </div>

    );
};

export default SingleRecipe;