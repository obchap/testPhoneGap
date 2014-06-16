'use strict';

(function(){

    angular
        .module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('security', {
                    url: '/security',
                    controller: 'securityController',
                    templateUrl: 'security/security.html'
                });
        })
        .controller('securityController', ['$scope', 'securityService', function($scope, securityService){
            $scope.questions = securityService.getQuestions();
        }])
        .factory('securityService', ['$http', '$q', function($http, $q){
            var questions = [];

            var Question = function(){
                this.text;
            };

            var q1 = new Question();
            q1.text = 'Name of first dog?';
            questions.push(q1);

            var q2 = new Question();
            q2.text = 'Who is your childhood hero?';
            questions.push(q2);

            var q3 = new Question();
            q3.text = 'Where did you go to high school?';
            questions.push(q3);

            var q4 = new Question();
            q4.text = 'What street did you grow up on?';
            questions.push(q4);

            var q5 = new Question();
            q5.text = 'What is your mother\'s maiden name?';
            questions.push(q5);


            function getQuestions(){
                return questions;
            }

            return{
                getQuestions: getQuestions
            };
        }]);

})();
