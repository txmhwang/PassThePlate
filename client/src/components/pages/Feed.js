import React, { useState, useEffect } from "react";
import Card from "../modules/Card";
import { NewRecipe } from "../modules/NewRecipeInput";
import SingleRecipe from "../modules/SingleRecipe";
import Popup from "../modules/Popup";

import { get } from "../../utilities";
import "../modules/Feed.css";

// props = userId from App.js
const Feed = (props) => {
  // const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState("");
  const [friends, setFriends] = useState([])
  const [friendsRecipes, setFriendsRecipes] = useState([])

  // // this will now only show the recipes that the user has
  // useEffect(() => {
  //   get("api/whoami").then((user) => {
  //     if (JSON.stringify(user) !== "{}") {
  //       setRecipes(user.your_recipes);
  //     } else {
  //       setRecipes(null)
  //     }
  //   });
  // });

  useEffect(() => {
    // get("api/recipes").then((recipe) => {
    //   setRecipes(recipe)
    // })
    get("api/recipes", {creator_id: user._id}).then((recipe) => {
      setFriendsRecipes(recipe);
    });
    get("api/whoami").then((user) => {
      if (JSON.stringify(user) !== "{}") {
        setUser(user);
        setFriends(user.friends);
      } else {
        setFriendsRecipes(null)
      }
    });
    
  }, []);

  
  for (var i=0; i< friends.length; i++) {
    let currfriendrecipes = [];
    get("api/recipes", {creator_id: friends[i]}).then((friendsrecipes) => {
      currfriendrecipes = friendsrecipes;
    });
    setFriendsRecipes(friendsRecipes.concat(currfriendrecipes));
  };

  // this gets called when the user pushes "Submit", so their
  // post gets added to the screen right away
  const addNewRecipe = (RecipeObj) => {
    setFriendsRecipes([RecipeObj].concat(friendsRecipes));
    // user.your_recipes.concat(RecipeObj)
  };

  let recipesList = null;
  if (friendsRecipes === null) {
    // recipesList = <div> Please login to view feed </div>;
    return (
      <div> Please login to view feed </div>
    );
  }
  else if (friendsRecipes.length === 0) {
    recipesList = <div> No Friends' Recipes! </div>;
  } else {
    recipesList = friendsRecipes.map((RecipeObj) => {
      return (
        <Card
          key={`Card_${RecipeObj._id}`}
          recipe_id={RecipeObj.recipe_id}
          creator_id={props.userId}
          creator_name={props.name}
          name={RecipeObj.name}
          ingredients={RecipeObj.ingredients}
          instructions={RecipeObj.instructions}
          public={RecipeObj.public}
        />
      );
    });
  }

  return (
    <div>
      <h1 className="ExploreHeader"> YOUR FOLLOWING </h1>
      <div className="Feed-popup">
        <Popup creator_id={props.creator_id} creator_name={props.creator_name} addNewRecipe={addNewRecipe}/>
      </div>
      <div>
        <div className="Feed-posts">{recipesList}</div>
      </div>
    </div>
  );
};

export default Feed;
