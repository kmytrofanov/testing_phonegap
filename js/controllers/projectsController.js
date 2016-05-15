var projectsController = function ($scope, dataStorage) {
    'use strict';
    $scope.projects = dataStorage.getProjects();
};

app.controller("projectsController", projectsController);