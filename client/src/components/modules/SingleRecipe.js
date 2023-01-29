import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


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
        <div className="Card-recipe u-text">
            <div className="CreatorContainer">
                <img src=""/>
                <Link to={`/profile/${props.creator_id}`} className="u-link u-bold">
                    {props.creator_name}
                </Link>
                <h2>
                    {props.name}
                </h2>
                <hr />
                {/* <img src={props.picture}/> */}
                <h3 className="u-bold"> INGREDIENTS </h3>
                <p className="u-text"> {props.ingredients} </p>
                <h3 className="u-bold"> INSTRUCTIONS </h3>
                <p className="u-text"> {props.instructions} </p>
            </div>
        </div>

    );
};

export default SingleRecipe;