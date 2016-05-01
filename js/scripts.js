var myApp = angular.module("myModule", [])



.controller("myController", function ($scope, $http, $log) {
    $scope.users_header = "Users";
    $scope.image_header = "Photos";
    var base64EncodedString = btoa('7f77ea7c3c6deb8e6b769176eef026bfe7cd3054fb418949171d7a7dfc954413');
    $http.defaults.headers.common.Authorization = 'Basic ' + base64EncodedString;
    $http.defaults.headers.post = {'Accept': 'application/json','Content-Type': 'application/json'};    
    //$http.defaults.headers.post = {'Accept': '*/*','Content-Type': '*/*'};    
                       
    $scope.loadData = function () {
        $http.get('https://api.kumulos.com/v1/data/6205_6210_users')
        .then(function (response) {
            $scope.elements = response.data;
        });
        $http.get('https://api.kumulos.com/v1/data/6205_6210_images')
        .then(function (response) {
            $scope.images = response.data;
            $log.debug("coming through");
            $log.debug(response);
            $scope.success_message = response.statusText;
        }, function (response) {
            $scope.error_message = response.statusText;
        });
    };
    
    $scope.loadData();
                       
    $scope.addNewUser = function (name) {
        var newUser = { "username":name };
        $http.post('https://api.kumulos.com/v1/data/6205_6210_users', newUser)
            .then(function(response) {
                $scope.success_message = response.data;
                $scope.loadData();
            }, function(reason) {
                $scope.error_message = reason.data;
            });
        };
                       
    $scope.deleteUser = function (id) {
        $http.delete('https://api.kumulos.com/v1/data/6205_6210_users/' + id)
            .then(function(response) {
                $scope.success_message = response.data;
                $scope.loadData();
            }, function(reason) {
                $scope.error_message = reason.data;
            });
            $scope.loadData();
        };   
    })



.controller("UploadController", function ($scope, $http, fileReader) {
             console.log(fileReader)
        $scope.getFile = function () {
            $scope.progress = 0;
            fileReader.readAsDataUrl($scope.file, $scope)
                          .then(function(result) {
                              $scope.imageSrc = result;
                          });
        };

        $scope.$on("fileProgress", function(e, progress) {
            $scope.progress = progress.loaded / progress.total;
        });

        $scope.uploadFile = function(){
            //var encodedFile = btoa($scope.getFile());
            //var object = {"name":"NewFile", "file":encodedFile};
            var object = {"name":"NewFile2", "file":$scope.imageSrc};
            $http.post('https://api.kumulos.com/v1/data/6205_6210_images', object)
                .then(function(response) {
                    $scope.success_message = response.data;
                }, function(reason) {
                    $scope.error_message = reason.data;
                });
        }

    })



.directive("ngFileSelect",function(){

  return {
    link: function($scope,el){

      el.bind("change", function(e){

        $scope.file = (e.srcElement || e.target).files[0];
        $scope.getFile();
      })

    }

  }
});