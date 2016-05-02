var homeController = function ($scope, $location) {
    'use strict';
    $scope.$parent.title = "Demo Navigation";
    $scope.$parent.mainPage = true;
    $scope.canGoBack = false;
    
    $scope.navigateTo = function (page) {
        $location.path(page);
    };
};

app.controller("homeController", homeController);