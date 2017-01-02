var http = require('http');
var express = require('express');
var app = express();
//var urlEnconde = require('urlencode');

//Establish View engine. Vash was deployed with NPM
app.set("view engine", "vash");

var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//Opt into Services
//app.use(express.urlencoded());
//app.use(urlEnconde);

//__dirname is a global variable that specifies the route of the app
app.use(express.static(__dirname + "/public"));

//Map the controllers folders. Any controller in this folder will be attached to the app
var controllers = require("./Controllers");
controllers.init(app);

//Create the http server
// var server = http.createServer(app);
// server.listen(3000);

http.createServer(app).listen(process.env.PORT || 8080);
