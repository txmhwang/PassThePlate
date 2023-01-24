/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");
const Recipe = require("./models/Recipe");
const Comment = require("./models/Comment");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");


router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

router.get("/users", (req, res) => {
  User.find({}).then((users) => res.send(users));
})

router.get("/findUser", (req, res) => {
  User.find({email: req.query.email, password: req.query.password}).then((user) => res.send(user));
})

router.post("/createUser", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    googleid: req.body.googleid,
    friends: [],
    your_recipes: [],
    saved_recipes: [],
    email: req.body.email,
    password: req.body.password,
  })
  newUser.save().then((user) => res.send(user));
})

router.get("/recipes", (req, res) => {
  Recipe.find({}).then((recipe) => res.send(recipe))
});

router.post("/recipes", (req, res) => {
  const newRecipe = new Recipe({
    // creator_id: req.user.email,
    // creator_name: req.user.name,
    name: req.body.name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  });
  newRecipe.save().then((recipe) => res.send(recipe));
});

router.get("/comment", (req, res) => {
  Comment.find({ parent: req.query.parent }).then((comments) => {
    res.send(comments);
  });
});

router.post("/comment", (req, res) => {
  const newComment = new Comment({
    // creator_name: req.user.name,
    // creator_id: req.user.email,
    content: req.body.content,
    parent: req.body.parent,
    rating: req.body.rating,
    hours: req.body.hours,
  });

  newComment.save().then((comment) => res.send(comment));
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});



module.exports = router;
