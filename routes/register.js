const express = require('express');
const router = express.Router();

router.get('/signup', function(req, res){
  console.log("register.js router link successful!");
  res.render("register/signup");
})

module.exports = router;
