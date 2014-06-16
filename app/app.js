// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular
    .module('app', ['ionic'])

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/dashboard')
    })

    .controller('appController', ['$scope', '$ionicSideMenuDelegate', function($scope, $ionicSideMenuDelegate){
        $scope.toggleMenu = function(){
            $ionicSideMenuDelegate.toggleLeft();
        }
        $scope.navigateHome = function(){

        }
    }]);
