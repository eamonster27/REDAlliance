const express = require('express');
const router = express.Router();
const session = require('express-session');
const models = require('../models');
const bodyParser = require('body-parser');

router.get('/signup', function(req, res){
  console.log("register.js router link successful!");
  res.render("register/signup");
})

router.post('/signup', function(req, res){
  if(req.body.username == '' || req.body.password == ''){
    res.render('register/signup', { error: true });
  }
  else {
    models.User.findOne({
      where: {
        username: req.body.username
      }
    }).then(function(user) {
      if(user) {
        res.render('register/signup', { error: true })
      }
      else {
        models.User.create({
          username: req.body.username,
          password: req.body.password
        }).then(function (user){
          if(user) {
            session.user = user;
            res.redirect('/');
          }
        })
      }
    })
  }
})



module.exports = router;
