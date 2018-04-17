const express = require('express');
const router = express.Router();
const models = require('../models');
const session = require('express-session');


router.get('/', function(req, res){
  console.log("homepage.js router link successful!");

  console.log(req.session.id)

  if(!session.user){
    res.redirect('/login')
  }
  else {
    models.event.findAll()
    .then(function (events) {
      res.render("homepage", {
        items: events,
        user: session.user
      });
    })
  }
})

module.exports = router;
