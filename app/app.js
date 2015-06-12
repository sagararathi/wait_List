(function(){
  var app = angular.module('waitList',['ngRoute']);

      app.config(function($routeProvider){
        $routeProvider
        .when('/', {
          controller: 'listsCtrl',
          templateUrl: 'app/views/list.html'
        })
        .otherwise({ redirectTo: '/' });

      });

}());