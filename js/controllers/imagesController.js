var imagesController = function ($scope, dataStorage) {
    'use strict';
    $scope.$parent.title = "Images";
    $scope.$parent.mainPage = false;
    $scope.$parent.canGoBack = true;
    
    dataStorage.getImages().then(function (response) { $scope.images = response.data; });
};

app.controller("imagesController", imagesController);