const express = require('express');
const router = express.Router();

router.get('/newpost', function(req, res){
  // The following code is for testing
  console.log("newpost.js router link successful!");
  res.render("newpost", {
    user: {
      username: "Eamon"
    }
  });
  // ---------------------------------
})

router.post('/newpost', function(req, res){
  // The following code is for testing
  console.log("newpost.js router post successful!");
  res.redirect('/');
  // ---------------------------------
})

module.exports = router;
