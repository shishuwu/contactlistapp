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
    
    $scope.remove = function (id){
        console.log("remove id from controller " + id);
        $http.delete('/contactlist/' + id).success(function(response){
            refresh();
        });
    
    }
    
    $scope.edit = function (id){
        console.log("edit id from controller " + id);
        $http.get('/contactlist/' + id).success(function(response){
            $scope.contact = response;
        });
    }

});