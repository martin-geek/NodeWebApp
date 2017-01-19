var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var session = require('express-session');

var app = express();

// Establish View engine. Vash was deployed with NPM
app.set("view engine", "vash");

// Opt into Services
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse json-coded bodies
app.use(bodyParser.json());
// manage sessions
app.use(session({ secret: "PluralsightTheBoard"}));
app.use(flash());


// __dirname is a global variable that specifies the route of the app
app.use(express.static(__dirname + "/public"));

// use authentication
var auth = require("./Auth");
auth.init(app);

// Map the controllers folders. Any controller in this folder will be attached to the app
var controllers = require("./Controllers");
controllers.init(app);

// Create the http server
http.createServer(app).listen(process.env.PORT || 8080);
