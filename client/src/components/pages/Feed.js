import React, { useState, useEffect } from "react";
import Card from "../modules/Card";
import { NewRecipe } from "../modules/NewRecipeInput";
import SingleRecipe from "../modules/SingleRecipe";
import Popup from "../modules/Popup";
import NavBar from "../modules/NavBar";

import { get } from "../../utilities";

const Feed = (props) => {
    const [recipes, setRecipes] = useState([]);
  
    // called when the "Feed" component "mounts", i.e.
    // when it shows up on screen
    useEffect(() => {
      get("/api/recipes").then((RecipeObjs) => {
        setRecipes(RecipeObjs);
      })
    }, []);

    // this gets called when the user pushes "Submit", so their
    // post gets added to the screen right away
    const addNewRecipe = (RecipeObj) => {
      setRecipes([RecipeObj].concat(recipes));
    };

    let recipesList = null;
    if(recipes.length === 0) {
      recipesList = <div> No Recipes! </div>
    } else {
      recipesList = recipes.map((RecipeObj) => {
        return <card
        recipe_name = {RecipeObj.name}
        creator_name = {RecipeObj.creator_name}
        picture = {RecipeObj.picture}
        // recipe_id = {RecipeObj.recipe_id}
        // creator_id = {RecipeObj.creator_id}
        // creator_name ={RecipeObj.creator_name}
        // name = {RecipeObj.name}
        // userId = {props.userId}
        // ingredients = {RecipeObj.ingredients}
        // instructions = {RecipeObj.instructions}
        />
      });
    }
    
    return (
      <div>
        <div className="u-toppad" >
          <Popup/>
        </div>
        
        {/* {props.userId && <NewRecipe addNewRecipe={addNewRecipe} />} */}
        {recipesList}
      </div>
    );
  };
  
  export default Feed;