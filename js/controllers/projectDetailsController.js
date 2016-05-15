var projectDetailsController = function ($scope, dataStorage, $routeParams) {
    'use strict';
    $scope.overview = dataStorage.getProjectOverview($routeParams.id);
    $scope.timeline = dataStorage.getTimeline($routeParams.id);
    $scope.changes = dataStorage.getChanges($routeParams.id);
    $scope.history = dataStorage.getHistory($routeParams.id);
};

app.controller("projectDetailsController", projectDetailsController);