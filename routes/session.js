const express = require('express');
const router = express.Router();

router.get('/login', function(req, res){
  console.log("passing through /login")
  res.render('session/login');
})

router.post('/auth', function(req,res){
  // Authorize login stuff
  // The following is just for testing
  console.log("Passing through /auth");
  res.render("homepage", {
    user: {
      username: "Eamon"
    }
  });
  // ---------------------------------
})

router.post("/logout", function(req,res){
  req.session.destroy(function(){
    res.redirect("/")
  })
})

module.exports = router;
