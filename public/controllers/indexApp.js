var app = angular.module('indexApp', []);

app.controller('indexCtrl', function($scope, $http, $window) {

    $scope.ipAddr = "";
    $scope.setIP = function(){
        var config = {
            params : {
                "ipAddr" : $scope.ipAddr
            }
        }
        $http.get("http://127.0.0.1:8080/verify_ip/\:" + $scope.ipAddr).success(function(response){
            route = "http://127.0.0.1:8080/" + response;
            $window.location.href = route;
        });
    }
});
