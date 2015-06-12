(function(){
  var listsCtrl = function($scope, $log, listsFactory){
    $scope.lists = [];

    function init(){
      listsFactory.getLists()
        .success(function(lists){
          $scope.lists = lists;
        })
        .error(function(data, status, header, config){
          $log.log(data.error + ' ' + status);
        });
    }
    init();
  }

  listsCtrl.$inject = ['$scope', '$log', 'listsFactory'];

  angular.module('waitList')
    .controller('listsCtrl', listsCtrl);
}());