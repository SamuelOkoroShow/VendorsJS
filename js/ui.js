var App = angular.module('vendors', ['ngRoute']);
var dashboardTabs = [
    {name: "Campaigns", link: "/campaigns.html", img: "img/campaigns.jpg"},{name:"Collections", link:"/collections.html", img:"img/collections.jpg"},{name:"Inventory", link:"/inventory.html", img:"img/inventory.jpg"}, {name:"Settings", link:"/settings.html", img:"img/settings.jpg"}
]

App.controller('mainCtrl', 
function ($scope) {
      
        $scope.title = "Hello World";
        $scope.dashboard = dashboardTabs;
});