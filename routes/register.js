const express = require('express');
const router = express.Router();

router.get('/signup', function(req, res){
  console.log("register.js router link successful!");
  res.render("register/signup");
})

router.post('/signup', function(req, res){
  // The following is just for testing
  console.log("register.js router link successful!");
  res.render("homepage", {
    user: {
      username: "Eamon"
    }
  });
  // ---------------------------------
})



module.exports = router;
