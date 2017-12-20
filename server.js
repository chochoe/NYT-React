require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(process.cwd() + 'public'));

app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactnewslist",
  {
    useMongoClient: true
  }
);

var db = mongoose.connection;

db.on('error', function(err) {
	console.log('Mongoose Error: ', err)
});

db.once('open', function() {
	console.log('Mongoose connection successful.');
});

var Article = require('./models/article.js');

var router = require('./controllers/newsController.js')
app.use('/', router);

const port = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


// configure express routes
// configure layout into main, searched, saved components