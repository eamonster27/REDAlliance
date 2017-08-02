const express = require('express');
const app = express();
const mustache = require('mustache-express');
const session = require('express-session');
const bodyParser = require('body-parser');

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.use(express.static('public'));
app.set('layout', 'base');
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 3000;
app.listen(port);

const sessionRoutes = require('./routes/session');
const registerRoutes = require('./routes/register');
const homepageRoute = require('./routes/homepage');
const newpostRoute = require('./routes/newpost');
const postRoute = require('./routes/post');

app.use(sessionRoutes);
app.use(registerRoutes);
app.use(homepageRoute);
app.use(newpostRoute);
app.use(postRoute);
