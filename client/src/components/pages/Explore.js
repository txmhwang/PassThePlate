import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
import Card from "../modules/Card";

import "../modules/Feed.css";

const Explore = () => {
    const [publicRecipes, setPublicRecipes] = useState([])
    
    useEffect(() => {
        get("/api/publicrecipes").then((RecipeObjs) => {
          setPublicRecipes(RecipeObjs);
        })
      }, []);

    let publicRecipesList = null;
    if(publicRecipes.length === 0) {
    publicRecipesList = <div> No Public Recipes! </div>
    } else {
    publicRecipesList = publicRecipes.map((RecipeObj) => {
        return <Card
        recipe_id = {RecipeObj.recipe_id}
        creator_id = {RecipeObj.creator_id}
        creator_name ={RecipeObj.creator_name}
        name = {RecipeObj.name}
        userId = {props.userId}
        ingredients = {RecipeObj.ingredients}
        instructions = {RecipeObj.instructions}
        public = {RecipeObj.public}
        />
    });
    }
    return (
        <div>
          <div className="Feed-posts">
            {publicRecipesList}
          </div>
      </div>
    );
};

export default Explore;