(function () {
    'use strict';
    multishare.controller('loginController', ['$scope', '$location', function ($scope, $location) {

        $scope.showSignIn = function (user) {
            $scope.show = true;
            $scope.hide = true;
        }
        $scope.showSignUp = function (user) {
            $scope.show = false;
            $scope.hide = false;

        }
         }])
}());