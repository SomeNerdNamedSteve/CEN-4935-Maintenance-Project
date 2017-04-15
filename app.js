//dependencies
const express = require('express');
const path = require('path')

//constants
const RUN_PORT = 8080;
const VIDEO_IN_PORT = 45679;
const CONTROL_OUT = 45678;
const app = express();
const route = express.Router()

//express html rendering
app.use(express.static(__dirname+"/public/"));
app.set('port', (process.env.PORT || RUN_PORT));

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

app.listen(RUN_PORT, function(){
    console.log(__dirname);
	console.log("Running on port " + RUN_PORT);
});
