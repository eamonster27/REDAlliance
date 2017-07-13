const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  console.log("homepage.js router link successful!");
  res.render("homepage");
})

module.exports = router;
