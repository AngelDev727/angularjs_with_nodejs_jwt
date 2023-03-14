(function(){
	var app = angular.module('myApp', ["ngRoute","ngCookies"]);

	app.config(function($routeProvider) {
	    $routeProvider
	    .when("/", {
	        templateUrl : "modules/login/login.html",
			controller : "loginCtrl1"
		})
		.when("/register", {
			templateUrl : "modules/login/register.html",
			controller : "registerCtrl"
		})
		.when("/dashboard",{
	        templateUrl: "modules/dashboard/dashboard.html",
			controller : "dashboardCtrl"
	    });
	});
})();
