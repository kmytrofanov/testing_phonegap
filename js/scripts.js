var app = angular.module("mainGaffer", [
    "ngRoute",
    'mobile-angular-ui.core'
]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {templateUrl: "templates/home.html",controller: "homeController"})
        .when("/projects", {templateUrl: "templates/projects.html",controller: "projectsController"})
        .when("/projectDetails/:id", {templateUrl: "templates/projectDetails.html", controller: "projectDetailsController"})
//        .when("/images", {templateUrl: "templates/images.html",controller: "imagesController"})
        .otherwise({redirectTo : "/projects"})
});

app.directive('gafProjectSummary', function(){
    return {
        scope: { project: '=project'},
        templateUrl: 'directives/projectSummary.html'
    }
});

app.directive('gafProjectOverview', function(){
    return {
        scope: { overview: '=overview'},
        templateUrl: 'directives/projectOverview.html'
    }
});

app.directive('gafChange', function(){
    return {
        scope: { change: '=change', history: '=history'},
        templateUrl: 'directives/change.html'
    }
});

app.directive('gafChangeSummary', function(){
    return {
        scope: { change: '=change'},
        templateUrl: 'directives/changeSummary.html'
    }
});

app.directive('gafTimelineEntry', function(){
    return {
        scope: { entry: '=entry'},
        templateUrl: 'directives/timelineEntry.html'
    }
});

app.directive('gafHistoryEntry', function(){
    return {
        scope: { entry: '=entry'},
        templateUrl: 'directives/historyEntry.html'
    }
});