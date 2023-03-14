(function (window, angular, undefined) {
    'use strict';
   
    angular.module('myApp').controller('registerCtrl', registerCtrl)
    registerCtrl.$inject = ['$scope', '$http', '$location', 'Session'];
    function registerCtrl($scope, $http, $location, Session) {
        $scope.signup = function() {
            var pass = $scope.newuser.password;
            var enc_pass = window.btoa(pass);
            $scope.newuser.password = enc_pass;
            $http({
                method  : 'POST',
                url     : 'http://localhost:3000/signup/',
                data    : $scope.newuser, //forms user object
            })
            .success(function(data) {
                console.log("done");
            });
        }
    }
}