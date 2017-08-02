const express = require('express');
const router = express.Router();

router.get('/:post', function(req, res){
  if(!session.user){
    res.redirect('/login')
  }
  else {
    res.render("post");
  }
})

module.exports = router;
