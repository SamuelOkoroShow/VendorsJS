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
App.config(function($routeProvider) {
	$routeProvider.when('/', {
       controller : 'homeCtrl',
		templateUrl : 'partials/home.html'
	});
});

//configures challenge route
App.config(function($routeProvider) {
	$routeProvider.when('/campaigns', {
       controller : 'campCtrl',
		templateUrl : 'partials/campaigns.html'
	});
});

App.controller('mainCtrl',
    function ($scope) {

        $scope.title = "Hello World";
        $scope.dashboard = dashboardTabs;
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
    
   $scope.saveui = function(hi){
       saveAPI(hi);
    }
    
    });