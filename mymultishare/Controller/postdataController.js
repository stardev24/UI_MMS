multishare.controller('postdataController', ['$scope', function ($scope) {
    $scope.tabs = [{
        title: 'Streams',
        url: 'one.tpl.html'
        }, {
        title: 'Analytics',
        url: 'two.tpl.html'
        }, {
        title: 'MyAccount',
        url: 'three.tpl.html'
    }];
    $scope.subtabs = [
        {
            title: 'Queues',
            url: 'queue.tpl.html'
        }, {
            title: 'Contributions',
            url: 'contribution.tpl.html'
        }, {
            title: 'Feeds'
        }
       ]

    $scope.currentTab = 'one.tpl.html';
    $scope.subMenuTab = 'queue.tpl.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }

    $scope.onClickSubTab = function (sub) {
        $scope.subMenuTab = sub.url;
    }

    $scope.isActiveTab = function (tabUrl) {
        return tabUrl == $scope.currentTab;
    }
    $scope.isActiveSubTab = function (subUrl) {
        return subUrl == $scope.subMenuTab;
    }

}]);