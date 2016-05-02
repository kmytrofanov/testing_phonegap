var mainController = function ($scope, $log, $location, dataStorage) {
    $scope.addNewUser = function (name) {
        dataStorage.addNewUser(name);
        dataStorage.getUsers().then(function (response) {$scope.elements = response.data});
    };      
    $scope.deleteUser = function (id) {
        dataStorage.deleteUser(id);
        dataStorage.getUsers().then(function (response) {$scope.elements = response.data});
    };
    
    $scope.navigateTo = function (page) {
        $location.path(page);
        $scope.$parent.canGoBack = false;
        $scope.$parent.mainPage = true;
    };
};

app.controller("mainController", mainController);