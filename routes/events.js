const express = require('express');
const router = express.Router();
const session = require('express-session');
const models = require('../models');
const bodyParser = require('body-parser');
const db = require('./db');

/* GET users listing. */
router.get('/events', function(req, res, next) {
    // res.send('respond with a resource');

    const values = db.query("SELECT * FROM public.event")
        .then(function (data) {
            let values = [];
            data.map(x => {
                values.push({
                    id: x.id,
                    title: x.title,
                    description: x.description,
                    location: x.location,
                    date: x.date
                })
            });
            console.log(values);
            res.json(values);
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        });
});

/**
 *
 * 2013-07-15 08:15:23.5+01
 *
 * @param dateString in yyyy-MM-dd-HH:mm:ss
 * @returns {string}
 * @see https://www.postgresql.org/docs/10/static/functions-datetime.html
 */
function postgres_date(dateString) {
    console.log("dateString", dateString);
    const year = dateString.substr(0,4);
    const month = dateString.substr(5,2);
    const day = dateString.substr(8,2);
    const hour = dateString.substr(11,2);
    const min = dateString.substr(14,2);
    const sec = dateString.substr(17,2);
    const retval = `${year}-${month}-${day} ${hour}:${min}:${sec}+01`;
    console.log("postgres_date", retval);
    return retval;
}

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
router.post('/events', jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);

    console.log(req.body);
    const title = req.body.title;
    const description = req.body.description;
    const location = req.body.location;
    const date = req.body.date;
    db.query('INSERT INTO public.event (title, description, location, date) VALUES(${title}, ${description}, ${location}, ${date})', {
        title: title,
        description: description,
        location: location,
        date: postgres_date(date)
    })
        .then(data => {
            // success, COMMIT was executed
            res.status(200).send("created event");
        })
        .catch(error => {
            // failure, ROLLBACK was executed
            res.status(500);
            res.render("unable to add event", {error: error});
        });
});

module.exports = router;
