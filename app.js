const express = require('express');
const app = express();
const mustache = require('mustache-express');
const session = require('express-session');
const bodyParser = require('body-parser');

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.use(express.static('public'));
app.set('layout', 'base');
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 3000;
app.listen(port);

var sess = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false
  }
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess));

app.use(require('./routes/session'));
app.use(require('./routes/register'));
app.use(require('./routes/homepage'));
app.use(require('./routes/newpost'));
app.use(require('./routes/events'));
app.use(require('./routes/attend'));


module.exports = app;
