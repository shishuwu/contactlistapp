//function AppCtrl(){
//    console.log("Hello world from controller.");
//}


var app = angular.module('app', []);

app.controller('AppCtrl', function ($scope, $http) {
    console.log("Hello world from controller.");
    
    $http.get('/contactlist').success(function(response){
        console.log("I got the data i requested");
        
        $scope.contactlist = response;
    });
    
});