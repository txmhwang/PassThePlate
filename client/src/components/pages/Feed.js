import React, { useState, useEffect } from "react";
import Card from "../modules/Card";
import { NewRecipe } from "../modules/NewRecipeInput";
import SingleRecipe from "../modules/SingleRecipe";

import { get } from "../../utilities";

const Feed = () => {
    const [recipes, setRecipes] = useState([]);
  
    // called when the "Feed" component "mounts", i.e.
    // when it shows up on screen
    useEffect(() => {
      get("/api/recipes").then((RecipeObjs) => {
        setRecipes(RecipeObjs);
      })
    }, []);

    let recipesList = null;
    if(recipes.length === 0) {
      recipesList = <div> No Recipes! </div>
    } else {
      recipesList = recipes.map((RecipeObj) => {
        return <SingleRecipe creator_id={RecipeObj.creator_id} creator_name={RecipeObj.creator_name} name={RecipeObj.name} ingredients={RecipeObj.ingredients} instructions={RecipeObj.instructions}/>
      });
    }
  
    // this gets called when the user pushes "Submit", so their
    // post gets added to the screen right away
    // const addNewStory = 
    return ( 
      <div>
        <NewRecipe/>
        {recipesList}
      </div>
    );
  };
  
  export default Feed;