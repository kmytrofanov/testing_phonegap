var uploadController = function ($scope, $http, fileReader) {
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
        var object = {"name":"NewFile2", "file":$scope.imageSrc};
        $http.post('https://api.kumulos.com/v1/data/6205_6210_images', object)
            .then(function(response) {
                $scope.success_message = response.data;
            }, function(reason) {
                $scope.error_message = reason.data;
            });
    };
};


var fileSelectDirective = function(){
  return {
    link: function($scope,el){

      el.bind("change", function(e){

        $scope.file = (e.srcElement || e.target).files[0];
        $scope.getFile();
      })

    }

  }
};

app.controller("uploadController", uploadController);
app.directive("ngFileSelect", fileSelectDirective);