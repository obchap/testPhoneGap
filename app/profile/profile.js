'use strict';

(function(){

    angular
        .module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('profile', {
                    url: '/profile',
                    controller: 'profileController',
                    templateUrl: 'profile/profile.html'
                });
        })
        .controller('profileController', ['$scope', 'profileService', function($scope, profileService){
            $scope.user = profileService.get();
        }])
        .factory('profileService', ['$http', '$q', function($http, $q){
            var User = function(){
                this.firstName;
                this.lastName;
                this.userName;
                this.email;
                this.dob;
            };
            User.prototype.fullName = function(){
                return this.firstName + ' ' + this.lastName;
            };
            var currentUser = new User();
            currentUser.firstName = 'Knobb';
            currentUser.lastName = 'Creek';
            currentUser.userName = 'kcreek';
            currentUser.email = 'kcreek@goodtimes.com';
            currentUser.dob = '01.15.1992';


            function get(){
                return currentUser;
            }

            return{
                get: get
            };
        }]);

})();
