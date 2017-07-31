var express = require("express");
var bodyParser = require("body-parser");






// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models/index.js");
require("./associations")(db);

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status


// Requiring our routes




// Syncing our database and logging a message to the user upon success
db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});