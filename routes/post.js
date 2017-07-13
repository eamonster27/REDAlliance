const express = require('express');
const router = express.Router();

router.get('/post', function(req, res){
  console.log("post.js router link successful!");
  res.render("post");
})

module.exports = router;
