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
const Recipe = require("./models/recipe");
const Comment = require("./models/comment");

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
  // if (req.query.creator_id){
  //   User.find({"creator_id": req.query.creator_id}).then((users) => res.send(users));
  // } else {
  //   User.find({}).then((users) => res.send(users));
  // }
  User.find({}).then((users) => res.send(users));
});

router.get("/getUser", (req, res) => {
  User.findById({ _id: req.query._id }).then((user) => {
    res.send(user);
  });
});

router.get("/strangers", (req, res) => {
  const friendids = req.query.friendids;
  User.find({_id: {$nin: friendids}}, (err, users) =>{
    if (err) {
      return res.status(500).send(err);
    }
    res.send(users);
  });
});


router.post("/createUser", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    googleid: req.body.googleid,
    friends: [],
    your_recipes: [],
    saved_recipes: [],
    email: req.body.email,
    password: req.body.password,
  });
  newUser.save().then((user) => res.send(user));
});

router.post("/updateUser", (req, res) => {
  User.updateOne({_id: req.body._id}, {$set: {friends: req.body.friends}}, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(result);
  });
});

router.post("/aboutme", (req, res) => {
  User.findOne({ _id: req.body._id }, (err, myModel) => {
    if (err) return console.log(err);

    myModel.contents = req.body.contents;

    myModel.save((error, updatedModel) => {
      if (error) return console.log(error);

      res.send(updatedModel);
    });
  });
});

router.get("/recipes", (req, res) => {
  Recipe.find({}).then((recipe) => res.send(recipe));
});
router.get("/specificRecipes", (req, res) => {
  Recipe.find({ _id: req.query._id }).then((recipes) => res.send(recipes));
});

router.post("/recipes", (req, res) => {
  const newRecipe = new Recipe({
<<<<<<< Updated upstream
    creator_id: req.user._id,
    creator_name: req.user.name,
=======
    creator_id: req.body.creator_id,
    creator_name: req.body.creator_name,
>>>>>>> Stashed changes
    name: req.body.name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    public: req.body.puclic,
  });
  newRecipe.save().then((recipe) => res.send(recipe));
});

router.get("/publicrecipes", (req, res) => {
  Recipe.find({ public: true }).then((recipes) => {
    res.send(recipes);
  });
});

router.get("/comment", (req, res) => {
  Comment.find({parent: req.query.parent}).then((comments) => {
    res.send(comments);
  });
});

router.post("/comment", (req, res) => {
  const newComment = new Comment({
    creator_name: req.body.creator_name,
    creator_id: req.body.creator_id,
    content: req.body.content,
    parent: req.body.parent,
    rating: req.body.rating,
    hours: req.body.hours,
  });

  newComment.save().then((comment) => res.send(comment));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
