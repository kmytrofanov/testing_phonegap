var homeController = function ($scope) {
    'use strict';
    $scope.items = ["one", "two", "three", "repeating",
                    "one1", "two1", "three1", "repeating1",
                    "one2", "two2", "three2", "repeating2",
                    "one3", "two3", "three3", "repeating3",
                    "one4", "two4", "three4", "repeating4",
                    "one5", "two5", "three5", "repeating5",
                    "one6", "two6", "three6", "repeating6",
                    "one7", "two7", "three7", "repeating7",
                    "one8", "two8", "three8", "repeating8",
                    "one9", "two9", "three9", "repeating9"];
};

app.controller("homeController", homeController);