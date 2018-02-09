//app.js
var app = angular.module('myApp',[]);
app.controller('MyController', function($scope, $http) {
    $scope.data = [];
    var request = $http.get('/data');    
    request.success(function(data) {
        $scope.data = data;
    });
    request.error(function(data){
        console.log('Error: ' + data);
    });
});
