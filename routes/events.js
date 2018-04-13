const express = require('express');
const router = express.Router();
const session = require('express-session');
const models = require('../models');
const bodyParser = require('body-parser');

router.get('/events', function(req, res){
  return models.event.findAll().then(function(data){
    data = data.map(x => x.dataValues);

    obj = {};
    obj.eventItems = data;
    if(session.user)
      obj.user = session.user.dataValues;
    res.render("events", obj);
  });
})



module.exports = router;
