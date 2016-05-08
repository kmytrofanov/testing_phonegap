var app = angular.module("myModule", [
    "ngRoute",
    'mobile-angular-ui.core'
]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {templateUrl: "templates/home.html",controller: "homeController"})
        .when("/projects", {templateUrl: "templates/projects.html",controller: "projectsController"})
        .when("/images", {templateUrl: "templates/images.html",controller: "imagesController"})
        .otherwise({redirectTo : "/home"})
});