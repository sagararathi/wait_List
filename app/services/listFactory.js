(function(){
  var listsFactory = function($http){
    var factory = {};

    factory.getPost = function(){
      return $http.get('/lists');
    };

    return factory;
  };

  listsFactory.$inject = ['$http'];
  angular.module('waitList').factory('listsFactory', listsFactory);
}());