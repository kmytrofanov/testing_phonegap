var imagesController = function ($scope, dataStorage) {
    'use strict';
    $scope.$parent.title = "Images";
    $scope.$parent.mainPage = false;
    $scope.$parent.canGoBack = true;
    
    dataStorage.getImages().then(function (response) { $scope.images = response.data; });
    
    $scope.addNewImage = function(image){
        var newImage = {"name":"NewFile2", "file":image};
        dataStorage.addNewImage(newImage)
            .then(function(response) {
                dataStorage.getImages().then(function (response) { $scope.images = response.data; });
            });
    };
    
    $scope.deleteImage = function(id){
        dataStorage.deleteImage(id)
            .then(function(response) {
                dataStorage.getImages().then(function (response) { $scope.images = response.data; });
            });
    };
};

app.controller("imagesController", imagesController);