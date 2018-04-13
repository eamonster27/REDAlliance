const express = require('express');
const router = express.Router();
const session = require('express-session');
const models = require('../models');
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json({ type: 'application/json'});

router.post('/attend', jsonParser, function(req, res){
  var eventId = req.body.id;
  console.log(eventId);
  var userId = session.user.dataValues.id
  console.log(userId);

})



module.exports = router;
