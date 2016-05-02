var projectsController = function ($scope, dataStorage) {
    'use strict';
    $scope.$parent.title = "Projects";
    $scope.$parent.mainPage = false;
    $scope.$parent.canGoBack = true;
    
    dataStorage.getProjects().then(function (response) { $scope.projects = response.data; });
    
    $scope.addNewProject = function(new_name){
        dataStorage.addNewProject(new_name)
            .then(function(response) {
                dataStorage.getProjects().then(function (response) { $scope.projects = response.data; });
            });
    };
    
    $scope.deleteProject = function(id){
        dataStorage.deleteProject(id)
            .then(function(response) {
                dataStorage.getProjects().then(function (response) { $scope.projects = response.data; });
            });
    };
};

app.controller("projectsController", projectsController);