import React from "react";
import { Link } from "react-router-dom";

/**
 * Proptypes
 * @param {string} recipe_id
 * @param {string} creator_id
 * @param {string} creator_name
 * @param {string} name
 * @param {{name: String, quantity: Number, unit: String}} ingredients
 * @param {[string]} instructions
//  * @param {boolean} public (optional implementation)
//  * @param {[string]} comments
 * @param {string} picture (optional)
 */

const SingleRecipe = (props) => {
    return (
        <div className="RecipeContainer">
            <div className="CreatorContainer">
                <Link to={`/profile/${props.creator_id}`} className="u-link u-bold">
                    {props.creator_name}
                </Link>
                <h2 className="recipe-name">
                    {props.name}
                </h2>
                <img src={props.picture}/>
                <h3 className="recipelabels"> Ingredients </h3>
                <p className="recipe-content"> {props.ingredients} </p>
                <h3 className="recipelabels"> Instructions </h3>
                <p className="recipe-content"> {props.instructions} </p>
            </div>

        </div>

    );
};

export default SingleRecipe;