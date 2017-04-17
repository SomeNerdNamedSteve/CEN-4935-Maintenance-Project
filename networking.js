var net = require('net');
var convert = require('convert-string');

var VIDEO_IN_PORT = 45679;
var CONTROL_OUT_PORT = 45678;
var connectingIP = ""

var validateIP = function(ip){
    if(net.isIP(ip)){
        connectingIP = ip;
        return "robot_control";
    }else{
        return "error";
    }
}

var connectToRobot = function(){
    console.log("Connecting to Robot");
}

var sendCommand = function(direction, amount){
    command = direction + "|" + amount;
    console.log(command);
}

module.exports = {
                    "validateIP": validateIP,
                    "connectToRobot": connectToRobot,
                    "sendCommand": sendCommand
                };
