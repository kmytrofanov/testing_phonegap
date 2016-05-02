app.factory('dataStorage', function($http, $log) {
    
    var base64EncodedString = btoa('7f77ea7c3c6deb8e6b769176eef026bfe7cd3054fb418949171d7a7dfc954413');
    $http.defaults.headers.common.Authorization = 'Basic ' + base64EncodedString;
    $http.defaults.headers.post = {'Accept': 'application/json','Content-Type': 'application/json'};    
    
    return {
        deleteUser: function (id){
            $http.delete('https://api.kumulos.com/v1/data/6205_6210_users/' + id)
            .then(function(response) {
                $log.info ("Deleted user " + id);
            }, function(reason) {
                $log.info ("Cannot delete user " + id);
            });
        },
        
        addNewUser: function (name) {
            var newUser = { "username":name };
            $http.post('https://api.kumulos.com/v1/data/6205_6210_users', newUser)
            .then(function(response) {
                $log.info ("Created user with name " + name);
            }, function(reason) {
                $log.info ("Cannot create user with name " + name);
            });
        },
        
        getUsers: function () {
            $log.debug("users queried");
            return $http.get('https://api.kumulos.com/v1/data/6205_6210_users');
        },
        
        getImages : function () {
            $log.debug("images queried");
            return $http.get('https://api.kumulos.com/v1/data/6205_6210_images')
        }
    };
})