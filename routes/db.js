var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://ebachari:null@localhost:5432/redalliance')

// pgp('postgres://asvjtyssybojvb:0ee2fc8bc6b26bad8bc04f5e23db01d59b2a8baf4148e52826b216ab63e77ba5@ec2-23-21-88-45.compute-1.amazonaws.com:5432/d3fuedq70879lm')

module.exports = db;
