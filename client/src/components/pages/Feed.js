import React, { useState, useEffect } from "react";
import Card from "../modules/Card";
import Popup from "../modules/Popup";

import { get } from "../../utilities";
import "../modules/Feed.css";

  /**
 * Proptypes
 * @param {string} userId is the userID passed onto newRecipe
 * @param {string} userName is the user name passed onto newRecipe
 */
const Feed = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState("");
  const [friends, setFriends] = useState([])

  // this will now only show the recipes that the user has
  // useEffect(() => {
  //   get("api/whoami").then((user) => {
  //     if (JSON.stringify(user) !== "{}") {
  //       // setRecipes(user.your_recipes);
  //       get("api/specificRecipes", {_id: user._id}).then((recipes)=>{
  //         setRecipes(recipes);});
  //     } else {
  //       setRecipes(null)
  //     }
  //   });
  // });

  useEffect(() => {
    get("api/recipes").then((RecipeObjs)=>{
      setRecipes(RecipeObjs);
    });
    get("api/whoami").then((User) => {
      if (JSON.stringify(User) !== "{}") {
        setUser(User);
        setFriends(user.friends);
      } else {
        setRecipes(null)
      }
    });
    // get("api/recipes").then((RecipeObjs)=>{
    //   setRecipes(RecipeObjs);
    // });
  }, []);
  
  // user.friends.forEach(element => {
  //   console.log(element);
  //   const [theirRecipes, setTheirRecipes] = useState([]);
  //   get("api/specificRecipes", {_id: element}).then((recipe)=> {setTheirRecipes(recipe);});
  //   setRecipes(recipes.concat(theirRecipes))
  // });
  // // for (var i=0; i< user.friends.length; i++) {
  //   const [currfriendrecipes, setCurrfriendrecipes] = useState([]);
  //   get("api/recipes", {creator_id: friends[i]}).then((friendsrecipes) => {
  //     setCurrfriendrecipes(friendsrecipes);
  //   });
  //   setFriendsRecipes(friendsRecipes.concat(currfriendrecipes));
  // };

  // this gets called when the user pushes "Submit", so their
  // post gets added to the screen right away
  const addNewRecipe = (RecipeObj) => {
    setRecipes(recipes.concat([RecipeObj]));
    // user.your_recipes.concat(RecipeObj)
  };

  let recipesList = null;
  if (recipes === null) {
    // recipesList = <div> Please login to view feed </div>;
    return (
      <div> Please login to view</div>
    );
  }
  else if (recipes.length === 0) {
    recipesList = <div> No Friends' Recipes! </div>;
  } else {
    recipesList = recipes.map((RecipeObj) => {
      if (user.friends.includes(RecipeObj.creator_id) || RecipeObj.creator_id === props.userId){
        return (
          <Card
            key={`Card_${RecipeObj._id}`}
            _id = {RecipeObj._id}
            recipe_id={RecipeObj.recipe_id}
            creator_id={RecipeObj.creator_id}
            creator_name={RecipeObj.creator_name}
            name={RecipeObj.name}
            ingredients={RecipeObj.ingredients}
            instructions={RecipeObj.instructions}
            public={RecipeObj.public}
            userId={props.userId}
          />
        );
      }
    });
  }


  return (
      <div>
        <h1 className="ExploreHeader"> YOUR FOLLOWING </h1>
        <div className="Feed-popup">
          {
            props.userId && <Popup 
            // creator_id={props.userId} creator_name={props.userName}
            addNewRecipe={addNewRecipe}/>
          }
        </div>
        <div>
          <div className="Feed-posts">{recipesList}</div>
        </div>
      </div>
    );
  };

export default Feed;
