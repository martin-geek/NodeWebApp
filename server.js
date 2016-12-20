var http = require('http');
var express = require('express');
var app = express();

//Establish View engine. Vash was deployed with NPM
app.set("view engine", "vash");

//__dirname is a global variable that specifies the route of the app
app.use(express.static(__dirname + "/public"));

//Map the controllers folders. Any controller in this folder will be attached to the app
var controllers = require("./Controllers");
controllers.init(app);

//Create the http server
var server = http.createServer(app);
server.listen(3000);
