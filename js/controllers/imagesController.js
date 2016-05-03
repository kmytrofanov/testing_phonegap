var imagesController = function ($scope, dataStorage) {
    'use strict';
    $scope.$parent.title = "Images";
    $scope.$parent.mainPage = false;
    $scope.$parent.canGoBack = true;
    
    dataStorage.getImages().then(function (response) {
        $scope.images = response.data;
        for (var i = 0; i < $scope.images.length; i++){
            $scope.images[i].file = atob($scope.images[i].file);
        }
    });
    
    $scope.addNewImage = function(image){
        var encodedImage = btoa(image);
        var newImage = {"name":"NewFile2", "file":encodedImage};
        dataStorage.addNewImage(newImage)
            .then(function(response) {
                dataStorage.getImages().then(function (response) {
                    $scope.images = response.data;
                    for (var i = 0; i < $scope.images.length; i++){
                        $scope.images[i].file = atob($scope.images[i].file);
                    }
                });
            });
    };
    
    $scope.deleteImage = function(id){
        dataStorage.deleteImage(id)
            .then(function(response) {
                dataStorage.getImages().then(function (response) {
                    $scope.images = response.data;
                    for (var i = 0; i < $scope.images.length; i++){
                        $scope.images[i].file = atob($scope.images[i].file);
                    }
                });
            });
    };
};

app.controller("imagesController", imagesController);