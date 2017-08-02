const express = require('express');
const router = express.Router();
const session = require('express-session');
const bodyParser = require('body-parser');
const models = require('../models');

router.get('/newpost', function(req, res){
  if(!session.user){
    res.redirect('/login');
  }
  else {
    res.render("newpost", {user: session.user});
  }
})

router.post('/newpost', function(req, res){
  models.Post.create({
    content: req.body.content,
    UserID: session.user.dataValues.id
  }).then(function (){
    res.redirect('/');
  })
})

module.exports = router;
