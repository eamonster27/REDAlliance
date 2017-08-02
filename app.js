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

// var sess = {
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: false
// }
//
// if (app.get('env') === 'production') {
//   app.set('trust proxy', 1) // trust first proxy
//   sess.cookie.secure = true // serve secure cookies
// }
// app.use(session(sess));

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

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
