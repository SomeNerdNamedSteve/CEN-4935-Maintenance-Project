var net = require('net');

var connectToRobot = function(ip){
    if(net.isIP(ip)){
        return "http://localhost:8080/robot_control"
    }else{
        return "http://localhost:8080/error"
    }
}

module.exports.checkIP = connectToRobot;
