//dependencies
var express = require('express');
var path = require('path');
var networking = require('./networking');

//variables
var RUN_PORT = 8080;
var publicPath = path.join(__dirname, 'public');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

//index.html routing
app.get('/', function(req, res){
	res.sendFile(publicPath + "/index.html");
});

//robot_control.html routing
app.get('/robot_control', function(req, res){
	res.sendFile(publicPath + "/robot_control.html");
});

//error.html routing
app.get('/error', function(req, res){
	res.sendFile(publicPath + "/error.html");
});

//HTTP GET Request from front end
app.get('/verify_ip/:ipAddr', function(req, res){
    var url = networking.connectToRobot(req.params.ipAddr.substring(1));
    res.send(url);
});

//showing that the program is running on the RUN_PORT
app.listen(RUN_PORT, function(){
	console.log("Running on port " + RUN_PORT);
});
