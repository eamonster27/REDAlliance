var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://red_alliance_root:red_alliance_indy@localhost:5432/red_alliance_dev')

module.exports = db;