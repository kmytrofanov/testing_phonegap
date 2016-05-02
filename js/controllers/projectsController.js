var projectsController = function ($scope, dataStorage) {
    'use strict';
    $scope.$parent.title = "Projects";
    $scope.$parent.mainPage = false;
    $scope.$parent.canGoBack = true;
    
    dataStorage.getUsers().then(function (response) { $scope.projects = response.data; });
};

app.controller("projectsController", projectsController);