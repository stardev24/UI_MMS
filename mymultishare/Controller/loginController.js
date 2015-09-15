(function () {
    'use strict';
    multishare.controller('loginController', ['$scope', '$modal', function ($scope, $modal) {
        $scope.showSignIn = function () {
            $scope.show = true;
            $scope.hide = true;
        }
        $scope.showSignUp = function () {
            $scope.show = false;
            $scope.hide = false;
        }

        }]);

}());