var app = angular.module('indexApp', []);
app.controller('indexCtrl', function($scope) {
    $scope.ipAddr= "";

    $scope.setIP = function(){
        console.log($scope.ipAddr);
    }
});
