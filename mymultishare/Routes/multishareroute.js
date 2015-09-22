multishare.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '../Templates/postdata.html',
            controller: 'postdataController'
        }).when('/addAccount', {
            templateUrl: '../Templates/addAccounts.html',
            controller: 'homeController'
        }).otherwise({
            redirectTo: '/home'
        })
});