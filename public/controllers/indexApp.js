var app = angular.module('indexApp', []);

app.controller('indexCtrl', function($scope, $http) {

    $scope.ipAddr = "";
    $scope.setIP = function(){
        var config = {
            params : {
                "ipAddr" : $scope.ipAddr
            }
        }
        $http.get("http://127.0.0.1:8080/verify_ip/\:" + $scope.ipAddr).success(function(response){
            console.log(response);
        });
    }
});
