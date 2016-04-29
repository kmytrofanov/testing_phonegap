var myApp = angular.module("myModule", [])
                   .controller("myController", function ($scope, $http) {
    $scope.message = "Table Header";
    var base64EncodedString = btoa('986efe8785747c87fd2d93e66e0058ae268894bf9769e88ebeec38cd3e35ef71');
    $http.defaults.headers.common.Authorization = 'Basic ' + base64EncodedString;
    $scope.elements = $http.get('https://api.kumulos.com/v1/data/6205_6210_users')
        .then(function (response) {
            $scope.elements = response.data;
            $scope.full_message = response;
        });
});

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}

checkConnection();