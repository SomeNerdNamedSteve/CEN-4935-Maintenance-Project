var robotApp = angular.module('robotApp', []);

robotApp.controller('robotControlController', function($scope, $http){

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

});
