const express = require('express');
const router = express.Router();
const models = require('../models');
const session = require('express-session');


router.get('/', function(req, res){
  console.log("homepage.js router link successful!");

  if(!session.user){
    res.redirect('/login')
  }
  else {
    models.Post.findAll()
    .then(function (posts) {
      res.render("homepage", {
        posts: posts,
        user: session.user
      });
    })
  }
})

module.exports = router;
