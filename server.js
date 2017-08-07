var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');





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


//Handlebars config
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

// Requiring our routes
require("./controllers/routes/recipeRoutes.js")(app);
require("./controllers/routes/receiptRoutes.js")(app);
require("./controllers/routes/vendorMasterRoutes.js")(app);
require("./controllers/routes/htmlRoutes.js")(app);



// Syncing our database and logging a message to the user upon success
db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});