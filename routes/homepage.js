const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', function(req, res){
  console.log("homepage.js router link successful!");

  models.Post.findAll()
  .then(function (posts) {
    res.render("homepage", {
      posts: posts
    });
  })
})

module.exports = router;
