//dependencies
var express = require('express');
var path = require('path');
var engines = require('consolidate')

//variables
var RUN_PORT = 8080;
var VIDEO_IN_PORT = 45679;
var CONTROL_OUT = 45678;
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

//index.html routing
app.get('/', function(req, res){
	res.render("index.html");
});

//robot_control.html routing
app.get('/robot_control', function(req, res){
	res.render("robot_control.html");
});

//error.html routing
app.get('/error', function(req, res){
	res.render("error.html");
});

//showing that the program is running on the RUN_PORT
app.listen(RUN_PORT, function(){
	console.log("Running on port " + RUN_PORT);
});
