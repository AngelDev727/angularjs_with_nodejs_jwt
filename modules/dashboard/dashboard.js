(function (window, angular, undefined) {
	'use strict';

	angular.module('myApp').controller('dashboardCtrl', dashboardCtrl);

	dashboardCtrl.$inject = ['$scope'];

	//controller for cf apps
	// function dashboardCtrl($scope) {
	// 	$scope.apps_loaded = false;
	// }

	function dashboardCtrl($rootScope, $scope, AuthService,$location) {
		var user = AuthService.getUser();
		$rootScope.user_name = user.name;
		$scope.logout = function () {
			AuthService.logout();
			$location.path("#/login");
		}
	}
});