var myApp = angular.module("myModule", [])
                   .controller("myController", function ($scope, $http) {
    $scope.message = "Table Header";
    var base64EncodedString = btoa('7f77ea7c3c6deb8e6b769176eef026bfe7cd3054fb418949171d7a7dfc954413');
    $http.defaults.headers.common.Authorization = 'Basic ' + base64EncodedString;
    $http.defaults.headers.post = {'Accept': 'application/json','Content-Type': 'application/json'};

    $scope.loadData = function () {
        $http.get('https://api.kumulos.com/v1/data/6205_6210_users')
        .then(function (response) {
            $scope.elements = response.data;
        });
    }
    
    $scope.loadData();
                       
    $scope.addNewUser = function (name) {
        var newUser = { "username":name };
        $http.post('https://api.kumulos.com/v1/data/6205_6210_users', newUser)
            .then(function(response) {
                $scope.success_message = response.data
                $scope.loadData();
            }, function(reason) {
                $scope.error_message = reason.data
            });
        };
                       
    $scope.deleteUser = function (id) {
        $http.delete('https://api.kumulos.com/v1/data/6205_6210_users/' + id)
            .then(function(response) {
                $scope.success_message = response.data
                $scope.loadData();
            }, function(reason) {
                $scope.error_message = reason.data
            });
            $scope.loadData();
        };
    });