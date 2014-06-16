'use strict';

(function(){

    angular
        .module('loginApp', ['ionic'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('login', {
                    url: '/',
                    controller: 'loginController',
                    templateUrl: 'app/login/login.html'
                });
        })
        .controller('loginController', ['$scope', function($scope){
            $scope.login = function(){
                window.location.replace('app/app.html');
            }
        }])
        .factory('loginService', ['$http', '$q', function($http, $q){

        }]);

})();
