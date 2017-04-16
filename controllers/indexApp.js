var path = require('path');
var networking = require('../../src/networking.js');

var app = angular.module('indexApp', []);
app.controller('indexCtrl', function($scope) {
    $scope.ipAddr= "";

    $scope.setIP = function(){
        networking.connectToRobot($scope.ipAddr);
    }
});
