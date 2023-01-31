import React, { useState, useEffect } from "react";
import Card from "../modules/Card";
import { NewRecipe } from "../modules/NewRecipeInput";
import SingleRecipe from "../modules/SingleRecipe";
import Popup from "../modules/Popup";

import { get } from "../../utilities";
import "../modules/Feed.css";

const Feed = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState("");

  // this will now only show the recipes that the user has
  useEffect(() => {
    get("api/whoami").then((user) => {
      if (JSON.stringify(user) !== "{}") {
        setRecipes(user.your_recipes);
      }
    });
  });

  // this gets called when the user pushes "Submit", so their
  // post gets added to the screen right away
  const addNewRecipe = (RecipeObj) => {
    setRecipes([RecipeObj].concat(recipes));
  };

  let recipesList = null;
  if (recipes.length === 0) {
    recipesList = <div> No Recipes! </div>;
  } else {
    recipesList = recipes.map((RecipeObj) => {
      return (
        <Card
          recipe_id={RecipeObj.recipe_id}
          creator_id={RecipeObj.creator_id}
          creator_name={RecipeObj.creator_name}
          name={RecipeObj.name}
          userId={props.userId}
          ingredients={RecipeObj.ingredients}
          instructions={RecipeObj.instructions}
          public={RecipeObj.public}
        />
      );
    });
  }

  return (
    <div>
      <div className="Feed-popup">
        <Popup />
      </div>
      <div>
        <div className="Feed-posts">{recipesList}</div>
      </div>
    </div>
  );
};

export default Feed;
