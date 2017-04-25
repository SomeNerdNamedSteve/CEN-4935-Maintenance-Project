var app = angular.module('indexApp', []);

app.controller('indexCtrl', function($scope, $http, $window) {

    $scope.ipAddr = "";
    $scope.userPin = "";
    $scope.setIP = function(){
        if($scope.userPin == 1234){
            var config = {
                params : {
                    "ipAddr" : $scope.ipAddr
                }
            }
            $http.get("http://127.0.0.1:5000/verify_ip/\:" + $scope.ipAddr).success(function(response){
                route = "http://127.0.0.1:5000/" + response;
                $window.location.href = route;
            });
        }else{
            $window.location.href = "http://127.0.0.1:5000/error";
        }
    }
});
