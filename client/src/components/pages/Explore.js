import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
import Card from "../modules/Card";

import "../modules/Feed.css";

const Explore = (props) => {
    const [publicRecipes, setPublicRecipes] = useState([])
    
    useEffect(() => {
        get("/api/recipes").then((RecipeObjs) => {
          setPublicRecipes(RecipeObjs);
        })
      }, []);

    let publicRecipesList = null;
    if(publicRecipes.length === 0) {
    publicRecipesList = <div> No Public Recipes! </div>
    } else {
    publicRecipesList = publicRecipes.map((RecipeObj) => {
    return (
      <Card
      recipe_id = {RecipeObj.recipe_id}
      creator_id = {props.userId}
      creator_name ={props.name}
      name = {RecipeObj.name}
      ingredients = {RecipeObj.ingredients}
      instructions = {RecipeObj.instructions}
      public = {RecipeObj.public}
      />
    );
    });
    }
    return (
        <div>
          <h1 className="ExploreHeader"> EXPLORE ALL RECIPES</h1>
          <div className="Feed-posts">
            {publicRecipesList}
          </div>
      </div>
    );
};

export default Explore;