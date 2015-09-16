//function AppCtrl(){
//    console.log("Hello world from controller.");
//}


var app = angular.module('app', []);

app.controller('AppCtrl', function ($scope, $http) {
    console.log("Hello world from controller.");
    
    var refresh = function(){
        $http.get('/contactlist').success(function(response){
            console.log("I got the data i requested");

            $scope.contactlist = response;
            $scope.contact = "";
        });
    }
    
    refresh();
    
    $scope.addContact = function(){
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).success(function(response){
            console.log(response);
            refresh();
        });
    }

});