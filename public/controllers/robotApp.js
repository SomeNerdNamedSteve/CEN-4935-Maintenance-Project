var robotApp = angular.module('robotApp', []);

robotApp.controller('robotControlController', function($scope, $http, $event){

    $scope.goUp = function(){
        var config = {
            params : {
                "dir": "up",
                "amount": $scope.movementAmount
            }
        }
        $http.post("http://127.0.0.1:5000/control/\:forward/\:" + $scope.movementAmount);
    }

    $scope.goDown = function(){
        var config = {
            params : {
                "dir": "back",
                "amount": $scope.movementAmount
            }
        }
        $http.post("http://127.0.0.1:5000/control/\:back/\:" + $scope.movementAmount);
    }

    $scope.goLeft = function(){
        var config = {
            params : {
                "dir": "left",
                "amount": $scope.rotationAmount
            }
        }
        $http.post("http://127.0.0.1:5000/control/\:left/\:" + $scope.rotationAmount);
    }

    $scope.goRight = function(){
        var config = {
            params : {
                "dir": "right",
                "amount": $scope.rotationAmount
            }
        }
        $http.post("http://127.0.0.1:5000/control/\:right/\:" + $scope.rotationAmount);
    }

    $scope.onKeyUp = function($event){
        var config = {
            params : {
                "dir": "up",
                "amount": $scope.movementAmount
            }
        }
        $http.post("http://127.0.0.1:5000/control/\:forward/\:" + $scope.movementAmount);
    }

    $scope.onKeyDown = function($event){
        var config = {
            params : {
                "dir": "back",
                "amount": $scope.movementAmount
            }
        }
        $http.post("http://127.0.0.1:5000/control/\:back/\:" + $scope.movementAmount);
    }

    $scope.onKeyLeft = function($event){
        var config = {
            params : {
                "dir": "left",
                "amount": $scope.rotationAmount
            }
        }
        $http.post("http://127.0.0.1:5000/control/\:left/\:" + $scope.rotationAmount);
    }

    $scope.onKeyRight = function($event){
        var config = {
            params : {
                "dir": "right",
                "amount": $scope.rotationAmount
            }
        }
        $http.post("http://127.0.0.1:5000/control/\:right/\:" + $scope.rotationAmount);
    }

});
