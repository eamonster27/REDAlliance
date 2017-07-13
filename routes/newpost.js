const express = require('express');
const router = express.Router();

router.get('/newpost', function(req, res){
  console.log("newpost.js router link successful!");
  res.render("newpost");
})

module.exports = router;
