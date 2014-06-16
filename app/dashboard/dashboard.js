'use strict';

(function(){

    angular
        .module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    controller: 'dashboardController',
                    templateUrl: 'dashboard/dashboard.html'
                });
        })
        .controller('dashboardController', ['$scope', 'dashboardService', function($scope, dashboardService){

            $scope.modules = dashboardService.getTabItems();
            $scope.carouselItems = dashboardService.getCarouselItems();

        }])
        .factory('dashboardService', ['$http', '$q', function($http, $q){
            // Item for the tabbed menu
            var TabItem = function(){
                this.title;
                this.class;
                this.page;
                this.count;
            };

            var tabItems = [];

            var messaging = new TabItem();
            messaging.title = 'Messages';
            messaging.class = 'ion-email';
            messaging.page = 'programs';
            messaging.count = 0;

            var sessions = new TabItem();
            sessions.title = 'Programs';
            sessions.class = 'ion-clipboard';
            sessions.page = 'programs';
            sessions.count = 3;

            var careteam = new TabItem();
            careteam.title = 'Care Team';
            careteam.class = 'ion-person-stalker';
            careteam.page = 'programs';
            careteam.count = 0;

            tabItems.push(messaging);
            tabItems.push(sessions);
            tabItems.push(careteam);

            function getTabItems(){
                return tabItems;
            }

            // Item for the carousel
            var CarouselItem = function(){
                this.title;
                this.sender;
                this.time;
                this.message;
            };

            var carouselItems = [];

            var messaging = new CarouselItem();
            messaging.title = 'Take a nap';
            messaging.sender = 'Dr. Seuss';
            messaging.time = '05/31/2014';
            messaging.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

            var session = new CarouselItem();
            session.title = 'Sessions';
            session.sender = 'Dr. Phil';
            session.time = '04/11/2013';
            session.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

            var careteam = new CarouselItem();
            careteam.title = 'Care Team';
            careteam.sender = 'Dr. Seuss';
            careteam.time = '05/31/2014';
            careteam.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

            carouselItems.push(messaging);
            carouselItems.push(session);
            carouselItems.push(careteam);

            function getCarouselItems(){
                return carouselItems;
            }

            return {
                getTabItems: getTabItems,
                getCarouselItems: getCarouselItems
            };
        }]);

})();
