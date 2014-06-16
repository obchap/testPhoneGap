'use strict';

(function(){

    angular
        .module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('programs', {
                    url: '/programs',
                    controller: 'programsController',
                    templateUrl: 'programs/programs.html'
                });
        })
        .controller('programsController', ['$scope', 'programsService', function($scope, programsService){

        }])
        .factory('programsService', ['$http', '$q', function($http, $q){

        }]);

})();
