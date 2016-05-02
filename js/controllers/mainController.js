var mainController = function ($scope, $log, dataStorage) {
    $scope.users_header = "Users";
    $scope.image_header = "Photos"; 
           
    dataStorage.getUsers().then(function (response) {$scope.elements = response.data});
    dataStorage.getImages().then(function (response) {$scope.images = response.data});
                       
    $scope.addNewUser = function (name) {
        dataStorage.addNewUser(name);
        dataStorage.getUsers().then(function (response) {$scope.elements = response.data});
    };
      
    $scope.deleteUser = function (id) {
        dataStorage.deleteUser(id);
        dataStorage.getUsers().then(function (response) {$scope.elements = response.data});
    };
};

app.controller("mainController", mainController);