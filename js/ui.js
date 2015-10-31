var App = angular.module('vendors', ['ngRoute']);
var dashboardTabs = [
    {
        name: "Campaigns",
        link: "/campaigns",
        img: "img/campaigns.jpg"
    }, {
        name: "Collections",
        link: "/collections",
        img: "img/collections.jpg"
    }, {
        name: "Inventory",
        link: "/inventory",
        img: "img/inventory.jpg"
    }, {
        name: "Settings",
        link: "/settings",
        img: "img/settings.jpg"
    }
]

//configures initail route
App.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'homeCtrl',
        templateUrl: 'partials/home.html'
    });
});

//configures challenge route
App.config(function ($routeProvider) {
    $routeProvider.when('/campaigns', {
        controller: 'campCtrl',
        templateUrl: 'partials/campaigns.html'
    });
});

App.controller('mainCtrl',
    function ($scope) {

        $scope.title = "Hello World";
        $scope.dashboard = dashboardTabs;

        $scope.tableData = [{
            id: 1,
            name: "Mark",
            last: "Rose",
            number: 50
	}, {
            id: 2,
            name: "Jeff",
            last: "Fox",
            number: 13
	}, {
            id: 3,
            name: "Lisa",
            last: "Max",
            number: 24
	}, {
            id: 4,
            name: "Tony",
            last: "Tiger",
            number: 30
	}];
    });
App.controller('homeCtrl',
    function ($scope) {

        $scope.title = "Hello World";
        $scope.dashboard = dashboardTabs;
    });
App.directive("graph", function () {

    return {
        restirct: 'E',
        templateUrl: "partials/graph.html"
    }
});

App.controller('campCtrl',
    function ($scope) {

        $scope.errormargin = 20;
        $scope.success = 20;
        $scope.sweetspot = 20;
        $scope.company = "Google";
        $scope.slogan = "Winning at Life";
        $scope.dashboard = dashboardTabs;
        $scope.save_val = 0;
        setTimeout(function () {
            log()
        }, 1000);

        $scope.saveui = function (hi) {
            saveAPI(hi);
        }

    });

App.config(function ($routeProvider) {
    $routeProvider.when('/collections', {
        controller: 'collectCtrl',
        templateUrl: 'partials/collections.html'
    });
});

App.controller('collectCtrl', function ($scope) {
    $scope.tableData = [{
        id: 1,
        name: "Mark",
        last: "Rose",
        number: 50
	}, {
        id: 2,
        name: "Jeff",
        last: "Fox",
        number: 13
	}, {
        id: 3,
        name: "Lisa",
        last: "Max",
        number: 24
	}, {
        id: 4,
        name: "Tony",
        last: "Tiger",
        number: 30
	}];

    $scope.circleData = $scope.tableData;

    $scope.add = function () {

        var a = $scope.name;
        var b = $scope.last;
        var c = $scope.number;
        var d = ($scope.tableData.length + 1);

        $scope.tableData.push({
            id: d,
            name: a,
            last: b,
            number: c

        });
        $scope.circleData = [];
        $scope.circleData = $scope.tableData;
        $scope.width = $scope.width + 1;

    };
    $scope.update = function () {
        if (id != null) {
            $scope.tableData[(id - 1)].name = $scope.name;
            $scope.tableData[(id - 1)].last = $scope.last;
            $scope.tableData[(id - 1)].number = $scope.number;
            $scope.width = $scope.width + 1;
        }
    };
    $scope.select1 = function (x) {
        $scope.name = x.name;
        $scope.last = x.last;
        $scope.number = x.number;
        id = x.id;
    };

    $scope.yFunc = function () {
        return function (d) {
            return d.number;
        };
    };
    $scope.xFunc = function () {
        return function (d) {
            return d.name;
        };
    };


});
