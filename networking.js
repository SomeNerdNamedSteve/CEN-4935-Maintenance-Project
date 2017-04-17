var net = require('net');

var VIDEO_IN_PORT = 45679;
var CONTROL_OUT = 45678;
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
    console.log("Connecting to robot at " + connectingIP);
}

module.exports = {
                    "validateIP": validateIP,
                    "connectToRobot": connectToRobot
                };
