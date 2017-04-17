var app = angular.module('errorApp', []);

app.controller('errorCtrl', function($scope, $window) {
    $scope.backToHome = function(){
        $window.location.href = "http://127.0.0.1:8080/";
    }
});
