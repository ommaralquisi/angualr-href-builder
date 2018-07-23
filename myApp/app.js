(function() {
  'use strict';
  var app = angular.module('myApp', ['ngRoute']);
  app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: '/main.html',
        controller: 'mainController'
      })
      .when('/red', {
        templateUrl: '/red.html',
        controller: 'mainController'
      })
      .when('/blue', {
        templateUrl: '/blue.html',
        controller: 'mainController'
      })
      .when('/yellow', {
        templateUrl: '/yellow.html',
        controller: 'mainController'
      })
      .when('/orange', {
        templateUrl: '/orange.html',
        controller: 'mainController'
      })
      .when('/silver', {
        templateUrl: '/silver.html',
        controller: 'mainController'
      });
  });
  app.controller('mainController', function($scope) {
    $scope.openAlertWindow = function(params, e) {
      if (e.metaKey || e.ctrlKey) {
        return;
      }
      e.preventDefault();
      window.alert(params)
    }
  });
  app.directive('hrefBuilder', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var url = '/' + attrs.colour;
        attrs.$set('href', url || '');
       
      }
    }
  })
})();