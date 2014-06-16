'use strict';

(function(){

    angular
        .module('app')
        .controller('menuController', ['$scope', '$ionicSideMenuDelegate', 'menuService', function($scope, $ionicSideMenuDelegate, menuService){

            // Toggles left menu open and close
            $scope.toggleLeft = function(){
                $ionicSideMenuDelegate.toggleLeft();
            }

            //Gets the list of menu items
            $scope.menus = menuService.getMenu();

        }])
        .factory('menuService', ['$http', '$q', function($http, $q){

            // Static list of menu items
            var menus = [{
                'title': 'Account Information',
                'tabs': [
                    {
                        'id': 1,
                        'title': 'My Profile',
                        'page': 'profile'
                    },
                    {
                        'id': 2,
                        'title': 'Security Settings',
                        'page': 'security'
                    }
                ]
            }];

            function getMenu(){
                return menus;
            }

            return{
                getMenu: getMenu
            };
        }])
        .directive('menuDirective', function(){
            return{
                restrict: 'E',
                replace: true,
                templateUrl: 'menu/menu.html'
            }
        });

})();
