var net = require('net');

var VIDEO_IN_PORT = 45679;
var CONTROL_OUT = 45678;

var connectToRobot = function(ip){
    if(net.isIP(ip)){
        return "robot_control";
    }else{
        return "error";
    }
}

module.exports.connectToRobot = connectToRobot;
