var net = require('net');

var connectingIP = ""
var VIDEO_IN_PORT = 45679;
var CONTROL_OUT_PORT = 45678;
var client = new net.Socket();

var validateIP = function(ip){
    if(net.isIP(ip)){
        connectingIP = ip;
        return "robot_control";
    }else{
        return "error";
    }
}

var connectToRobot = function(){
    client.connect(CONTROL_OUT_PORT, connectingIP, function(){
        console.log("connected to robot at " + connectingIP + ":" + CONTROL_OUT_PORT);
    })
}

var sendCommand = function(direction, amount){
    if(parseInt(amount) != NaN){
        command = direction + "|" + amount;
        client.write(command);
    }else{
        client.write(direction + "|0");
    }
}

module.exports = {
                    "validateIP": validateIP,
                    "connectToRobot": connectToRobot,
                    "sendCommand": sendCommand
                };
