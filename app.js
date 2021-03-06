var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config/database');
var bodyParser = require('body-parser');
var session = require('express-session');
var validation = require('express-validator');


//mongodb
mongoose.connect(config.database);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to Mongodb');
});

var app = express();

//body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//express session
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}))

//express messages
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

//Express Validator
app.use(validation());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

//set global error variable
app.locals.errors = null;

var Page = require('./models/pages');
var pages = require('./routes/pages.js');
var pagesadmin = require('./routes/admin_pages.js');

app.use('/', pages);

// app.use(app.router);
// routes.initialize(app);

app.use('/admin', pagesadmin);

var port = 3000;
app.listen(port, function () {
    console.log('Servernya berjalan dengan port' + port);
});