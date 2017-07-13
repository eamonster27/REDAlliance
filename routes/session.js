const express = require('express');
const router = express.Router();

router.get('/login', function(req, res){
  res.render('session/login');
})

router.post('/auth', function(req,res){
  // Authorize login stuff
  // The following is just for testing
  console.log("Passing through Auth")
  res.redirect('/login');
})

module.exports = router;
